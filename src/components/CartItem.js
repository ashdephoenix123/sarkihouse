import React from 'react'
import { BsTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import FormatPrice from './FormatPrice'
import QuantityCounter from './quantityCounter'

const CartItem = ({ id, name, image, price, max, quantity, color }) => {

    return (
        <>
            <div className="cart-title">
                <div className="cart-desc">
                    <Link to={`/singleproduct/${id}`}><img className='cart__img' src={image} alt={`img${id}`} /></Link>
                    <div className="cart-item">
                        <p className="cart-item__name">{name}</p>
                        <p className='your__choice center2'>
                            <p>Color:</p> <button className="available__color" style={{ backgroundColor: color }}></button>
                        </p>
                    </div>
                </div>
                <p className="cart__price">
                    {<FormatPrice price={price} />}
                </p>

                <p className="cart__quantity">
                    <QuantityCounter stock={quantity} /> 
                </p>
                <p className="cart__subtotal">
                    {<FormatPrice price={quantity * price} />}</p>
                <div type='button'><BsTrashFill  className="cart__remove" size={20}/></div>
            </div>

        </>
    )
}

export default CartItem