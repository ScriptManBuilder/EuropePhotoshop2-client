import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button } from '../styles/GlobalStyles';
import { useCart } from '../contexts/CartContext';
import { products, Product } from '../data/products';
import { usePrice } from '../hooks/usePrice';
import {
  ProductWrapper,
  ProductContainer,
  ImageSection,
  MainImage,
  ImageGallery,
  ThumbnailImage,
  VideoThumbnailContainer,
  VideoThumbnailImage,
  VideoPlayIcon,
  VideoPlayer,
  InfoSection,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  DetailedDescription,
  FeaturesList,
  FeatureItem,
  SpecificationsSection,
  SpecificationsTitle,
  SpecificationsList,
  SpecificationItem,
  SpecLabel,
  SpecValue,
  ActionButtons,
  CategoryBadge,
  PageHeader,
  PageTitle
} from '../styles/pages/ProductDetailStyles';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const { formatPrice } = usePrice();
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [isVideoMode, setIsVideoMode] = useState<boolean>(false);

  const product = products.find((p: Product) => p.id === parseInt(id || '0'));

  useEffect(() => {
    if (!product) {
      navigate('/products');
    } else {
      setSelectedImage(product.image);
      // Автоматически показывать видео, если оно есть
      setIsVideoMode(!!product.video);
    }
  }, [product, navigate]);

  if (!product) {
    return (
      <ProductWrapper>
        <Container>
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <h2>Product not found</h2>
            <p>Redirecting to products page...</p>
          </div>
        </Container>
      </ProductWrapper>
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        category: product.category
      }
    });
  };

  return (
    <ProductWrapper>
      <Container>
        <PageHeader style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '40px 0',
          borderRadius: '12px',
          marginBottom: '40px',
          boxShadow: '0 8px 32px rgba(102, 126, 234, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3
          }}></div>
          <PageTitle style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'white',
            textAlign: 'center',
            margin: 0,
            position: 'relative',
            zIndex: 1,
            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>
            Course Details
          </PageTitle>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
            fontSize: '1.1rem',
            margin: '10px 0 0 0',
            position: 'relative',
            zIndex: 1
          }}>
             PhotoShop Education Platform
          </p>
        </PageHeader>
        
        <ProductContainer>
          <ImageSection>
            {isVideoMode && product.video ? (
              <VideoPlayer
                controls
                controlsList="nodownload noremoteplayback"
                autoPlay
                muted={false}
              >
                <source src={product.video} type="video/mp4" />
                {/* Subtitles for multiple languages */}
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
              </VideoPlayer>
            ) : (
              <MainImage src={selectedImage} alt={product.name} />
            )}
            
            <ImageGallery>
              {/* Добавляем кнопку для видео, если оно есть */}
              {product.video && (
                <VideoThumbnailContainer
                  isSelected={isVideoMode}
                  onClick={() => setIsVideoMode(true)}
                >
                  <VideoThumbnailImage
                    src={product.image}
                    alt="Video Preview"
                  />
                  <VideoPlayIcon>
                    ▶
                  </VideoPlayIcon>
                </VideoThumbnailContainer>
              )}
              
              {/* Обычные картинки */}
              {product.images.map((image, index) => (
                <ThumbnailImage
                  key={index}
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  isSelected={selectedImage === image && !isVideoMode}
                  onClick={() => {
                    setSelectedImage(image);
                    setIsVideoMode(false);
                  }}
                />
              ))}
            </ImageGallery>
          </ImageSection>
          
          <InfoSection>
            <CategoryBadge>{product.category}</CategoryBadge>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>{formatPrice(product.price)}</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>
            
            <DetailedDescription>
              <h4>Course Details</h4>
              <p>{product.detailedDescription}</p>
            </DetailedDescription>
            
            <FeaturesList>
              {product.features.map((feature: string, index: number) => (
                <FeatureItem key={index}>{feature}</FeatureItem>
              ))}
            </FeaturesList>
            
            <SpecificationsSection>
              <SpecificationsTitle>Technical Specifications</SpecificationsTitle>
              <SpecificationsList>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <SpecificationItem key={key}>
                    <SpecLabel>{key}:</SpecLabel>
                    <SpecValue>{value}</SpecValue>
                  </SpecificationItem>
                ))}
              </SpecificationsList>
            </SpecificationsSection>
            
            <ActionButtons>
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                style={{ 
                  flex: 1,
                  padding: '15px 25px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  backgroundColor: product.inStock ? '#667eea' : '#ccc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: product.inStock ? 'pointer' : 'not-allowed',
                  marginRight: '10px',
                  transition: 'all 0.3s ease',
                  boxShadow: product.inStock ? '0 4px 12px rgba(102, 126, 234, 0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (product.inStock) {
                    e.currentTarget.style.backgroundColor = '#5a67d8';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (product.inStock) {
                    e.currentTarget.style.backgroundColor = '#667eea';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              
              <button
                onClick={() => navigate('/products')}
                style={{ 
                  flex: 1,
                  padding: '15px 25px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  backgroundColor: 'transparent',
                  color: '#667eea',
                  border: '2px solid #667eea',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginLeft: '10px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#667eea';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#667eea';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                ← Back to Courses
              </button>
            </ActionButtons>
          </InfoSection>
        </ProductContainer>
        
       
      </Container>
    </ProductWrapper>
  );
};

export default ProductDetail;