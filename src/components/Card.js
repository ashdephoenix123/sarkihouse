import React from 'react'
import { Link } from 'react-router-dom';
import FormatPrice from './FormatPrice';


const Card = (props) => {
    const { name, image, price, id, category } = props;
    return (
        <>
            <div className="card">
                <figure className='card-link'>
                    <Link to={`/singleproduct/${id}`}><img className='card-image' src={image} alt={`product-${id}`} /></Link>
                    <div className="category">{category}</div>
                </figure>
                <div className="card-detail">
                    <div className="name">{name}</div>
                    <div className="price"><FormatPrice price={price} /></div>
                </div>
            </div>
        </>
    )
}

export default Card
