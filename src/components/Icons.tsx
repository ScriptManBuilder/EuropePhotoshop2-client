import React from 'react';
import { 
  FiFacebook, 
  FiInstagram, 
  FiTwitter, 
  FiYoutube,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
  FiPhone,
  FiMail,
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShoppingBag
} from 'react-icons/fi';
import { FaTiktok, FaDiscord, FaPinterest } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';

interface IconProps {
  size?: number;
  className?: string;
}

export const FacebookIcon: React.FC<IconProps> = (props) => React.createElement(FiFacebook as any, props);
export const InstagramIcon: React.FC<IconProps> = (props) => React.createElement(FiInstagram as any, props);
export const TwitterIcon: React.FC<IconProps> = (props) => React.createElement(FiTwitter as any, props);
export const YoutubeIcon: React.FC<IconProps> = (props) => React.createElement(FiYoutube as any, props);
export const TiktokIcon: React.FC<IconProps> = (props) => React.createElement(FaTiktok as any, props);
export const DiscordIcon: React.FC<IconProps> = (props) => React.createElement(FaDiscord as any, props);
export const PinterestIcon: React.FC<IconProps> = (props) => React.createElement(FaPinterest as any, props);

export const ShoppingCartIcon: React.FC<IconProps> = (props) => React.createElement(FiShoppingCart as any, props);
export const UserIcon: React.FC<IconProps> = (props) => React.createElement(FiUser as any, props);
export const MenuIcon: React.FC<IconProps> = (props) => React.createElement(FiMenu as any, props);
export const CloseIcon: React.FC<IconProps> = (props) => React.createElement(FiX as any, props);
export const PhoneIcon: React.FC<IconProps> = (props) => React.createElement(FiPhone as any, props);
export const MailIcon: React.FC<IconProps> = (props) => React.createElement(FiMail as any, props);

export const MinusIcon: React.FC<IconProps> = (props) => React.createElement(FiMinus as any, props);
export const PlusIcon: React.FC<IconProps> = (props) => React.createElement(FiPlus as any, props);
export const TrashIcon: React.FC<IconProps> = (props) => React.createElement(FiTrash2 as any, props);
export const ShoppingBagIcon: React.FC<IconProps> = (props) => React.createElement(FiShoppingBag as any, props);
export const ClockIcon: React.FC<IconProps> = (props) => React.createElement(AiOutlineClockCircle as any, props);
