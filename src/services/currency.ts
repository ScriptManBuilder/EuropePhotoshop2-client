// Currency service for automatic currency conversion
export type Currency = 'EUR' | 'USD' | 'GBP' | 'CHF' | 'SEK' | 'NOK' | 'DKK' | 'PLN' | 'CZK' | 'CAD';

interface CurrencyRates {
  EUR: number;
  USD: number;
  GBP: number;
  CHF: number;
  SEK: number;
  NOK: number;
  DKK: number;
  PLN: number;
  CZK: number;
  CAD: number;
}

class CurrencyService {
  private rates: CurrencyRates = {
    EUR: 1.0,    // Base currency - всегда 1.0
    USD: 1.08,   // Fallback rates if API fails
    GBP: 0.86,   
    CHF: 0.97,   
    SEK: 11.50,  
    NOK: 11.80,  
    DKK: 7.45,   
    PLN: 4.35,   
    CZK: 25.20,  
    CAD: 1.48    
  };

  private lastFetchTime: number = 0;
  private fetchInterval: number = 30 * 60 * 1000; // 30 minutes

  private currentCurrency: Currency = 'EUR';

  constructor() {
    // Load saved currency from localStorage
    const saved = localStorage.getItem('selectedCurrency') as Currency;
    if (saved && this.isValidCurrency(saved)) {
      this.currentCurrency = saved;
    }
    
    // Fetch rates on initialization
    this.fetchExchangeRates();
  }

  // Check if currency is valid
  private isValidCurrency(currency: string): currency is Currency {
    const validCurrencies: Currency[] = ['EUR', 'USD', 'GBP', 'CHF', 'SEK', 'NOK', 'DKK', 'PLN', 'CZK', 'CAD'];
    return validCurrencies.includes(currency as Currency);
  }

  // Fetch exchange rates from API
  private async fetchExchangeRates(): Promise<void> {
    const now = Date.now();
    
    // Don't fetch if we fetched recently
    if (now - this.lastFetchTime < this.fetchInterval) {
      return;
    }

    try {
      // Using exchangerate-api.com (free tier: 1500 requests/month)
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/EUR`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates');
      }

      const data = await response.json();
      
      // Update rates with API data
      if (data.rates) {
        this.rates = {
          EUR: 1.0, // Base currency
          USD: data.rates.USD || this.rates.USD,
          GBP: data.rates.GBP || this.rates.GBP,
          CHF: data.rates.CHF || this.rates.CHF,
          SEK: data.rates.SEK || this.rates.SEK,
          NOK: data.rates.NOK || this.rates.NOK,
          DKK: data.rates.DKK || this.rates.DKK,
          PLN: data.rates.PLN || this.rates.PLN,
          CZK: data.rates.CZK || this.rates.CZK,
          CAD: data.rates.CAD || this.rates.CAD,
        };
        
        this.lastFetchTime = now;
      }
    } catch (error) {
      // Failed to fetch exchange rates, using fallback rates
    }
  }

  // Public method to manually refresh rates
  async refreshRates(): Promise<void> {
    this.lastFetchTime = 0; // Force refresh
    await this.fetchExchangeRates();
  }

  // Set current currency
  setCurrency(currency: Currency): void {
    this.currentCurrency = currency;
    localStorage.setItem('selectedCurrency', currency);
    
    // Refresh exchange rates when currency changes
    this.fetchExchangeRates();
    
    // Отправляем событие об изменении валюты
    window.dispatchEvent(new CustomEvent('currencyChanged', {
      detail: { currency }
    }));
  }

  // Get current currency
  getCurrency(): Currency {
    return this.currentCurrency;
  }

  // Initialize currency from localStorage
  initCurrency(): void {
    const saved = localStorage.getItem('selectedCurrency') as Currency;
    if (saved && (saved === 'USD' || saved === 'EUR')) {
      this.currentCurrency = saved;
    } else {
      // Если нет сохраненной валюты, устанавливаем EUR по умолчанию
      this.currentCurrency = 'EUR';
      localStorage.setItem('selectedCurrency', 'EUR');
    }
  }

  // Convert price from EUR to target currency
  convertPrice(priceInEUR: number, targetCurrency?: Currency): number {
    const currency = targetCurrency || this.currentCurrency;
    const rate = this.rates[currency];
    const convertedPrice = parseFloat((priceInEUR * rate).toFixed(2));
    
    return convertedPrice;
  }

  // Format price with currency symbol
  formatPrice(priceInEUR: number, targetCurrency?: Currency): string {
    const currency = targetCurrency || this.currentCurrency;
    const convertedPrice = this.convertPrice(priceInEUR, currency);
    
    const symbols = {
      EUR: '€',
      USD: '$',
      GBP: '£',
      CHF: 'Fr',
      SEK: 'kr',
      NOK: 'kr',
      DKK: 'kr',
      PLN: 'zł',
      CZK: 'Kč',
      CAD: 'C$'
    };

    const formatted = `${convertedPrice.toFixed(2)} ${symbols[currency]}`;
    
    return formatted;
  }

  // Get currency symbol
  getCurrencySymbol(currency?: Currency): string {
    const curr = currency || this.currentCurrency;
    const symbols = {
      EUR: '€',
      USD: '$',
      GBP: '£',
      CHF: 'Fr',
      SEK: 'kr',
      NOK: 'kr',
      DKK: 'kr',
      PLN: 'zł',
      CZK: 'Kč',
      CAD: 'C$'
    };
    return symbols[curr];
  }

  // Update exchange rates (could be called from an API)
  updateRates(newRates: Partial<CurrencyRates>): void {
    this.rates = { ...this.rates, ...newRates };
  }

  // Get all available currencies
  getAvailableCurrencies(): Currency[] {
    return ['USD', 'EUR'];
  }

  // Get current exchange rate
  getExchangeRate(fromCurrency: Currency = 'EUR', toCurrency?: Currency): number {
    const to = toCurrency || this.currentCurrency;
    return this.rates[to] / this.rates[fromCurrency];
  }
}

// Create singleton instance
export const currencyService = new CurrencyService();

// Initialize on import
currencyService.initCurrency();

// Export for use in components
export default currencyService;