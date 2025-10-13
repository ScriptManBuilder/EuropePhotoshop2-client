import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../styles/GlobalStyles';
import { useAuth } from '../contexts/AuthContext';
import {
  RegisterWrapper,
  RegisterCard,
  RegisterHeader,
  RegisterTitle,
  RegisterSubtitle,
  BrandLogo,
  FormRow,
  FormGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
  SuccessMessage,
  LoginLink,
  PasswordStrengthContainer,
  PasswordStrengthBar,
  PasswordStrengthLabel,
  PasswordStrengthFill
} from '../styles/pages/RegisterStyles';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [localError, setLocalError] = useState('');
  const { register, error, clearError } = useAuth();
  const navigate = useNavigate();

  const checkPasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 5) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return Math.min(strength, 4);
  };

  const getStrengthText = (strength: number): string => {
    switch (strength) {
      case 0:
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return '';
    }
  };

  const getStrengthColor = (strength: number): string => {
    switch (strength) {
      case 0:
      case 1:
        return '#f56565';
      case 2:
        return '#ed8936';
      case 3:
        return '#38a169';
      case 4:
        return '#48bb78';
      default:
        return '#e2e8f0';
    }
  };

  const getStrengthWidth = (strength: number): number => {
    return (strength / 4) * 100;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password') {
      setPasswordStrength(checkPasswordStrength(value));
    }

    // Очищаем ошибки при изменении полей
    if (localError) setLocalError('');
    if (error) clearError();
  };

  // Prevent zoom on iOS when focusing inputs
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    // Scroll into view on mobile to prevent keyboard overlap
    if (window.innerWidth <= 480) {
      setTimeout(() => {
        e.target.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center',
          inline: 'nearest'
        });
      }, 300);
    }
  };

  const validateForm = (): string | null => {
    if (!formData.firstName.trim()) {
      return 'First name is required';
    }

    if (!formData.lastName.trim()) {
      return 'Last name is required';
    }

    if (!formData.email.trim()) {
      return 'Email is required';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return 'Please enter a valid email address';
    }

    if (formData.password.length < 5) {
      return 'Password must be at least 5 characters long';
    }

    if (formData.password !== formData.confirmPassword) {
      return 'Passwords do not match';
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setSuccess('');
    setLocalError('');

    const validationError = validateForm();
    if (validationError) {
      setLocalError(validationError);
      return;
    }

    setIsLoading(true);

    try {
      const success = await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      });

      if (success) {
        setSuccess('Account created successfully! Redirecting to your account...');
        setTimeout(() => {
          // Redirect to account page
          window.location.href = '/account';
        }, 2000);
      }
      // Ошибка будет показана из AuthContext
    } catch (err) {
      // Ошибка уже обработана в AuthContext
    } finally {
      setIsLoading(false);
    }
  };

  const displayError = localError || error;

  return (
    <RegisterWrapper>
      <Container>
        <RegisterCard>
          <RegisterHeader>
            <BrandLogo>
              <div className="icon">AL</div>
              <span>Animation</span>
            </BrandLogo>
            <RegisterTitle>Create Your Account</RegisterTitle>
            <RegisterSubtitle>Join hundreds of satisfied customers</RegisterSubtitle>
          </RegisterHeader>

          {displayError && <ErrorMessage>{displayError}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}

          <form onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  autoComplete="given-name"
                  autoCapitalize="words"
                  autoCorrect="off"
                  spellCheck="false"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  autoComplete="family-name"
                  autoCapitalize="words"
                  autoCorrect="off"
                  spellCheck="false"
                  required
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                autoComplete="email"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck="false"
                inputMode="email"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Min. 5 characters"
                value={formData.password}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                autoComplete="new-password"
                required
              />
              
              {formData.password && (
                <PasswordStrengthContainer>
                  <PasswordStrengthBar>
                    <PasswordStrengthFill 
                      width={getStrengthWidth(passwordStrength)}
                      color={getStrengthColor(passwordStrength)}
                    />
                  </PasswordStrengthBar>
                  <PasswordStrengthLabel color={getStrengthColor(passwordStrength)}>
                    {getStrengthText(passwordStrength)}
                  </PasswordStrengthLabel>
                </PasswordStrengthContainer>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Repeat password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                autoComplete="new-password"
                required
              />
            </FormGroup>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          <LoginLink>
            Already have an account?
            <Link to="/login">Sign in here</Link>
          </LoginLink>
        </RegisterCard>
      </Container>
    </RegisterWrapper>
  );
};

export default Register;