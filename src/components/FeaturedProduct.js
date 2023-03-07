import React from 'react'
import { useFeaturedData } from '../context/productContext'
import Card from './Card'

const FeaturedProduct = () => {

    const { featuredProducts, isLoading } = useFeaturedData();
    
    return (
        <>
            <div className="featured-products">
                <div className="featured__desc">
                    <div className="featured__desc-title">
                        <span className="check">check now!</span>
                        <h3 className='page__heading2'>our featured items</h3>
                    </div>

                    {isLoading ? <img className='loading__gif' src="/images/gif.gif" alt="loading" /> :
                        <div className="featured__desc-items">
                            {featuredProducts.map((item, index) => {
                                return <Card key={index} id={item.id} image={item.image} name={item.name} price={item.price} category={item.category} />
                            })}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default FeaturedProduct
