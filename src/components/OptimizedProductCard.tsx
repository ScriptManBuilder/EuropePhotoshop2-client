import React, { memo, useState, useRef } from 'react';
import styled from 'styled-components';
import { Product } from '../types/Product';
import { useLazyImage } from '../hooks/useVirtualScroll';
import { usePrice } from '../hooks/usePrice';

interface OptimizedProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (id: number) => void;
}

const CardContainer = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  height: 450px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.theme.colors.primary};
  }
`;

const ImageContainer = styled.div<{ $showVideo?: boolean }>`
  width: 100%;
  height: 240px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  margin-bottom: 16px;
  background: linear-gradient(45deg, #f8f9fa, #e9ecef);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.$showVideo ? '0' : '10px'};
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  border-radius: 8px;

  &:hover {
    transform: scale(1.02);
  }
`;

const ProductVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const VideoPlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: translate(-50%, -50%) scale(1.1);
  }

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 20px solid white;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    margin-left: 4px;
  }
`;

const MediaToggle = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 25px;
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(15px);
  z-index: 2;
  color: #333;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.08);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`;

const VideoBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  z-index: 3;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const LoadingPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 12px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const ErrorPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;
  border-radius: 12px;
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.h3`
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.01em;
`;

const ProductPrice = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 14px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.01em;
`;

const ProductDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 18px;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 400;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
`;

const AddToCartButton = styled.button`
  flex: 1;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.005em;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ViewDetailsButton = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 80px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.005em;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
  }
`;

const OptimizedProductCard: React.FC<OptimizedProductCardProps> = memo(({
  product,
  onAddToCart,
  onViewDetails
}) => {
  const { formatPrice } = usePrice();
  
  // Состояние для медиа
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Ленивая загрузка оригинального изображения
  const { ref: imgRef, src: imageSrc, isLoaded, isError } = useLazyImage(
    product.image,
    '/placeholder-image.jpg'
  );
  


  const handleAddToCart = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
  }, [onAddToCart, product]);

  const handleViewDetails = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onViewDetails(product.id);
  }, [onViewDetails, product.id]);

  const handleCardClick = React.useCallback(() => {
    onViewDetails(product.id);
  }, [onViewDetails, product.id]);

  const toggleMedia = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.video) {
      setShowVideo(!showVideo);
      if (!showVideo && videoRef.current) {
        // Load video when switching to video view
        videoRef.current.load();
      }
    }
  }, [showVideo, product.video]);

  const handleVideoPlay = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, []);

  const handleVideoLoaded = React.useCallback(() => {
    setIsVideoLoaded(true);
  }, []);

  return (
    <CardContainer onClick={handleCardClick}>
      <ImageContainer $showVideo={showVideo}>
        {product.videos && product.videos.length > 1 && (
          <VideoBadge>
            {product.videos.length} Videos
          </VideoBadge>
        )}
        
        {product.video && (
          <MediaToggle onClick={toggleMedia}>
            {showVideo ? '📷 Image' : '🎬 Preview'}
          </MediaToggle>
        )}
        
        {showVideo && product.video ? (
          <div ref={imgRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
            <ProductVideo
              ref={videoRef}
              onLoadedData={handleVideoLoaded}
              controls
              controlsList="nodownload noremoteplayback"
              playsInline
              preload="metadata"
              style={{ display: isVideoLoaded ? 'block' : 'none' }}
            >
              <source src={product.video} type="video/mp4" />
              <track
                kind="subtitles"
                src={`/subtitles/courses/${product.id}-en.vtt`}
                srcLang="en"
                label="English"
                default
              />
              <track
                kind="subtitles"
                src={`/subtitles/courses/${product.id}-fr.vtt`}
                srcLang="fr"
                label="Français"
              />
              <track
                kind="subtitles"
                src={`/subtitles/courses/${product.id}-es.vtt`}
                srcLang="es"
                label="Español"
              />
              <track
                kind="subtitles"
                src={`/subtitles/courses/${product.id}-nl.vtt`}
                srcLang="nl"
                label="Nederlands"
              />
              Your browser does not support the video tag.
            </ProductVideo>
            {!isVideoLoaded && <LoadingPlaceholder />}
            {isVideoLoaded && (
              <VideoPlayButton onClick={handleVideoPlay} />
            )}
          </div>
        ) : (
          <div ref={imgRef}>
            {!isLoaded && !isError && <LoadingPlaceholder />}
            {isError && <ErrorPlaceholder>Image unavailable</ErrorPlaceholder>}
            {isLoaded && imageSrc && (
              <ProductImage 
                src={imageSrc} 
                alt={product.name}
                loading="lazy"
              />
            )}
          </div>
        )}
      </ImageContainer>
      
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatPrice(product.price)}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        
        <ButtonGroup>
          <AddToCartButton onClick={handleAddToCart}>
            Add to Cart
          </AddToCartButton>
          <ViewDetailsButton onClick={handleViewDetails}>
            View Details
          </ViewDetailsButton>
        </ButtonGroup>
      </ProductInfo>
    </CardContainer>
  );
});

OptimizedProductCard.displayName = 'OptimizedProductCard';

export default OptimizedProductCard;