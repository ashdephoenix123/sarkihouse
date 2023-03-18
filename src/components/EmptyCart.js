import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='container2 center'>
      <div className="page__heading">No Products in your Cart!</div>
        <Link to="/products" type='button' className='btn'>Continue Shopping</Link>
    </div>
  )
}

export default EmptyCart
