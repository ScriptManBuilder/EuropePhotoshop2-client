import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../styles/GlobalStyles';

const AboutWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  /* Основной анимированный фон */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(102, 126, 234, 0.15) 0%,
      rgba(255, 107, 107, 0.1) 30%,
      rgba(78, 205, 196, 0.1) 60%,
      transparent 80%
    );
    animation: rotate 40s linear infinite;
    pointer-events: none;
  }
  
  /* Дополнительные плавающие элементы */
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    right: 10%;
    width: 300px;
    height: 300px;
    background: linear-gradient(
      45deg,
      rgba(255, 107, 107, 0.1) 0%,
      rgba(78, 205, 196, 0.1) 50%,
      rgba(69, 183, 209, 0.1) 100%
    );
    border-radius: 50%;
    animation: float 8s ease-in-out infinite;
    pointer-events: none;
  }
  
  @keyframes rotate {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.1); }
    100% { transform: rotate(360deg) scale(1); }
  }
  
  @keyframes float {
    0%, 100% { 
      transform: translateY(0px) translateX(0px) scale(1);
      opacity: 0.3;
    }
    33% { 
      transform: translateY(-30px) translateX(20px) scale(1.1);
      opacity: 0.5;
    }
    66% { 
      transform: translateY(20px) translateX(-15px) scale(0.9);
      opacity: 0.4;
    }
  }
`;

const LogoContainer = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
  
  /* Добавляем декоративные элементы вокруг логотипа */
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: -100px;
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg, rgba(255, 107, 107, 0.2), rgba(69, 183, 209, 0.2));
    border-radius: 50%;
    animation: orbit 15s linear infinite;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -80px;
    right: -120px;
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, rgba(78, 205, 196, 0.3), rgba(150, 206, 180, 0.2));
    border-radius: 30%;
    animation: orbit 20s linear infinite reverse;
    z-index: -1;
  }
  
  @keyframes orbit {
    0% { 
      transform: rotate(0deg) translateX(150px) rotate(0deg);
      opacity: 0.3;
    }
    50% {
      opacity: 0.7;
    }
    100% { 
      transform: rotate(360deg) translateX(150px) rotate(-360deg);
      opacity: 0.3;
    }
  }
`;

const MainLogo = styled.h1`
  font-size: 8rem;
  font-weight: 900;
  margin: 0;
  background: linear-gradient(
    135deg,
    #ff6b6b 0%,
    #4ecdc4 25%,
    #45b7d1 50%,
    #96ceb4 75%,
    #ffeaa7 100%
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 8s ease infinite;
  letter-spacing: -2px;
  text-shadow: 0 0 50px rgba(102, 126, 234, 0.3);
  position: relative;
  
  &::after {
    content: 'PHOTOSHOP COURSES';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.2) 0%,
      rgba(118, 75, 162, 0.2) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: blur(10px);
    z-index: -1;
  }
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @media (max-width: 768px) {
    font-size: 5rem;
    letter-spacing: -1px;
  }
  
  @media (max-width: 480px) {
    font-size: 3.5rem;
    letter-spacing: -0.5px;
  }
  
  @media (max-width: 375px) {
    font-size: 3rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  color: #667eea;
  font-size: 2rem;
  opacity: 0.7;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    opacity: 1;
    transform: translateX(-50%) scale(1.1);
    color: #ff6b6b;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    bottom: 20px;
  }
`;

/* Добавляем анимированные частицы */
const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const Particle = styled.div<{ delay: number; duration: number; size: number; x: number; y: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: linear-gradient(45deg, rgba(255, 107, 107, 0.3), rgba(78, 205, 196, 0.3));
  border-radius: 50%;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  animation: particleFloat ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  
  @keyframes particleFloat {
    0%, 100% {
      transform: translateY(0px) translateX(0px) scale(1);
      opacity: 0.3;
    }
    25% {
      transform: translateY(-20px) translateX(10px) scale(1.2);
      opacity: 0.6;
    }
    50% {
      transform: translateY(-40px) translateX(-5px) scale(0.8);
      opacity: 0.8;
    }
    75% {
      transform: translateY(-20px) translateX(-10px) scale(1.1);
      opacity: 0.5;
    }
  }
`;

/* Добавляем контентные плавающие элементы */
const ContentFloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElement = styled.div<{ delay: number; size: number; x: number; y: number; shape: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.1) 0%,
    rgba(78, 205, 196, 0.08) 50%,
    rgba(255, 107, 107, 0.06) 100%
  );
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  animation: gentleFloat 15s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  border-radius: ${props => {
    switch (props.shape) {
      case 'circle': return '50%';
      case 'square': return '10%';
      case 'diamond': return '0';
      default: return '30% 70% 70% 30% / 30% 30% 70% 70%';
    }
  }};
  ${props => props.shape === 'diamond' && `
    transform: rotate(45deg);
  `}
  
  @keyframes gentleFloat {
    0%, 100% {
      transform: translateY(0px) translateX(0px) scale(1) ${props => props.shape === 'diamond' ? 'rotate(45deg)' : ''};
      opacity: 0.2;
    }
    33% {
      transform: translateY(-15px) translateX(8px) scale(1.1) ${props => props.shape === 'diamond' ? 'rotate(135deg)' : ''};
      opacity: 0.4;
    }
    66% {
      transform: translateY(10px) translateX(-5px) scale(0.9) ${props => props.shape === 'diamond' ? 'rotate(225deg)' : ''};
      opacity: 0.3;
    }
  }
`;

const ContentSection = styled.section`
  padding: 120px 0;
  position: relative;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%);
  overflow: hidden;
  
  /* Анимированный волновой фон */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(102, 126, 234, 0.05) 0%,
      rgba(255, 107, 107, 0.03) 25%,
      rgba(78, 205, 196, 0.05) 50%,
      rgba(150, 206, 180, 0.03) 75%,
      rgba(255, 234, 167, 0.05) 100%
    );
    background-size: 400% 400%;
    animation: backgroundShift 25s ease infinite;
    pointer-events: none;
    z-index: 1;
  }
  
  /* Плавающие геометрические фигуры */
  &::after {
    content: '';
    position: absolute;
    top: 15%;
    left: 5%;
    width: 200px;
    height: 200px;
    background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.1) 0%,
      rgba(255, 107, 107, 0.08) 100%
    );
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    animation: morphFloat 20s ease-in-out infinite;
    pointer-events: none;
    z-index: 1;
  }
  
  @keyframes backgroundShift {
    0%, 100% { background-position: 0% 50%; }
    25% { background-position: 100% 50%; }
    50% { background-position: 50% 100%; }
    75% { background-position: 100% 0%; }
  }
  
  @keyframes morphFloat {
    0%, 100% {
      transform: translateY(0px) translateX(0px) rotate(0deg);
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      opacity: 0.3;
    }
    25% {
      transform: translateY(-30px) translateX(20px) rotate(90deg);
      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
      opacity: 0.5;
    }
    50% {
      transform: translateY(-60px) translateX(-10px) rotate(180deg);
      border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
      opacity: 0.4;
    }
    75% {
      transform: translateY(-30px) translateX(-30px) rotate(270deg);
      border-radius: 40% 60% 60% 40% / 60% 40% 40% 60%;
      opacity: 0.6;
    }
  }
`;

const ContentContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  position: relative;
  z-index: 2;
  
  /* Декоративные элементы по углам */
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 150px;
    height: 150px;
    background: linear-gradient(
      45deg,
      rgba(78, 205, 196, 0.15) 0%,
      rgba(69, 183, 209, 0.1) 100%
    );
    border-radius: 50%;
    animation: pulseGlow 12s ease-in-out infinite;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 120px;
    height: 120px;
    background: linear-gradient(
      135deg,
      rgba(255, 107, 107, 0.12) 0%,
      rgba(255, 234, 167, 0.08) 100%
    );
    border-radius: 60% 40% 40% 60% / 40% 60% 60% 40%;
    animation: rotateShape 18s linear infinite;
    pointer-events: none;
  }
  
  @keyframes pulseGlow {
    0%, 100% {
      transform: scale(1);
      opacity: 0.3;
      filter: blur(5px);
    }
    50% {
      transform: scale(1.3);
      opacity: 0.6;
      filter: blur(2px);
    }
  }
  
  @keyframes rotateShape {
    0% {
      transform: rotate(0deg) scale(1);
      border-radius: 60% 40% 40% 60% / 40% 60% 60% 40%;
    }
    25% {
      transform: rotate(90deg) scale(1.1);
      border-radius: 40% 60% 60% 40% / 60% 40% 40% 60%;
    }
    50% {
      transform: rotate(180deg) scale(0.9);
      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    }
    75% {
      transform: rotate(270deg) scale(1.05);
      border-radius: 70% 30% 30% 70% / 30% 70% 70% 30%;
    }
    100% {
      transform: rotate(360deg) scale(1);
      border-radius: 60% 40% 40% 60% / 40% 60% 60% 40%;
    }
  }
`;

const CompanyName = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  color: #2d3748;
  margin: 0 0 60px 0;
  letter-spacing: -1px;
  position: relative;
  overflow: hidden;
  
  /* Каждая буква будет анимироваться отдельно */
  .letter {
    display: inline-block;
    opacity: 0;
    transform: translateY(100px) rotateX(90deg);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    animation-fill-mode: forwards;
  }
  
  &.revealed .letter {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
  
  /* Задержки для каждой буквы */
  .letter:nth-child(1) { transition-delay: 0.1s; }
  .letter:nth-child(2) { transition-delay: 0.15s; }
  .letter:nth-child(3) { transition-delay: 0.2s; }
  .letter:nth-child(4) { transition-delay: 0.25s; }
  .letter:nth-child(5) { transition-delay: 0.3s; }
  .letter:nth-child(6) { transition-delay: 0.35s; }
  .letter:nth-child(7) { transition-delay: 0.4s; }
  .letter:nth-child(8) { transition-delay: 0.45s; }
  .letter:nth-child(9) { transition-delay: 0.5s; }
  .letter:nth-child(10) { transition-delay: 0.55s; }
  .letter:nth-child(11) { transition-delay: 0.6s; }
  .letter:nth-child(12) { transition-delay: 0.65s; }
  .letter:nth-child(13) { transition-delay: 0.7s; }
  .letter:nth-child(14) { transition-delay: 0.75s; }
  .letter:nth-child(15) { transition-delay: 0.8s; }
  .letter:nth-child(16) { transition-delay: 0.85s; }
  .letter:nth-child(17) { transition-delay: 0.9s; }
  .letter:nth-child(18) { transition-delay: 0.95s; }
  .letter:nth-child(19) { transition-delay: 1s; }
  
  /* Светящийся эффект */
  &.revealed::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(102, 126, 234, 0.3) 50%,
      transparent 100%
    );
    animation: shine 2s ease-in-out 1.5s forwards;
  }
  
  @keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 50px;
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 40px;
    letter-spacing: -0.5px;
  }
`;

const MissionText = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  color: #4a5568;
  margin: 0 0 40px 0;
  font-weight: 400;
  position: relative;
  overflow: hidden;
  
  /* Волновая анимация для слов */
  .word {
    display: inline-block;
    opacity: 0;
    transform: translateY(50px) scale(0.8);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    margin-right: 0.3em;
  }
  
  &.revealed .word {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  
  /* Волновой эффект - каждое слово появляется с задержкой */
  .word:nth-child(1) { transition-delay: 0.1s; }
  .word:nth-child(2) { transition-delay: 0.2s; }
  .word:nth-child(3) { transition-delay: 0.3s; }
  .word:nth-child(4) { transition-delay: 0.4s; }
  .word:nth-child(5) { transition-delay: 0.5s; }
  .word:nth-child(6) { transition-delay: 0.6s; }
  .word:nth-child(7) { transition-delay: 0.7s; }
  .word:nth-child(8) { transition-delay: 0.8s; }
  .word:nth-child(9) { transition-delay: 0.9s; }
  .word:nth-child(10) { transition-delay: 1s; }
  .word:nth-child(11) { transition-delay: 1.1s; }
  .word:nth-child(12) { transition-delay: 1.2s; }
  .word:nth-child(13) { transition-delay: 1.3s; }
  .word:nth-child(14) { transition-delay: 1.4s; }
  .word:nth-child(15) { transition-delay: 1.5s; }
  
  /* Подчеркивающая линия */
  &.revealed::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    animation: underline 1.5s ease-out 1s forwards;
  }
  
  @keyframes underline {
    0% { width: 0; }
    100% { width: 100%; }
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 35px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 30px;
    line-height: 1.5;
  }
`;

const DescriptionText = styled.p`
  font-size: 1.4rem;
  line-height: 1.7;
  color: #718096;
  margin: 0;
  font-weight: 300;
  position: relative;
  
  /* Печатная машинка эффект */
  .char {
    opacity: 0;
    animation: none;
  }
  
  &.revealed .char {
    animation: typewriter 0.05s ease-in forwards;
  }
  
  /* Задержки для каждого символа будут установлены динамически */
  @keyframes typewriter {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Мигающий курсор */
  &.revealed::after {
    content: '|';
    color: #667eea;
    animation: blink 1s infinite;
    margin-left: 2px;
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

/* Мини-плашка для перехода на страницу продуктов */
const ProductsCallToAction = styled.div`
  margin-top: 80px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.6s;
  
  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    margin-top: 60px;
  }
  
  @media (max-width: 480px) {
    margin-top: 50px;
  }
`;

const ProductsCard = styled(Link)`
  display: block;
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 50px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(248, 250, 252, 0.8) 100%
  );
  border: 2px solid transparent;
  border-radius: 20px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  box-shadow: 
    0 10px 40px rgba(102, 126, 234, 0.1),
    0 5px 20px rgba(255, 107, 107, 0.05);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(102, 126, 234, 0.1) 50%,
      transparent 100%
    );
    transition: left 0.6s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      135deg,
      #667eea 0%,
      #ff6b6b 25%,
      #4ecdc4 50%,
      #45b7d1 75%,
      #96ceb4 100%
    );
    background-size: 300% 300%;
    border-radius: 22px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: gradientShift 3s ease infinite;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 
      0 20px 60px rgba(102, 126, 234, 0.15),
      0 10px 30px rgba(255, 107, 107, 0.1);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(-5px) scale(1.01);
  }
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 35px 40px;
  }
  
  @media (max-width: 480px) {
    max-width: 320px;
    padding: 30px 25px;
  }
`;

const ProductsCardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 15px 0;
  letter-spacing: -0.5px;
  transition: color 0.3s ease;
  
  ${ProductsCard}:hover & {
    color: #667eea;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

const ProductsCardDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #718096;
  margin: 0 0 25px 0;
  font-weight: 400;
  transition: color 0.3s ease;
  
  ${ProductsCard}:hover & {
    color: #4a5568;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 18px;
    line-height: 1.4;
  }
`;

const ProductsCardButton = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #667eea;
  padding: 12px 25px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 50px;
  transition: all 0.3s ease;
  
  &::after {
    content: '→';
    font-size: 1.2rem;
    transform: translateX(0);
    transition: transform 0.3s ease;
  }
  
  ${ProductsCard}:hover & {
    background: rgba(102, 126, 234, 0.15);
    color: #5a67d8;
    
    &::after {
      transform: translateX(5px);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 8px 18px;
  }
`;

/* Statistics Section Styles */
const StatsSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 25%,
    #f093fb 50%,
    #f5576c 75%,
    #4facfe 100%
  );
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    animation: gridMove 30s linear infinite;
    z-index: 1;
  }
  
  @keyframes gridMove {
    0% { transform: translateX(0) translateY(0); }
    100% { transform: translateX(10px) translateY(10px); }
  }
`;

const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  text-align: center;
`;

const StatsTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 80px 0;
  letter-spacing: -1px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  
  .word {
    display: inline-block;
    opacity: 0;
    transform: translateY(50px) scale(0.8);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    margin-right: 0.3em;
  }
  
  &.revealed .word {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  
  .word:nth-child(1) { transition-delay: 0.1s; }
  .word:nth-child(2) { transition-delay: 0.2s; }
  .word:nth-child(3) { transition-delay: 0.3s; }
  .word:nth-child(4) { transition-delay: 0.4s; }
  .word:nth-child(5) { transition-delay: 0.5s; }
  .word:nth-child(6) { transition-delay: 0.6s; }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 50px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px) scale(0.9);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &.revealed {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.05);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    
    &::before {
      left: 100%;
    }
  }
  
  &:nth-child(1).revealed { transition-delay: 0.1s; }
  &:nth-child(2).revealed { transition-delay: 0.2s; }
  &:nth-child(3).revealed { transition-delay: 0.3s; }
  &:nth-child(4).revealed { transition-delay: 0.4s; }
  &:nth-child(5).revealed { transition-delay: 0.5s; }
  &:nth-child(6).revealed { transition-delay: 0.6s; }
  
  @media (max-width: 768px) {
    padding: 35px 25px;
  }
  
  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

const StatNumber = styled.div`
  font-size: 4rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 15px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
`;

const StatLabel = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 15px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
`;

const StatDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-weight: 400;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

/* Timeline Section Styles */
const TimelineSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(
    180deg,
    #f8fafc 0%,
    #e2e8f0 50%,
    #f8fafc 100%
  );
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 30% 70%,
      rgba(102, 126, 234, 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 30%,
      rgba(255, 107, 107, 0.05) 0%,
      transparent 50%
    );
    animation: timelineFloat 30s ease-in-out infinite;
    pointer-events: none;
  }
  
  @keyframes timelineFloat {
    0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
    50% { opacity: 0.6; transform: scale(1.1) rotate(180deg); }
  }
`;

const TimelineContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(
      180deg,
      #667eea 0%,
      #ff6b6b 25%,
      #4ecdc4 50%,
      #45b7d1 75%,
      #96ceb4 100%
    );
    transform: translateX(-50%);
    border-radius: 2px;
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
  }
  
  @media (max-width: 768px) {
    &::before {
      left: 30px;
    }
  }
`;

const TimelineYear = styled.div`
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  min-width: 120px;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    min-width: 80px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    min-width: 60px;
  }
`;

const TimelineContent = styled.div`
  flex: 1;
  max-width: 400px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(102, 126, 234, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 25px;
    max-width: none;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  position: relative;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  
  &:nth-child(odd) {
    flex-direction: row;
    
    ${TimelineYear} {
      order: 1;
      margin-right: 60px;
      margin-left: 0;
    }
    
    ${TimelineContent} {
      order: 2;
      text-align: left;
    }
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    ${TimelineYear} {
      order: 1;
      margin-left: 60px;
      margin-right: 0;
    }
    
    ${TimelineContent} {
      order: 2;
      text-align: right;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
    border: 4px solid #ffffff;
  }
  
  &:nth-child(1).revealed { transition-delay: 0.1s; }
  &:nth-child(2).revealed { transition-delay: 0.2s; }
  &:nth-child(3).revealed { transition-delay: 0.3s; }
  &:nth-child(4).revealed { transition-delay: 0.4s; }
  &:nth-child(5).revealed { transition-delay: 0.5s; }
  &:nth-child(6).revealed { transition-delay: 0.6s; }
  &:nth-child(7).revealed { transition-delay: 0.7s; }
  
  @media (max-width: 768px) {
    flex-direction: row !important;
    margin-bottom: 60px;
    
    &::before {
      left: 30px;
    }
    
    ${TimelineYear} {
      order: 1 !important;
      margin-right: 40px !important;
      margin-left: 0 !important;
      min-width: 80px;
    }
    
    ${TimelineContent} {
      order: 2 !important;
      text-align: left !important;
      flex: 1;
    }
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 15px 0;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

const TimelineDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
  margin: 0;
  font-weight: 400;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

/* Leadership Section Styles */
const LeadershipSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(
    135deg,
    #1a202c 0%,
    #2d3748 25%,
    #4a5568 50%,
    #2d3748 75%,
    #1a202c 100%
  );
  position: relative;
  overflow: hidden;
  
  /* Animated background patterns */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 20% 80%,
      rgba(102, 126, 234, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(255, 107, 107, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 40%,
      rgba(78, 205, 196, 0.08) 0%,
      transparent 50%
    );
    animation: backgroundPulse 20s ease-in-out infinite;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 10%;
    right: 5%;
    width: 400px;
    height: 400px;
    background: linear-gradient(
      45deg,
      rgba(102, 126, 234, 0.05) 0%,
      rgba(255, 107, 107, 0.03) 100%
    );
    border-radius: 50%;
    animation: floatSlow 25s ease-in-out infinite;
    pointer-events: none;
  }
  
  @keyframes backgroundPulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.1); }
  }
  
  @keyframes floatSlow {
    0%, 100% { 
      transform: translateY(0px) translateX(0px) rotate(0deg);
      opacity: 0.3;
    }
    33% { 
      transform: translateY(-40px) translateX(30px) rotate(120deg);
      opacity: 0.5;
    }
    66% { 
      transform: translateY(20px) translateX(-20px) rotate(240deg);
      opacity: 0.4;
    }
  }
`;

const LeadershipContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  color: #ffffff;
  margin: 0 0 80px 0;
  letter-spacing: -1px;
  position: relative;
  overflow: hidden;
  
  .letter {
    display: inline-block;
    opacity: 0;
    transform: translateY(100px) rotateX(90deg);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    animation-fill-mode: forwards;
  }
  
  &.revealed .letter {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
  
  .letter:nth-child(1) { transition-delay: 0.1s; }
  .letter:nth-child(2) { transition-delay: 0.15s; }
  .letter:nth-child(3) { transition-delay: 0.2s; }
  .letter:nth-child(4) { transition-delay: 0.25s; }
  .letter:nth-child(5) { transition-delay: 0.3s; }
  .letter:nth-child(6) { transition-delay: 0.35s; }
  .letter:nth-child(7) { transition-delay: 0.4s; }
  .letter:nth-child(8) { transition-delay: 0.45s; }
  .letter:nth-child(9) { transition-delay: 0.5s; }
  .letter:nth-child(10) { transition-delay: 0.55s; }
  .letter:nth-child(11) { transition-delay: 0.6s; }
  .letter:nth-child(12) { transition-delay: 0.65s; }
  .letter:nth-child(13) { transition-delay: 0.7s; }
  .letter:nth-child(14) { transition-delay: 0.75s; }
  .letter:nth-child(15) { transition-delay: 0.8s; }
  .letter:nth-child(16) { transition-delay: 0.85s; }
  .letter:nth-child(17) { transition-delay: 0.9s; }
  .letter:nth-child(18) { transition-delay: 0.95s; }
  .letter:nth-child(19) { transition-delay: 1s; }
  
  &.revealed::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(102, 126, 234, 0.3) 50%,
      transparent 100%
    );
    animation: shine 2s ease-in-out 1.5s forwards;
  }
  
  @keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 50px;
  }
`;

const LeadershipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const LeaderCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.2),
      0 0 30px rgba(102, 126, 234, 0.1);
  }
  
  &:nth-child(1).revealed { transition-delay: 0.1s; }
  &:nth-child(2).revealed { transition-delay: 0.2s; }
  &:nth-child(3).revealed { transition-delay: 0.3s; }
  &:nth-child(4).revealed { transition-delay: 0.4s; }
  &:nth-child(5).revealed { transition-delay: 0.5s; }
  &:nth-child(6).revealed { transition-delay: 0.6s; }
`;

const LeaderImage = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  
  ${LeaderCard}:hover & img {
    transform: scale(1.1);
  }
`;

const LeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.8) 0%,
    rgba(255, 107, 107, 0.6) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  
  ${LeaderCard}:hover & {
    opacity: 1;
  }
`;

const LeaderRole = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  padding: 0 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const LeaderInfo = styled.div`
  padding: 30px 25px;
`;

const LeaderName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
`;

const LeaderTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #667eea;
  margin: 0 0 15px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const LeaderDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #cbd5e0;
  margin: 0;
  font-weight: 300;
`;

/* Values Section Styles */
const ValuesSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(
    180deg,
    #f8fafc 0%,
    #ffffff 50%,
    #f8fafc 100%
  );
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 80% 20%,
      rgba(102, 126, 234, 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 20% 80%,
      rgba(255, 107, 107, 0.06) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 60% 60%,
      rgba(78, 205, 196, 0.05) 0%,
      transparent 50%
    );
    animation: valuesFloat 25s ease-in-out infinite;
    pointer-events: none;
  }
  
  @keyframes valuesFloat {
    0%, 100% { 
      opacity: 0.4; 
      transform: scale(1) rotate(0deg); 
    }
    33% { 
      opacity: 0.7; 
      transform: scale(1.1) rotate(120deg); 
    }
    66% { 
      opacity: 0.5; 
      transform: scale(0.9) rotate(240deg); 
    }
  }
`;

const ValuesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-bottom: 50px;
  }
`;

const ValueCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px) rotateY(30deg);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(102, 126, 234, 0.1);
  
  &.revealed {
    opacity: 1;
    transform: translateY(0) rotateY(0deg);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(102, 126, 234, 0.1) 50%,
      transparent 70%
    );
    transform: rotate(45deg);
    transition: all 0.6s ease;
    opacity: 0;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: rgba(102, 126, 234, 0.3);
    
    &::before {
      opacity: 1;
      animation: shimmer 1.5s ease-in-out;
    }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }
  
  &:nth-child(1).revealed { transition-delay: 0.1s; }
  &:nth-child(2).revealed { transition-delay: 0.2s; }
  &:nth-child(3).revealed { transition-delay: 0.3s; }
  &:nth-child(4).revealed { transition-delay: 0.4s; }
  &:nth-child(5).revealed { transition-delay: 0.5s; }
  &:nth-child(6).revealed { transition-delay: 0.6s; }
  
  @media (max-width: 768px) {
    padding: 35px 25px;
  }
  
  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

const ValueIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 25px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;
  
  ${ValueCard}:hover & {
    transform: scale(1.2) rotate(10deg);
  }
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 3rem;
    margin-bottom: 18px;
  }
`;

const ValueTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 20px 0;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 15px;
  }
`;

const ValueDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a5568;
  margin: 0;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const MissionStatement = styled.div`
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.1) 0%,
    rgba(255, 107, 107, 0.08) 100%
  );
  padding: 60px 50px;
  border-radius: 25px;
  text-align: center;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px) scale(0.95);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  background-clip: padding-box;
  
  &.revealed {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      135deg,
      #667eea 0%,
      #ff6b6b 25%,
      #4ecdc4 50%,
      #45b7d1 75%,
      #96ceb4 100%
    );
    background-size: 300% 300%;
    border-radius: 27px;
    z-index: -1;
    animation: gradientShift 6s ease infinite;
  }
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @media (max-width: 768px) {
    padding: 50px 40px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 30px;
  }
`;

const MissionTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  color: #2d3748;
  margin: 0 0 30px 0;
  letter-spacing: -1px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

const MissionStatementText = styled.p`
  font-size: 1.3rem;
  line-height: 1.7;
  color: #4a5568;
  margin: 0;
  font-weight: 400;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.5;
  }
`;

// Modal Styles
const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div<{ isOpen: boolean }>`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 24px;
  padding: 40px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  transform: ${props => props.isOpen ? 'scale(1) rotateX(0deg)' : 'scale(0.8) rotateX(15deg)'};
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;

const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const ModalImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ModalTitle = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const ModalSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ModalDescription = styled.p`
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: center;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const ClickableLeaderCard = styled(LeaderCard)`
  cursor: pointer;
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 50px rgba(102, 126, 234, 0.3);
  }
`;

const About: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const heroRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функции для управления модальным окном
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Генерируем частицы для hero секции
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 6,
    size: 4 + Math.random() * 8,
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  // Генерируем плавающие элементы для контентной секции
  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    size: 30 + Math.random() * 60,
    x: Math.random() * 100,
    y: Math.random() * 100,
    shape: ['circle', 'square', 'diamond', 'organic'][Math.floor(Math.random() * 4)]
  }));

  useEffect(() => {
    // Параллакс эффект при скролле
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
      });

      // Эффект для hero секции
      if (heroRef.current) {
        const heroParallax = scrolled * 0.3;
        heroRef.current.style.transform = `translateY(${heroParallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            
            // Запускаем анимацию печатной машинки для DescriptionText
            if (entry.target.classList.contains('description-text')) {
              const chars = entry.target.querySelectorAll('.char');
              chars.forEach((char, index) => {
                setTimeout(() => {
                  (char as HTMLElement).style.animationDelay = `${index * 0.03}s`;
                  char.classList.add('animate');
                }, index * 30);
              });
            }

            // Анимация счетчиков для статистики
            if (entry.target.querySelector('.stat-number')) {
              const statNumbers = entry.target.querySelectorAll('.stat-number');
              statNumbers.forEach((statNumber) => {
                const finalValue = (statNumber as HTMLElement).dataset.value || '0';
                animateCounter(statNumber as HTMLElement, finalValue);
              });
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Функция анимации счетчика
  const animateCounter = (element: HTMLElement, finalValue: string) => {
    const isPercentage = finalValue.includes('%');
    const isPlus = finalValue.includes('+');
    const isRating = finalValue.includes('/');
    
    let numericValue: number;
    if (isRating) {
      // Для рейтинга извлекаем число перед /5 (например, из "4.9/5" берем 4.9)
      const ratingMatch = finalValue.match(/^([\d.]+)\/\d+$/);
      numericValue = ratingMatch ? parseFloat(ratingMatch[1]) : 0;
    } else {
      numericValue = parseInt(finalValue.replace(/[^0-9]/g, ''));
    }
    
    let currentValue = 0;
    const increment = numericValue / 100;
    const duration = 2000; // 2 секунды
    const stepTime = duration / 100;

    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= numericValue) {
        currentValue = numericValue;
        clearInterval(timer);
      }
      
      let displayValue: string;
      if (isRating) {
        displayValue = currentValue.toFixed(1) + '/5';
      } else {
        displayValue = Math.floor(currentValue).toString();
        if (isPercentage) displayValue += '%';
        if (isPlus) displayValue += '+';
      }
      
      element.textContent = displayValue;
    }, stepTime);
  };

  // Функция для разделения текста на буквы
  const splitTextToLetters = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  // Функция для разделения текста на слова
  const splitTextToWords = (text: string) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className="word">
        {word}
      </span>
    ));
  };

  // Функция для разделения текста на символы (для эффекта печатной машинки)
  const splitTextToChars = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char">
        {char}
      </span>
    ));
  };

  const setElementRef = (index: number) => (el: HTMLElement | null) => {
    elementsRef.current[index] = el;
  };

  const handleScrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <AboutWrapper>
      <HeroSection ref={heroRef}>
        <ParticlesContainer>
          {particles.map((particle) => (
            <Particle
              key={particle.id}
              delay={particle.delay}
              duration={particle.duration}
              size={particle.size}
              x={particle.x}
              y={particle.y}
              className="parallax-element"
            />
          ))}
        </ParticlesContainer>
        
        <LogoContainer>
          <MainLogo>PHOTOSHOP COURSES</MainLogo>
        </LogoContainer>
        
        <ScrollIndicator onClick={handleScrollToContent}>
          ↓
        </ScrollIndicator>
      </HeroSection>

      <ContentSection ref={contentRef}>
        <ContentFloatingElements>
          {floatingElements.map((element) => (
            <FloatingElement
              key={element.id}
              delay={element.delay}
              size={element.size}
              x={element.x}
              y={element.y}
              shape={element.shape}
              className="parallax-element"
            />
          ))}
        </ContentFloatingElements>
        
        <Container>
          <ContentContainer>
            <CompanyName ref={setElementRef(0)}>
              {splitTextToLetters('PHOTOSHOP COURSES')}
            </CompanyName>
            
            <MissionText ref={setElementRef(1)}>
              {splitTextToWords('To empower creative designers worldwide with professional Adobe Photoshop education,')}
            </MissionText>
            
            <MissionText ref={setElementRef(2)}>
              {splitTextToWords('providing comprehensive courses that transform creative concepts into practical Photoshop design skills.')}
            </MissionText>
            
            <DescriptionText ref={setElementRef(3)} className="description-text">
              {splitTextToChars('Our expertly crafted Adobe Photoshop courses cover photo editing, digital art, graphic design, photo manipulation, and creative composition. Each course is designed with hands-on projects, real-world applications, and professional techniques to help you master Photoshop and advance your career in the creative design industry.')}
            </DescriptionText>
            
            <ProductsCallToAction ref={setElementRef(4)}>
              <ProductsCard to="/products">
                <ProductsCardTitle>Explore Our Photoshop Courses</ProductsCardTitle>
                <ProductsCardDescription>
                  Discover comprehensive Adobe Photoshop learning programs designed for all skill levels
                </ProductsCardDescription>
                <ProductsCardButton>
                  View Courses
                </ProductsCardButton>
              </ProductsCard>
            </ProductsCallToAction>
          </ContentContainer>
        </Container>
      </ContentSection>

      {/* Statistics Section */}
      {/* <StatsSection>
        <Container>
          <StatsContainer>
            <StatsTitle ref={setElementRef(20)}>
              {splitTextToWords('Transforming Careers Through Creative Photoshop Education')}
            </StatsTitle>
            
            <StatsGrid>
              <StatCard ref={setElementRef(21)}>
                <StatNumber className="stat-number" data-value="7000+">7,000+</StatNumber>
                <StatLabel>Students Educated</StatLabel>
                <StatDescription>From Photoshop beginners to professional creative designers across 100+ countries</StatDescription>
              </StatCard>

              <StatCard ref={setElementRef(22)}>
                <StatNumber className="stat-number" data-value="92%">92%</StatNumber>
                <StatLabel>Career Advancement</StatLabel>
                <StatDescription>Students report salary increases or promotions within 6 months</StatDescription>
              </StatCard>

              <StatCard ref={setElementRef(23)}>
                <StatNumber className="stat-number" data-value="150+">150+</StatNumber>
                <StatLabel>Creative Companies</StatLabel>
                <StatDescription>Leading design agencies hiring our Photoshop professionals</StatDescription>
              </StatCard>

              <StatCard ref={setElementRef(24)}>
                <StatNumber className="stat-number" data-value="98%">98%</StatNumber>
                <StatLabel>Course Completion</StatLabel>
                <StatDescription>Industry-leading completion rates with hands-on projects</StatDescription>
              </StatCard>

              <StatCard ref={setElementRef(25)}>
                <StatNumber className="stat-number" data-value="12+">12+</StatNumber>
                <StatLabel>Photoshop Specializations</StatLabel>
                <StatDescription>From photo editing to digital art and graphic design</StatDescription>
              </StatCard>

              <StatCard ref={setElementRef(26)}>
                <StatNumber className="stat-number" data-value="4.9/5">4.9/5</StatNumber>
                <StatLabel>Student Rating</StatLabel>
                <StatDescription>Consistently rated as the top Photoshop learning platform</StatDescription>
              </StatCard>
            </StatsGrid>
          </StatsContainer>
        </Container>
      </StatsSection> */}

      {/* Adobe Photoshop Learning Timeline Section */}
      {/* <TimelineSection>
        <Container>
          <TimelineContainer>
            <SectionTitle ref={setElementRef(12)} style={{ color: '#2d3748' }}>
              {splitTextToLetters('OUR ADOBE PHOTOSHOP JOURNEY')}
            </SectionTitle>
            
            <Timeline>
              <TimelineItem ref={setElementRef(13)}>
                <TimelineYear>March 2023</TimelineYear>
                <TimelineContent>
                  <TimelineTitle>🚀 Foundation</TimelineTitle>
                  <TimelineDescription>
                    PhotoshopEcourses was founded with a vision to democratize Adobe Photoshop education 
                    and make creative design accessible to everyone, from complete beginners to advanced digital artists.
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem ref={setElementRef(14)}>
                <TimelineYear>June 2023</TimelineYear>
                <TimelineContent>
                  <TimelineTitle>💻 First C++ Programming Courses</TimelineTitle>
                  <TimelineDescription>
                    Launched our first comprehensive C++ programming courses, featuring hands-on projects 
                    and real-world applications. Over 1,000 students enrolled in the first month.
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem ref={setElementRef(15)}>
                <TimelineYear>September 2023</TimelineYear>
                <TimelineContent>
                  <TimelineTitle>� Industry Partnership</TimelineTitle>
                  <TimelineDescription>
                    Established partnerships with leading software companies and C++ programming experts 
                    to bring the latest best practices directly to our curriculum.
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem ref={setElementRef(16)}>
                <TimelineYear>January 2024</TimelineYear>
                <TimelineContent>
                  <TimelineTitle>🚀 Advanced C++ Programming Expansion</TimelineTitle>
                  <TimelineDescription>
                    Expanded our course offerings to include advanced C++ programming topics: 
                    templates, STL, memory management, multithreading, and performance optimization.
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem ref={setElementRef(17)}>
                <TimelineYear>June 2024</TimelineYear>
                <TimelineContent>
                  <TimelineTitle>🌐 Professional C++ Programming Era</TimelineTitle>
                  <TimelineDescription>
                    Pioneered comprehensive professional C++ programming courses, 
                    helping students master both modern C++ standards and software development best practices.
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem ref={setElementRef(18)}>
                <TimelineYear>December 2024</TimelineYear>
                <TimelineContent>
                  <TimelineTitle>🌟 Global Recognition</TimelineTitle>
                  <TimelineDescription>
                    Reached 7,000+ students worldwide and received recognition as a leading 
                    C++ programming education platform by major technology industry publications.
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem ref={setElementRef(19)}>
                <TimelineYear>2025</TimelineYear>
                <TimelineContent>
                  <TimelineTitle>🎯 Future Focus</TimelineTitle>
                  <TimelineDescription>
                    Continuing to lead C++ programming education with emerging technologies, modern C++ practices, 
                    and innovative learning methodologies for the next generation of software developers.
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </TimelineContainer>
        </Container>
      </TimelineSection> */}

      {/* Photoshop Education Team Section */}
      <LeadershipSection>
        <Container>
          <LeadershipContainer>
            <SectionTitle ref={setElementRef(5)}>
              {splitTextToLetters('Education ')}
            </SectionTitle>
            
            <LeadershipGrid>
              <ClickableLeaderCard ref={setElementRef(6)} onClick={openModal}>
                <LeaderImage>
                  <img src="/images/img_6.jpg" alt="Education Team" />
                  <LeaderOverlay>
                    <LeaderRole>Education & Course Team</LeaderRole>
                  </LeaderOverlay>
                </LeaderImage>
                <LeaderInfo>
                  <LeaderName>Georgi N.</LeaderName>
                  <LeaderTitle>Photoshop Experts & Educators</LeaderTitle>
                  <LeaderDescription>
                    Passionate about Adobe Photoshop and dedicated to making Photoshop education accessible to everyone. 
                    Creates comprehensive video courses to help others learn and master the art of creative design.
                  </LeaderDescription>
                </LeaderInfo>
              </ClickableLeaderCard>
            </LeadershipGrid>
          </LeadershipContainer>
        </Container>
      </LeadershipSection>

      {/* Values & Mission Section */}
      <ValuesSection>
        <Container>
          <ValuesContainer>
            <SectionTitle ref={setElementRef(27)} style={{ color: '#2d3748' }}>
              {splitTextToLetters('OUR CORE VALUES')}
            </SectionTitle>
            
            <ValuesGrid>
              <ValueCard ref={setElementRef(28)}>
                <ValueIcon>🎯</ValueIcon>
                <ValueTitle>Excellence in Photoshop Education</ValueTitle>
                <ValueDescription>
                  We maintain the highest standards in Adobe Photoshop education, constantly updating 
                  our curriculum with the latest Photoshop features and creative design best practices.
                </ValueDescription>
              </ValueCard>

              <ValueCard ref={setElementRef(29)}>
                <ValueIcon>🤝</ValueIcon>
                <ValueTitle>Beginner-Friendly Learning</ValueTitle>
                <ValueDescription>
                  Photoshop should be accessible to everyone. We create a supportive environment 
                  where designers from all backgrounds can master creative fundamentals.
                </ValueDescription>
              </ValueCard>

              <ValueCard ref={setElementRef(30)}>
                <ValueIcon>⚡</ValueIcon>
                <ValueTitle>Modern Photoshop Techniques</ValueTitle>
                <ValueDescription>
                  We stay current with the latest Photoshop updates and design tools, 
                  bringing modern creative practices directly to our students.
                </ValueDescription>
              </ValueCard>

              <ValueCard ref={setElementRef(32)}>
                <ValueIcon>🛡️</ValueIcon>
                <ValueTitle>Creative Design Principles</ValueTitle>
                <ValueDescription>
                  We prioritize teaching clean, professional design techniques, not just how to 
                  create graphics, but how to create them efficiently and professionally.
                </ValueDescription>
              </ValueCard>

              <ValueCard ref={setElementRef(33)}>
                <ValueIcon>🌱</ValueIcon>
                <ValueTitle>Continuous Skill Development</ValueTitle>
                <ValueDescription>
                  Photoshop is an evolving tool. We foster continuous learning 
                  and skill development for both students and instructors.
                </ValueDescription>
              </ValueCard>

              <ValueCard ref={setElementRef(34)}>
                <ValueIcon>🌍</ValueIcon>
                <ValueTitle>Real-World Applications</ValueTitle>
                <ValueDescription>
                  We focus on practical Photoshop skills that you can apply immediately 
                  in real projects, from photo editing to digital art and graphic design.
                </ValueDescription>
              </ValueCard>
            </ValuesGrid>

            <MissionStatement ref={setElementRef(35)}>
              <MissionTitle>Our Mission</MissionTitle>
              <MissionStatementText>
                To empower the next generation of creative designers with world-class education, 
                practical skills, and real-world projects that drive creative career success. 
                We believe that by making Adobe Photoshop education accessible and excellent, we can help 
                students create stunning visual designs while creating opportunities for everyone 
                to participate in the creative design revolution.
              </MissionStatementText>
            </MissionStatement>
          </ValuesContainer>
        </Container>
      </ValuesSection>

      {/* Modal Window */}
      <ModalOverlay isOpen={isModalOpen} onClick={closeModal}>
        <ModalContent isOpen={isModalOpen} onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeModal}>×</CloseButton>
          
          <ModalHeader>
            <ModalImage>
              <img src="/images/img_3.jpg" alt="Education Team" />
            </ModalImage>
          
            <ModalSubtitle>Photoshop Education Experts</ModalSubtitle>
          </ModalHeader>

          <ModalDescription>
            Our team of professional Photoshop experts is dedicated to 
            transforming creative careers through comprehensive Adobe Photoshop education.
            <br /><br />
            We believe Photoshop should be accessible to everyone, from complete beginners to advanced designers looking to 
            refine their skills. That's why we created comprehensive video courses that break down complex Photoshop concepts 
            into understandable, practical lessons.
            <br /><br />
            Our mission is simple: to help others discover the amazing world of Adobe Photoshop and empower them 
            with the knowledge and skills needed to create stunning visual designs and advance their creative careers. Every course we create is designed with 
            real-world applications in mind, ensuring you can apply what you learn immediately.
            <br /><br />
            Whether you're just starting your Photoshop journey or looking to master advanced creative design techniques, 
            our expert team is here to guide you every step of the way. Let's explore the incredible possibilities of Photoshop together!
          </ModalDescription>
        </ModalContent>
      </ModalOverlay>
    </AboutWrapper>
  );
};

export default About;