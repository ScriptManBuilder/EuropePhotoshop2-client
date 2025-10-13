import { useState, useEffect, useRef, useMemo } from 'react';

interface UseVirtualScrollOptions {
  itemHeight: number;
  containerHeight: number;
  overscan?: number;
}

interface UseVirtualScrollReturn<T> {
  virtualItems: T[];
  containerProps: {
    style: React.CSSProperties;
    onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  };
  scrollElementProps: {
    style: React.CSSProperties;
  };
}

export function useVirtualScroll<T>(
  items: T[],
  options: UseVirtualScrollOptions
): UseVirtualScrollReturn<T> {
  const { itemHeight, containerHeight, overscan = 5 } = options;
  const [scrollTop, setScrollTop] = useState(0);
  const scrollElementRef = useRef<HTMLDivElement>(null);

  const { virtualItems, totalHeight, startIndex, endIndex } = useMemo(() => {
    const visibleItemsCount = Math.ceil(containerHeight / itemHeight);
    const startIdx = Math.floor(scrollTop / itemHeight);
    const endIdx = Math.min(
      startIdx + visibleItemsCount + overscan,
      items.length
    );
    const actualStartIdx = Math.max(0, startIdx - overscan);

    const visibleItems = items.slice(actualStartIdx, endIdx);
    const totalH = items.length * itemHeight;

    return {
      virtualItems: visibleItems,
      totalHeight: totalH,
      startIndex: actualStartIdx,
      endIndex: endIdx
    };
  }, [items, scrollTop, itemHeight, containerHeight, overscan]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setScrollTop(scrollTop);
  };

  return {
    virtualItems,
    containerProps: {
      style: {
        height: containerHeight,
        overflow: 'auto',
      },
      onScroll: handleScroll,
    },
    scrollElementProps: {
      style: {
        height: totalHeight,
        position: 'relative',
        paddingTop: startIndex * itemHeight,
      },
    },
  };
}

// Хук для проверки видимости элемента
export function useIntersectionObserver(
  ref: React.RefObject<Element | HTMLImageElement>,
  options?: IntersectionObserverInit
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}

// Хук для ленивой загрузки изображений
export function useLazyImage(src: string, fallback?: string) {
  const [imageSrc, setImageSrc] = useState<string | undefined>(fallback);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const isInView = useIntersectionObserver(imgRef as React.RefObject<Element>);

  useEffect(() => {
    if (isInView && src && !isLoaded && !isError) {
      const img = new Image();
      
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      
      img.onerror = () => {
        setIsError(true);
        if (fallback) {
          setImageSrc(fallback);
        }
      };
      
      img.src = src;
    }
  }, [isInView, src, fallback, isLoaded, isError]);

  return {
    ref: imgRef,
    src: imageSrc,
    isLoaded,
    isError,
  };
}