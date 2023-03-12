import React from 'react'
import FormatPrice from './FormatPrice';
import { Link } from 'react-router-dom';

const List = (props) => {
    const { name, image, price, id, description } = props;

    return (
        <div className="list">
            <figure className='list-image'>
                <Link to={`/singleproduct/${id}`}><img className='image-item' src={image} alt={`product-${id}`} /></Link>
            </figure>
            <div className="image__desc">
                <div className="image__desc-name">{name}</div>
                <div className="image__desc-price"><FormatPrice price={price} /></div>
                <div className="image__desc-desc">{description.slice(0, 140) + "..."}</div>
                <Link className="btn-3 link" to={`/singleproduct/${id}`}>show me</Link>
            </div>
        </div>
    )
}

export default List
