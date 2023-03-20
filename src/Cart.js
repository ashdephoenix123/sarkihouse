import React from 'react'
import { useCartContext } from './context/CartContext'
import CartItem from './components/CartItem';
import EmptyCart from './components/EmptyCart';
import { Link } from 'react-router-dom';
import FormatPrice from './components/FormatPrice';

const Cart = () => {
  const { cartItems, clearCart, shippingFee, cartTotal } = useCartContext();

  return (
    <>{cartItems.length !==0 ?
      <div className="container2">
        <div className="cart-title">
          <p className='cart-title-design'>item</p>
          <p className='cart-title-design'>price</p>
          <p className='cart-title-design'>quantity</p>
          <p className='cart-title-design'>subtotal</p>
          <p className='cart-title-design'>remove</p>
        </div>
        <hr />
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
        <hr />
        <div className="cart-button">
          <Link to="/products" className='btn'>continue shopping</Link>
          <button type='button' className='btn' style={{backgroundColor: "orangered"}} onClick={clearCart}>clear cart</button>
        </div>
        <div className="float-right">
          <div className='cart-total'>
            <div className="cart_sub"><span>Subtotal:</span><span><FormatPrice price={cartTotal} /></span></div>
            <div className="cart_sub"><span>Shipping Fee:</span><span><FormatPrice price={shippingFee} /></span></div>
            <div className="cart_sub"><span>Order Total:</span><span><FormatPrice price={(cartTotal + shippingFee)} /></span></div>
          </div>
        </div>
        
      </div>
      : <EmptyCart />
    }
    </>
  )
}

export default Cart
