import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../styles/GlobalStyles';
import { useAuth } from '../contexts/AuthContext';
import {
  LoginWrapper,
  LoginCard,
  LoginHeader,
  LoginTitle,
  LoginSubtitle,
  BrandLogo,
  FormGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
  ForgotPasswordLink,
  SignupLink
} from '../styles/pages/LoginStyles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, error, clearError, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        // Redirect to account page
        window.location.href = '/account';
      }
      // Ошибка будет показана из AuthContext
    } catch (err) {
      // Ошибка уже обработана в AuthContext
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginWrapper>
      <Container>
        <LoginCard>
          <LoginHeader>
            <BrandLogo>AL</BrandLogo>
            <LoginTitle>Welcome Back</LoginTitle>
            <LoginSubtitle>Sign in to your Photoshop Course account</LoginSubtitle>
          </LoginHeader>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                required
              />
            </FormGroup>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          <ForgotPasswordLink href="#" onClick={(e: React.MouseEvent) => e.preventDefault()}>
            Forgot your password?
          </ForgotPasswordLink>

          <SignupLink>
            Don't have an account?
            <Link to="/register">Sign up here</Link>
          </SignupLink>
        </LoginCard>
      </Container>
    </LoginWrapper>
  );
};

export default Login;
