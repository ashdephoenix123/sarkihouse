import React from 'react'

const QuantityCounter = ({ quantity, setIncrease, setDecrease }) => {

    return (
        <div className="quantity">
            <button className='btn-2' onClick={()=> setDecrease()}>-</button>
            {quantity}
            <button className='btn-2' onClick={()=> setIncrease()}>+</button>
        </div>
    )
}

export default QuantityCounter
