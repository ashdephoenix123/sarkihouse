import React, { useState } from 'react'
import QuantityCounter from './quantityCounter';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const Colorsavailable = ({ products }) => {
  const { id, colors=[""], stock } = products;
  const [selectedColor, setSelectedColor] = useState(colors[0])

  const {addToCart} = useCartContext()

  return (
    <>
      <div className="select__choice">
        <div className="your__choice">
          Colors:
          <div className="available">
            {colors.map((eachColor, index) => {
              return <button key={index} className="available__color" style={{ backgroundColor: eachColor }} onClick={() => { setSelectedColor(eachColor) }}>
                {selectedColor === eachColor && <>&#10003;</>}
              </button>

            })}
          </div>
        </div>
        <QuantityCounter stock={stock} />
        <Link to="/cart" className='btn' onClick={() => addToCart(id, selectedColor, products, stock)}>add to cart</Link>
      </div>
    </>
  )
}

export default Colorsavailable
