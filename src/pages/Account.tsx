import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../styles/GlobalStyles';
import { useAuth } from '../contexts/AuthContext';
import { usePrice } from '../hooks/usePrice';
import { products, getProductVideo, getProductVideos } from '../data/products';
import SubscriptionManagement from '../components/SubscriptionManagement';
import {
  AccountWrapper,
  AccountContent,
  Sidebar,
  SidebarItem,
  MainContent,
  SectionTitle,
  InfoCard,
  InfoGrid,
  InfoItem,
  LoginPromptWrapper,
  LoginPromptCard,
  LoginIcon,
  LoginTitle,
  LoginSubtitle,
  LoginButtons,
  LoginButton,
  WelcomeSection,
  WelcomeTitle,
  WelcomeSubtitle,
  EmptyOrdersText,
  EmptyOrdersButtonWrapper,
  ShoppingButton,
  CoursesGrid,
  CourseCard,
  CourseCardHeader,
  CourseTitle,
  CourseDescription,
  CourseStatus,
  CourseVideoWrapper,
  CourseVideo
} from '../styles/pages/AccountStyles';

const Account: React.FC = () => {
  const { user, logout } = useAuth();
  const { formatPrice } = usePrice();
  const [activeTab, setActiveTab] = useState('profile');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Отслеживание изменения размера экрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Дополнительная защита от скачивания видео
  useEffect(() => {
    // Отключаем контекстное меню на всей странице для курсов
    const handleContextMenu = (e: MouseEvent) => {
      if (activeTab === 'courses') {
        e.preventDefault();
      }
    };

    // Отключаем некоторые горячие клавиши
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeTab === 'courses') {
        // Отключаем Ctrl+S, Ctrl+Shift+I, F12
        if (
          (e.ctrlKey && e.key === 's') ||
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          e.key === 'F12'
        ) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeTab]);

  // Данные курсов иллюстрации из products.ts
  const testAccountCourses = products.map(product => {
    const courseVideos = [];
    
    // Добавляем основное видео превью
    if (product.video) {
      courseVideos.push(product.video);
    }
    
    // Добавляем дополнительные видео для премиум курсов
    if (product.videos) {
      courseVideos.push(...product.videos);
    }
    
    return {
      id: product.id,
      title: product.name,
      description: product.description,
      price: formatPrice(product.price),
      videos: courseVideos
    };
  });

  const renderProfileSection = () => (
    <div>
      <SectionTitle>PROFILE INFORMATION</SectionTitle>
      
      <InfoCard>
        <InfoGrid>
          <InfoItem>
            <h4>First Name</h4>
            <p>{user?.firstName || 'Not provided'}</p>
          </InfoItem>
          <InfoItem>
            <h4>Last Name</h4>
            <p>{user?.lastName || 'Not provided'}</p>
          </InfoItem>
          <InfoItem>
            <h4>Email Address</h4>
            <p>{user?.email}</p>
          </InfoItem>
          <InfoItem>
            <h4>Account Status</h4>
            <p>Active</p>
          </InfoItem>
        </InfoGrid>
      </InfoCard>
    </div>
  );

  const renderOrdersSection = () => (
    <div>
      <SectionTitle>ORDER HISTORY</SectionTitle>
      
      <InfoCard>
        <EmptyOrdersText>
          No orders found. Start shopping to see your order history here.
        </EmptyOrdersText>
        <EmptyOrdersButtonWrapper>
          <ShoppingButton as={Link} to="/products" variant="primary">
            Start Shopping
          </ShoppingButton>
        </EmptyOrdersButtonWrapper>
      </InfoCard>
    </div>
  );

  const renderCoursesSection = () => {
    // Показываем курсы только для тестового аккаунта
    const isTestAccount = user?.email === 'test@test.com';
    
    if (!isTestAccount) {
      return (
        <div>
          <SectionTitle>MY PHOTOSHOP COURSES</SectionTitle>
          
          <InfoCard>
            <EmptyOrdersText>
              Your purchased Adobe Photoshop courses will appear here after successful payment.
            </EmptyOrdersText>
            <EmptyOrdersText style={{ fontSize: '1rem', marginTop: '1rem', opacity: 0.8 }}>
              Once you purchase any Adobe Photoshop course, you'll have lifetime access to all course materials, 
              including videos, downloadable resources, and future updates.
            </EmptyOrdersText>
            <EmptyOrdersButtonWrapper>
              <ShoppingButton as={Link} to="/products" variant="primary">
                Browse Adobe Photoshop Courses
              </ShoppingButton>
            </EmptyOrdersButtonWrapper>
          </InfoCard>
        </div>
      );
    }

    // Курсы для тестового аккаунта - новая продвинутая структура
    return (
      <div>
        <SectionTitle>MY ADOBE PHOTOSHOP COURSES</SectionTitle>
        
        {/* Course Progress Overview */}
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '15px',
          padding: isMobile ? '20px' : '30px',
          marginBottom: '30px',
          color: 'white'
        }}>
          <h3 style={{ 
            fontSize: isMobile ? '1.2rem' : '1.5rem', 
            marginBottom: '10px' 
          }}>Learning Progress</h3>
          <p style={{ 
            opacity: 0.9, 
            marginBottom: '20px',
            fontSize: isMobile ? '0.9rem' : '1rem'
          }}>Continue your Adobe Photoshop creative design mastery journey</p>
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '15px' : '30px', 
            flexWrap: 'wrap',
            justifyContent: isMobile ? 'space-around' : 'flex-start'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: isMobile ? '1.5rem' : '2rem', 
                fontWeight: 'bold' 
              }}>{testAccountCourses.length}</div>
              <div style={{ 
                fontSize: isMobile ? '0.8rem' : '0.9rem', 
                opacity: 0.8 
              }}>Total Courses</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: isMobile ? '1.5rem' : '2rem', 
                fontWeight: 'bold' 
              }}>7</div>
              <div style={{ 
                fontSize: isMobile ? '0.8rem' : '0.9rem', 
                opacity: 0.8 
              }}>Hours of Content</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: isMobile ? '1.5rem' : '2rem', 
                fontWeight: 'bold' 
              }}>∞</div>
              <div style={{ 
                fontSize: isMobile ? '0.8rem' : '0.9rem', 
                opacity: 0.8 
              }}>Lifetime Access</div>
            </div>
          </div>
        </div>

        {/* Courses List - One per row with larger video */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {testAccountCourses.map((course, index) => (
            <div key={course.id} style={{
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              border: '1px solid #e2e8f0'
            }}>
              {/* Course Header */}
              <div style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                padding: isMobile ? '15px 20px' : '20px 30px',
                color: 'white'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? '10px' : '0'
                }}>
                  <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                    <div style={{ 
                      fontSize: isMobile ? '0.8rem' : '0.9rem',
                      opacity: 0.9, 
                      marginBottom: '5px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      Course {index + 1} of {testAccountCourses.length}
                    </div>
                    <h3 style={{ 
                      fontSize: isMobile ? '1.1rem' : '1.4rem',
                      fontWeight: '700',
                      margin: 0,
                      lineHeight: '1.3'
                    }}>
                      {course.title}
                    </h3>
                  </div>
                  <div style={{
                    background: 'rgba(255,255,255,0.2)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: isMobile ? '0.8rem' : '0.9rem',
                    fontWeight: '600'
                  }}>
                    Available
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div style={{ padding: isMobile ? '20px' : '30px' }}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr',
                  gap: isMobile ? '20px' : '30px',
                  alignItems: 'start'
                }}>
                  {/* Video Section */}
                  <div>
                    {course.videos && course.videos.length > 0 && (
                      <div style={{ marginBottom: '20px' }}>
                        {course.videos.map((videoSrc, videoIndex) => (
                          <div key={videoIndex} style={{
                            position: 'relative',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                            marginBottom: videoIndex < course.videos.length - 1 ? '15px' : '0'
                          }}>
                            {course.videos.length > 1 && (
                              <div style={{
                                position: 'absolute',
                                top: '10px',
                                left: '10px',
                                background: 'rgba(0,0,0,0.7)',
                                color: 'white',
                                padding: '5px 10px',
                                borderRadius: '15px',
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                zIndex: 10
                              }}>
                                Video {videoIndex + 1} of {course.videos.length}
                              </div>
                            )}
                            <CourseVideo 
                              controls
                              controlsList="nodownload noremoteplayback"
                              disablePictureInPicture
                              onContextMenu={(e) => e.preventDefault()}
                              style={{
                                width: '100%',
                                height: isMobile ? '200px' : '350px',
                                objectFit: 'contain',
                                background: '#000'
                              }}
                            >
                              <source src={videoSrc} type="video/mp4" />
                              <track
                                kind="subtitles"
                                src={`/subtitles/courses/${course.id}-en.vtt`}
                                srcLang="en"
                                label="English"
                                default
                              />
                              <track
                                kind="subtitles"
                                src={`/subtitles/courses/${course.id}-fr.vtt`}
                                srcLang="fr"
                                label="Français"
                              />
                              <track
                                kind="subtitles"
                                src={`/subtitles/courses/${course.id}-es.vtt`}
                                srcLang="es"
                                label="Español"
                              />
                              <track
                                kind="subtitles"
                                src={`/subtitles/courses/${course.id}-nl.vtt`}
                                srcLang="nl"
                                label="Nederlands"
                              />
                              Your browser does not support the video tag.
                            </CourseVideo>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Course Description */}
                    <div style={{
                      padding: '20px',
                      background: '#f8fafc',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0'
                    }}>
                      <h4 style={{ 
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        marginBottom: '10px',
                        color: '#2d3748'
                      }}>
                        About This Course
                      </h4>
                      <p style={{ 
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        color: '#4a5568',
                        margin: 0
                      }}>
                        {course.description}
                      </p>
                    </div>
                  </div>

                  {/* Course Info Sidebar */}
                  <div>
                    <div style={{
                      background: '#f7fafc',
                      padding: isMobile ? '20px' : '25px',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0'
                    }}>
                      <h4 style={{ 
                        fontSize: isMobile ? '1rem' : '1.1rem',
                        fontWeight: '600',
                        marginBottom: '20px',
                        color: '#2d3748'
                      }}>
                        Course Details
                      </h4>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#718096', fontSize: '0.95rem' }}>Duration</span>
                          <span style={{ fontWeight: '600', color: '#2d3748' }}>
                            {course.id <= 4 ? '18-42 min' : course.id <= 7 ? '38-54 min' : '28-60 min'}
                          </span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#718096', fontSize: '0.95rem' }}>Level</span>
                          <span style={{ fontWeight: '600', color: '#2d3748' }}>
                            {course.id <= 4 ? 'Beginner' : course.id <= 8 ? 'Intermediate' : 'Advanced'}
                          </span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#718096', fontSize: '0.95rem' }}>Language</span>
                          <span style={{ fontWeight: '600', color: '#2d3748' }}>English</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#718096', fontSize: '0.95rem' }}>Access</span>
                          <span style={{ fontWeight: '600', color: '#2d3748' }}>Lifetime</span>
                        </div>
                      </div>

                      <div style={{ 
                        marginTop: '25px',
                        padding: '15px',
                        background: 'linear-gradient(135deg, #81C784 0%, #4CAF50 100%)',
                        borderRadius: '8px',
                        textAlign: 'center'
                      }}>
                        <div style={{ 
                          color: 'white',
                          fontWeight: '600',
                          fontSize: '1rem'
                        }}>
                          ✓ Enrolled & Active
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (!user) {
    return (
      <AccountWrapper>
        <Container>
          <LoginPromptWrapper>
            <LoginPromptCard>
              <LoginIcon>
                🔐
              </LoginIcon>
              <LoginTitle>Access Required</LoginTitle>
              <LoginSubtitle>
                Please log in to access your account dashboard and manage your orders and personal information.
              </LoginSubtitle>
              <LoginButtons>
                <LoginButton as={Link} to="/login">
                  Sign In
                </LoginButton>
                <LoginButton as={Link} to="/register" variant="outline">
                  Create Account
                </LoginButton>
              </LoginButtons>
            </LoginPromptCard>
          </LoginPromptWrapper>
        </Container>
      </AccountWrapper>
    );
  }

  return (
    <AccountWrapper>
      <Container>
        <WelcomeSection>
          <WelcomeTitle>My Account</WelcomeTitle>
          <WelcomeSubtitle>
            Welcome back, {user.firstName}! Manage your account and view your orders.
          </WelcomeSubtitle>
        </WelcomeSection>

        <AccountContent>
          {/* Мобильная навигация */}
          {isMobile && (
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '20px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              position: 'sticky',
              top: '100px',
              zIndex: 100
            }}>
              <h3 style={{
                margin: '0 0 15px 0',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#1a202c',
                textAlign: 'center'
              }}>Account Navigation</h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <button
                  onClick={() => setActiveTab('profile')}
                  style={{
                    padding: '14px 20px',
                    borderRadius: '12px',
                    border: 'none',
                    background: activeTab === 'profile' ? 
                      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
                      '#f7fafc',
                    color: activeTab === 'profile' ? 'white' : '#4a5568',
                    fontWeight: '600',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  👤 Profile Information
                </button>
                
                <button
                  onClick={() => setActiveTab('courses')}
                  style={{
                    padding: '14px 20px',
                    borderRadius: '12px',
                    border: 'none',
                    background: activeTab === 'courses' ? 
                      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
                      '#f7fafc',
                    color: activeTab === 'courses' ? 'white' : '#4a5568',
                    fontWeight: '600',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  � My Photoshop Courses
                </button>
                
                <button
                  onClick={() => setActiveTab('orders')}
                  style={{
                    padding: '14px 20px',
                    borderRadius: '12px',
                    border: 'none',
                    background: activeTab === 'orders' ? 
                      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
                      '#f7fafc',
                    color: activeTab === 'orders' ? 'white' : '#4a5568',
                    fontWeight: '600',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  📦 Order History
                </button>
                
                <button
                  onClick={() => setActiveTab('subscription')}
                  style={{
                    padding: '14px 20px',
                    borderRadius: '12px',
                    border: 'none',
                    background: activeTab === 'subscription' ? 
                      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 
                      '#f7fafc',
                    color: activeTab === 'subscription' ? 'white' : '#4a5568',
                    fontWeight: '600',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  🌟 VIP Membership
                </button>
                
                <button
                  onClick={logout}
                  style={{
                    padding: '14px 20px',
                    borderRadius: '12px',
                    border: 'none',
                    background: '#fed7d7',
                    color: '#c53030',
                    fontWeight: '600',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '10px'
                  }}
                >
                  🚪 Logout
                </button>
              </div>
            </div>
          )}

          <Sidebar>
            <h3>Account Menu</h3>
            <SidebarItem 
              active={activeTab === 'profile'}
              onClick={() => setActiveTab('profile')}
            >
              Profile Information
            </SidebarItem>
            <SidebarItem 
              active={activeTab === 'courses'}
              onClick={() => setActiveTab('courses')}
            >
              My Adobe Photoshop Courses
            </SidebarItem>
            <SidebarItem 
              active={activeTab === 'orders'}
              onClick={() => setActiveTab('orders')}
            >
              Order History
            </SidebarItem>
            <SidebarItem 
              active={activeTab === 'subscription'}
              onClick={() => setActiveTab('subscription')}
            >
              🌟 VIP Membership
            </SidebarItem>
            <SidebarItem 
              active={false}
              onClick={logout}
              style={{ marginTop: '20px', color: '#ef4444' }}
            >
              Logout
            </SidebarItem>
          </Sidebar>

          <MainContent>
            {activeTab === 'profile' && renderProfileSection()}
            {activeTab === 'courses' && renderCoursesSection()}
            {activeTab === 'orders' && renderOrdersSection()}
            {activeTab === 'subscription' && <SubscriptionManagement />}
          </MainContent>
        </AccountContent>
      </Container>
    </AccountWrapper>
  );
};

export default Account;