import React from 'react'
import { useCartContext } from './context/CartContext'
import CartItem from './components/CartItem';
import EmptyCart from './components/EmptyCart';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useCartContext();
  console.log(cartItems)

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
        { cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
        <hr />
        <div className="cart-button">
          <Link to="/products" className='btn'>continue shopping</Link>
          <button type='btn' className='btn' style={{backgroundColor: "orangered"}}>clear cart</button>
        </div>
        
      </div>
      : <EmptyCart />
    }
    </>
  )
}

export default Cart
