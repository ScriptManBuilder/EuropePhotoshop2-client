import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MinusIcon, PlusIcon, TrashIcon, ShoppingBagIcon } from '../components/Icons';
import { Button, Container, Title } from '../styles/GlobalStyles';
import { useCart } from '../contexts/CartContext';
import { useMembership } from '../contexts/MembershipContext';
import { usePrice } from '../hooks/usePrice';
import { getProductImage } from '../data/products';
import VipMembershipUpsell from '../components/VipMembershipUpsell';
import { MEMBERSHIP_CONFIG } from '../config/constants';
import {
  CartWrapper,
  CartContent,
  CartItems,
  CartItem,
  ItemImage,
  ItemInfo,
  QuantityControls,
  QuantityButton,
  Quantity,
  ItemPrice,
  RemoveButton,
  CartSummary,
  SummaryTitle,
  SummaryRow,
  EmptyCart,
  CheckoutButton,
  ContinueShoppingButton
} from '../styles/pages/CartStyles';

const Cart: React.FC = () => {
  const { state, updateQuantity, removeItem, applyMembershipDiscount, setVipMembership } = useCart();
  const { isMember, upsell } = useMembership();
  const { formatPrice } = usePrice();
  const [showUpsell, setShowUpsell] = useState(!isMember);

  const subtotal = state.subtotal || state.total;
  const discountAmount = state.discountAmount || 0;
  const total = subtotal - discountAmount;

  if (state.items.length === 0) {
    return (
      <CartWrapper>
        <Container>
          <EmptyCart>
            <ShoppingBagIcon className="icon" />
            <h2>Your cart is empty</h2>
            <p>Add some products to get started</p>
            <Button as={Link} to="/products" variant="primary">
              Shop Now
            </Button>
          </EmptyCart>
        </Container>
      </CartWrapper>
    );
  }

  return (
    <CartWrapper>
      <Container>
        <Title style={{ color: '#1f2937', marginBottom: '40px', fontSize: '2.5rem', fontWeight: '700' }}>Shopping Cart</Title>
        
        <CartContent>
          <CartItems>
            {state.items.map((item) => (
              <CartItem key={item.id}>
                <ItemImage>
                  <img src={getProductImage(item.id)} alt={item.name} />
                </ItemImage>
                <ItemInfo>
                  <h3>{item.name}</h3>
                  <ItemPrice>
                    {state.membershipDiscount && item.originalPrice ? (
                      <>
                        <span style={{ textDecoration: 'line-through', opacity: 0.7, marginRight: '8px' }}>
                          {formatPrice(item.originalPrice)}
                        </span>
                        <span style={{ color: '#10b981', fontWeight: '600' }}>
                          {formatPrice(item.originalPrice * (1 - state.membershipDiscount / 100))}
                        </span>
                      </>
                    ) : (
                      formatPrice(item.price)
                    )}
                  </ItemPrice>
                </ItemInfo>
                <QuantityControls>
                  <QuantityButton 
                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  >
                    <MinusIcon />
                  </QuantityButton>
                  <Quantity>{item.quantity}</Quantity>
                  <QuantityButton 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <PlusIcon />
                  </QuantityButton>
                </QuantityControls>
                <RemoveButton 
                  onClick={() => removeItem(item.id)}
                >
                  <TrashIcon />
                </RemoveButton>
              </CartItem>
            ))}
          </CartItems>
          
          {/* VIP Membership Upsell */}
          {showUpsell && upsell.show && (
            <VipMembershipUpsell
              cartSubtotal={subtotal}
              showDiscount={true}
              onAccept={() => {
                // Apply membership discount to cart and mark VIP membership as selected
                applyMembershipDiscount(MEMBERSHIP_CONFIG.vip.discountPercentage);
                setVipMembership(true);
                setShowUpsell(false);
              }}
              onDecline={() => setShowUpsell(false)}
            />
          )}

          <CartSummary>
            <SummaryTitle>Order Summary</SummaryTitle>

            <SummaryRow>
              <span>Subtotal:</span>
              <span>{formatPrice(subtotal)}</span>
            </SummaryRow>

            {/* Show VIP membership discount if applied */}
            {state.membershipDiscount && discountAmount > 0 && (
              <SummaryRow style={{ color: '#10b981' }}>
                <span>🌟 VIP Discount (-{state.membershipDiscount}%):</span>
                <span>-{formatPrice(discountAmount)}</span>
              </SummaryRow>
            )}



            <SummaryRow className="total">
              <span>Total:</span>
              <span>{formatPrice(total)}</span>
            </SummaryRow>

            {/* Show VIP membership badge if active */}
            {isMember && (
              <div style={{ 
                background: 'linear-gradient(45deg, #FFD700, #FFA500)', 
                color: '#333', 
                padding: '8px 16px', 
                borderRadius: '8px', 
                textAlign: 'center', 
                fontWeight: '600', 
                fontSize: '0.9rem',
                margin: '16px 0'
              }}>
                🌟 VIP Member - {MEMBERSHIP_CONFIG.vip.discountPercentage}% Off Applied!
              </div>
            )}

            <Button as={Link} to="/checkout" variant="primary">
              Proceed to Checkout
            </Button>
            
            <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.85rem', color: '#9ca3af' }}>
              Instant access • Digital courses
            </div>
          </CartSummary>
        </CartContent>

        <ContinueShoppingButton>
          <Link to="/products">Continue Shopping</Link>
        </ContinueShoppingButton>
      </Container>
    </CartWrapper>
  );
};

export default Cart;