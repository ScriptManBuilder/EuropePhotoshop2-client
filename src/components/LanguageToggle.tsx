import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface LanguageOption {
  code: string;
  name: string;
  flagCode: string; // ISO код страны для флага
}

const languages: LanguageOption[] = [
  { code: 'en', name: 'English', flagCode: 'gb' },
  { code: 'fr', name: 'Français', flagCode: 'fr' },
  { code: 'es', name: 'Español', flagCode: 'es' },
  { code: 'de', name: 'Deutsch', flagCode: 'de' },
  { code: 'it', name: 'Italiano', flagCode: 'it' },
  { code: 'pt', name: 'Português', flagCode: 'pt' },
  { code: 'nl', name: 'Nederlands', flagCode: 'nl' },
  { code: 'pl', name: 'Polski', flagCode: 'pl' },
  { code: 'ru', name: 'Русский', flagCode: 'ru' },
];

const LanguageToggleContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1000; /* Ниже мобильного меню */
`;

const LanguageButton = styled.button<{ isOpen: boolean }>`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 10px 16px; /* Увеличили правый padding с 14px до 16px */
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  min-width: 140px; /* Увеличили с 120px для лучшего отображения */
  justify-content: space-between;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.25);
  user-select: none;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }

  ${props => props.isOpen && `
    border-radius: 12px 12px 4px 4px;
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    transform: translateY(-1px);
  `}

  /* Адаптивность для планшетов */
  @media (max-width: 1024px) {
    padding: 8px 10px;
    font-size: 12px;
    min-width: 120px; /* Увеличили с 100px */
    gap: 6px;
  }

  /* Адаптивность для мобильных */
  @media (max-width: 768px) {
    padding: 6px 8px;
    font-size: 11px;
    min-width: 80px;
    border-radius: 8px;
    gap: 4px;
    height: 32px;
  }

  /* Для очень маленьких экранов */
  @media (max-width: 480px) {
    padding: 4px 6px;
    font-size: 10px;
    min-width: 70px;
    border-radius: 6px;
    height: 28px;
    gap: 3px;
  }

  /* Для самых маленьких экранов */
  @media (max-width: 375px) {
    padding: 3px 5px;
    font-size: 9px;
    min-width: 60px;
    height: 24px;
    gap: 2px;
  }
`;

const LanguageDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% - 2px);
  left: 0;
  right: 0;
  min-width: 160px; /* Минимальная ширина для комфортного чтения */
  background: white;
  border: 1px solid #e1e5e9;
  border-radius: 4px 4px 12px 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 1001;
  max-height: ${props => props.isOpen ? '320px' : '0'};
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.isOpen ? 1 : 0};
  transform: ${props => props.isOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)'};
  transform-origin: top center;
  backdrop-filter: blur(8px);

  /* Планшеты - адаптируем позиционирование */
  @media (max-width: 1024px) {
    max-height: ${props => props.isOpen ? '280px' : '0'};
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
  }

  /* Мобильные - центрируем под кнопкой */
  @media (max-width: 768px) {
    position: fixed;
    top: auto;
    left: 50%;
    right: auto;
    bottom: auto;
    transform: ${props => props.isOpen ? 'translateX(-50%) translateY(10px) scale(1)' : 'translateX(-50%) translateY(-10px) scale(0.9)'};
    width: 200px;
    border-radius: 12px;
    max-height: ${props => props.isOpen ? '250px' : '0'};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 9999; /* Ниже мобильного меню (z-index: 10000) */
    
    /* Кастомный скроллбар для мобильных */
    &::-webkit-scrollbar {
      width: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 2px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 2px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
    }
    
    /* Для Firefox */
    scrollbar-width: thin;
    scrollbar-color: #667eea #f1f1f1;
    
    /* Динамическое позиционирование относительно кнопки */
    --button-rect: '';
  }

  /* Очень маленькие экраны */
  @media (max-width: 480px) {
    width: 170px; /* Уменьшили с 180px */
    max-height: ${props => props.isOpen ? '220px' : '0'};
  }

  /* Совсем маленькие экраны */
  @media (max-width: 375px) {
    width: 160px; /* Еще меньше */
    max-height: ${props => props.isOpen ? '200px' : '0'};
  }
`;

const LanguageOption = styled.div`
  padding: 16px 20px; /* Увеличили padding для десктопа */
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 14px; /* Увеличили gap */
  transition: all 0.2s ease;
  border-bottom: 1px solid #f5f6f7;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: scaleY(0);
    transition: transform 0.2s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%);
    padding-left: 22px;
    
    &::before {
      transform: scaleY(1);
    }
  }

  &:last-child {
    border-bottom: none;
    border-radius: 0 0 12px 12px;
  }

  &:first-child {
    border-radius: 4px 4px 0 0;
  }

  /* Планшеты */
  @media (max-width: 1024px) {
    padding: 12px 16px;
    gap: 10px;
    font-size: 15px;
  }

  /* Мобильные */
  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 13px;
    gap: 8px;
    
    &:hover {
      padding-left: 18px;
    }

    &:first-child {
      border-radius: 12px 12px 0 0;
    }

    &:last-child {
      border-radius: 0 0 12px 12px;
    }
  }

  /* Очень маленькие экраны */
  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 12px;
    gap: 6px;
    
    &:hover {
      padding-left: 16px;
    }
  }

  /* Совсем маленькие экраны */
  @media (max-width: 375px) {
    padding: 6px 10px;
    font-size: 11px;
    gap: 5px;
    
    &:hover {
      padding-left: 14px;
    }
  }
    font-size: 12px;
    gap: 6px;
    
    &:hover {
      padding-left: 16px;
    }
  }
`;

const FlagIcon = styled.span<{ countryCode: string }>`
  width: 20px;
  height: 15px;
  flex-shrink: 0;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  
  /* CSS-флаги через градиенты и псевдоэлементы */
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background: ${props => {
      switch (props.countryCode) {
        case 'gb': return 'linear-gradient(to bottom, #012169 0%, #012169 33%, white 33%, white 66%, #C8102E 66%)';
        case 'fr': return 'linear-gradient(to right, #002654 0%, #002654 33%, white 33%, white 66%, #CE1126 66%)';
        case 'es': return 'linear-gradient(to bottom, #C60B1E 0%, #C60B1E 25%, #FFC400 25%, #FFC400 75%, #C60B1E 75%)';
        case 'de': return 'linear-gradient(to bottom, #000 0%, #000 33%, #DD0000 33%, #DD0000 66%, #FFCE00 66%)';
        case 'it': return 'linear-gradient(to right, #009246 0%, #009246 33%, white 33%, white 66%, #CE2B37 66%)';
        case 'pt': return 'linear-gradient(to right, #046A38 0%, #046A38 40%, #DA020E 40%)';
        case 'nl': return 'linear-gradient(to bottom, #AE1C28 0%, #AE1C28 33%, white 33%, white 66%, #21468B 66%)';
        case 'pl': return 'linear-gradient(to bottom, white 0%, white 50%, #DC143C 50%)';
        case 'ru': return 'linear-gradient(to bottom, white 0%, white 33%, #0039A6 33%, #0039A6 66%, #D52B1E 66%)';
        default: return '#ccc';
      }
    }};
  }

  @media (max-width: 1024px) {
    width: 16px;
    height: 12px;
  }

  @media (max-width: 768px) {
    width: 14px;
    height: 10px;
  }

  @media (max-width: 480px) {
    width: 12px;
    height: 9px;
  }

  @media (max-width: 375px) {
    width: 10px;
    height: 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Еще меньше */
  }

  @media (max-width: 375px) {
    font-size: 11px; /* Совсем маленький */
  }
`;

const LanguageName = styled.span`
  color: #2d3748;
  font-weight: 500;
  flex: 1;
  font-size: 14px; /* Базовый размер */
  white-space: nowrap; /* Предотвращаем перенос текста */
  overflow: hidden;

  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 13px; /* Меньше для мобильных */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Еще меньше */
  }

  @media (max-width: 375px) {
    font-size: 11px; /* Совсем маленький */
  }
`;

const ArrowIcon = styled.span<{ isOpen: boolean }>`
  font-size: 12px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  opacity: 0.8;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
  }

  @media (max-width: 375px) {
    font-size: 7px;
  }
`;

const CurrentLanguageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  min-width: 0; /* Позволяет сжиматься */

  span {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 1024px) {
    gap: 5px;
  }

  @media (max-width: 768px) {
    gap: 3px;
    
    span {
      font-size: 11px;
    }
  }

  @media (max-width: 480px) {
    gap: 2px;
    
    span {
      font-size: 10px;
    }
  }

  @media (max-width: 375px) {
    gap: 1px;
    
    span {
      font-size: 9px;
    }
  }
`;

/* Overlay для мобильных устройств */
const MobileOverlay = styled.div<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 9998; /* Ниже dropdown и мобильного меню */
    backdrop-filter: blur(2px);
    animation: ${props => props.isOpen ? 'fadeIn' : 'fadeOut'} 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

const LanguageToggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<LanguageOption>(languages[0]);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  // Обновляем позицию dropdown для мобильных
  const updateDropdownPosition = () => {
    if (buttonRef.current && window.innerWidth <= 768) {
      const rect = buttonRef.current.getBoundingClientRect();
      const newStyle: React.CSSProperties = {
        top: rect.bottom + 8,
        left: rect.left + rect.width / 2,
        transform: isOpen ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0.9)',
      };
      setDropdownStyle(newStyle);
    } else {
      setDropdownStyle({});
    }
  };

  useEffect(() => {
    if (isOpen) {
      updateDropdownPosition();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        updateDropdownPosition();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    // Закрытие dropdown при клике вне
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-language-toggle]')) {
        setIsOpen(false);
      }
    };

    // Закрытие dropdown при нажатии Escape
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    // Предотвращение скролла на мобильных при открытом dropdown
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    // Закрытие dropdown при открытии мобильного меню
    const checkMobileMenu = () => {
      const mobileMenu = document.querySelector('[data-nav="mobile-menu"]');
      if (mobileMenu && mobileMenu.getAttribute('data-is-open') === 'true') {
        setIsOpen(false);
      }
    };

    // Наблюдатель за изменениями в DOM для отслеживания мобильного меню
    const observer = new MutationObserver(checkMobileMenu);
    
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      window.addEventListener('scroll', handleScroll);
      
      // Отслеживаем изменения в DOM
      observer.observe(document.body, { 
        attributes: true, 
        subtree: true, 
        attributeFilter: ['data-is-open'] 
      });
      
      // Предотвращение скролла body на мобильных
      if (window.innerWidth <= 768) {
        document.body.style.overflow = 'hidden';
      }
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      
      // Восстановление скролла
      if (window.innerWidth <= 768) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen]);

  const handleLanguageSelect = (language: LanguageOption) => {
    setCurrentLanguage(language);
    setIsOpen(false);

    if (language.code === 'en') {
      // Если выбран английский - убираем все параметры перевода из URL
      const url = new URL(window.location.href);
      if (url.hostname.includes('translate.goog')) {
        // Если мы на переведенной странице, возвращаемся к оригиналу
        const originalUrl = url.searchParams.get('u');
        if (originalUrl) {
          window.location.href = decodeURIComponent(originalUrl);
          return;
        }
      }
      // Если уже на оригинальной странице, ничего не делаем
    } else {
      // Проверяем, работает ли сайт на localhost
      const isLocalhost = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1' ||
                         window.location.hostname.includes('local');

      if (isLocalhost) {
        // Для localhost показываем уведомление о том, что перевод будет работать только на продакшене
        const notification = document.createElement('div');
        notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #ff9500 0%, #ff6b35 100%);
          color: white;
          padding: 16px 20px;
          border-radius: 8px;
          z-index: 10000;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px;
          max-width: 400px;
          animation: slideIn 0.3s ease-out;
        `;
        notification.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>⚠️</span>
            <div>
              <div style="font-weight: 600; margin-bottom: 4px;">Development Mode</div>
              <div style="font-size: 12px; opacity: 0.9;">Language: ${language.name} selected. Google Translate works only on live websites, not localhost. Deploy to see translation in action!</div>
            </div>
          </div>
        `;
        
        // Добавляем анимацию
        const style = document.createElement('style');
        style.textContent = `
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `;
        document.head.appendChild(style);
        document.body.appendChild(notification);
        
        // Удаляем уведомление через 5 секунд
        setTimeout(() => {
          notification.remove();
          style.remove();
        }, 5000);
      } else {
        // Показываем уведомление о переводе для продакшена
        const notification = document.createElement('div');
        notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 16px 20px;
          border-radius: 8px;
          z-index: 10000;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px;
          max-width: 350px;
          animation: slideIn 0.3s ease-out;
        `;
        notification.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>🌍</span>
            <div>
              <div style="font-weight: 600; margin-bottom: 4px;">Translating to ${language.name}...</div>
              <div style="font-size: 12px; opacity: 0.9;">Website content and video subtitles will be auto-translated</div>
            </div>
          </div>
        `;
        
        // Добавляем анимацию
        const style = document.createElement('style');
        style.textContent = `
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `;
        document.head.appendChild(style);
        document.body.appendChild(notification);
        
        // Удаляем уведомление через 3 секунды
        setTimeout(() => {
          notification.remove();
          style.remove();
        }, 3000);

        // Перевод на выбранный язык через Google Translate
        setTimeout(() => {
          const currentUrl = window.location.href;
          const translateUrl = `https://translate.google.com/translate?sl=en&tl=${language.code}&u=${encodeURIComponent(currentUrl)}`;
          window.location.href = translateUrl;
        }, 500);
      }
    }

    // Сохраняем выбранный язык в localStorage
    localStorage.setItem('selectedLanguage', language.code);
  };

  // Восстанавливаем сохраненный язык при загрузке
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      const language = languages.find(lang => lang.code === savedLanguage);
      if (language) {
        setCurrentLanguage(language);
      }
    }

    // Проверяем, находимся ли мы на переведенной странице
    if (window.location.hostname.includes('translate.goog')) {
      const url = new URL(window.location.href);
      const targetLang = url.pathname.split('/')[2]; // Получаем целевой язык из URL
      const language = languages.find(lang => lang.code === targetLang);
      if (language) {
        setCurrentLanguage(language);
      }
    }
  }, []);

  return (
    <>
      <MobileOverlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <LanguageToggleContainer data-language-toggle>
        <LanguageButton 
          ref={buttonRef}
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          title="Change Language / Cambiar idioma / Changer la langue"
        >
          <CurrentLanguageInfo>
            <FlagIcon countryCode={currentLanguage.flagCode} />
            <span>{currentLanguage.code.toUpperCase()}</span>
          </CurrentLanguageInfo>
          <ArrowIcon isOpen={isOpen}>▼</ArrowIcon>
        </LanguageButton>

        <LanguageDropdown 
          isOpen={isOpen} 
          style={window.innerWidth <= 768 ? dropdownStyle : undefined}
        >
          {languages.map((language) => (
            <LanguageOption
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
            >
              <FlagIcon countryCode={language.flagCode} />
              <LanguageName>{language.name}</LanguageName>
            </LanguageOption>
          ))}
        </LanguageDropdown>
      </LanguageToggleContainer>
    </>
  );
};

export default LanguageToggle;