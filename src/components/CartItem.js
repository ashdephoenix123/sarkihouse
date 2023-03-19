import React from 'react'
import { BsTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import FormatPrice from './FormatPrice'
import QuantityCounter from './quantityCounter'

const CartItem = ({ id, name, image, price, max, quantity, color }) => {
    const { removeItem } = useCartContext();

    const setIncrease = () => {
        console.log('increase')
    }

    const setDecrease = () => {
        console.log('decrease')
    }

    return (
        <>
            <div className="cart-title">
                <div className="cart-desc">
                    <Link to={`/singleproduct/${id}`}><img className='cart__img' src={image} alt={`img${id}`} /></Link>
                    <div className="cart-item">
                        <p className="cart-item__name">{name}</p>
                        <div className='your__choice center2'>
                            <span>Color:</span> <button className="available__color" style={{ backgroundColor: color }}></button>
                        </div>
                    </div>
                </div>
                <div className="cart__price">
                    {<FormatPrice price={price} />}
                </div>

                <div className="cart__quantity">
                    <QuantityCounter quantity={quantity} setIncrease={setIncrease} setDecrease={setDecrease} />
                </div>
                <div className="cart__subtotal">
                    {<FormatPrice price={quantity * price} />}
                </div>
                <div type='button'><BsTrashFill className="cart__remove" size={20} onClick={() => removeItem(id)} /></div>
            </div>

        </>
    )
}

export default CartItem
