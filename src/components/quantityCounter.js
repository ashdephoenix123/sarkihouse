import React, {useState} from 'react'

const QuantityCounter = ({stock}) => {
  const [quantity, setQuantity] = useState(1)

    return (
        <div className="quantity">
            <button className='btn-2' onClick={() => {
                quantity > 1 && setQuantity(prev => prev - 1)
            }}>-</button>
            {quantity}
            <button className='btn-2' onClick={() => {
                quantity < stock && setQuantity(prev => prev + 1)
            }}>+</button>
        </div>
    )
}

export default QuantityCounter
