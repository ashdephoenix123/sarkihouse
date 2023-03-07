import React from 'react'
import { useState } from 'react'

const ProductImages = ({ image = [{ url: "" }] }) => {

    const [mainImage, setMainImage] = useState(image[0])
    return (
        <>
            <div className="all__images">
                {image.map((item, index) => {
                    return (<figure className="singleImage"  key={index}>
                        <img src={item.url} alt={item.filename} className='image__here' onClick={()=> setMainImage(item)}/>
                    </figure>)
                })}
            </div>
            <figure className="zoomed__image">
                <img className='zoomed__image-main' src={mainImage.url} alt={mainImage.filename} />
            </figure>


        </>
    )
}

export default ProductImages
