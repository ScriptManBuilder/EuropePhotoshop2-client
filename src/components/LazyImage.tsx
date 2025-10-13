import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWrapper = styled.div<{ isLoaded: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    filter: brightness(0.85) contrast(1.1) saturate(1.1);
    opacity: ${props => props.isLoaded ? 1 : 0};
    transform: ${props => props.isLoaded ? 'scale(1)' : 'scale(1.1)'};
  }
  
  &:hover img {
    filter: brightness(1.1) contrast(1.3) saturate(1.3);
    transform: scale(1.1) rotate(2deg);
  }
`;

const Placeholder = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    #1a1a2e 0%,
    #16213e 50%,
    #0f3460 100%
  );
  display: ${props => props.isVisible ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255,255,255,0.2);
    border-top-color: rgba(77, 183, 209, 0.8);
    border-right-color: rgba(255, 107, 107, 0.8);
    border-radius: 50%;
    animation: spin 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(1.1);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }
`;

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsLoaded(true); // Показываем даже если ошибка загрузки
  };

  return (
    <ImageWrapper ref={wrapperRef} isLoaded={isLoaded} className={className}>
      <Placeholder isVisible={!isLoaded} />
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}
    </ImageWrapper>
  );
};

export default LazyImage;