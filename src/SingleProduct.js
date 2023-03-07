import React, { useEffect } from 'react'
import { useFeaturedData } from './context/productContext'
import { Link, useParams } from 'react-router-dom';
import FormatPrice from './components/FormatPrice'
import { RiTruckFill } from 'react-icons/ri'
import { FaExchangeAlt } from 'react-icons/fa'
import { MdOutlineSecurity } from 'react-icons/md'
import Colorsavailable from './components/Colorsavailable';
import { useState } from 'react';
import ProductImages from './components/ProductImages';
import Stars from './components/Stars';

const SingleProduct = () => {
  const { getSingleProductDetails, API, singleProduct, progress } = useFeaturedData();
  const [quantity, setQuantity] = useState(1)

  const { id } = useParams();
  const { name, company, price, description, category, stock, reviews, stars, colors, image } = singleProduct;

  useEffect(() => {
    getSingleProductDetails(`${API}?id=${id}`)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <>
      {progress === 0 &&
        <div className="single-product">
          <div className="page-navigation">
            <Link className='page-navigation__link' to="/">Home</Link> / <div className="page-navigation__text"> {category}</div>
          </div>
          <div className="product">
            <div className="product__images">
              <ProductImages image={image} />
            </div>
            <div className="product__details">
              <div className="name">{name}</div>
              <div className="review">
                <Stars stars={stars} reviews={reviews} />
              </div>
              <div className="price">MRP: <del><FormatPrice price={price + 50000} /></del></div>
              <div className="deal__price">Deal of the Day:  <FormatPrice price={price} /></div>
              <div className="description">{description}</div>

              <div className="product__feature">
                <div className="product__feature-image">
                  <RiTruckFill size={30} className="image-here" />
                  <span className='product__feature-desc'>Free delivery</span>
                </div>
                <div className="product__feature-image">
                  <FaExchangeAlt size={30} className="image-here" />
                  <span className='product__feature-desc'>30 days replacement</span>

                </div>
                <div className="product__feature-image">
                  <MdOutlineSecurity size={30} className="image-here" />
                  <span className='product__feature-desc'>1 year warranty</span>

                </div>

              </div>
              <div className="adjust">
                <div className="availabilty">
                  <span>Available: </span>
                  <span>{stock !== 0 ? "In Stock" : "Out of Stock"}</span>
                </div>
                <div className="availabilty">
                  <span>Brand: </span>
                  <span>{company}</span>
                </div>
              </div>
              <div className="select__choice">
                <div className="your__choice">
                  Colors:
                  <Colorsavailable colors={colors} />
                </div>
              </div>
              <div className="quantity">
                <button className='btn-2' onClick={() => {
                  quantity > 1 && setQuantity(prev => prev - 1)
                }}>-</button>
                {quantity}
                <button className='btn-2' onClick={() => {
                  quantity < stock && setQuantity(prev => prev + 1)
                }}>+</button>
              </div>
              <Link to="/cart" className='btn'>add to cart</Link>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default SingleProduct
