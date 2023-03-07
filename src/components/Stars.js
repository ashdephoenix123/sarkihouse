import React from 'react'
import { FaStarHalfAlt, FaStar, FaRegStar } from 'react-icons/fa'

const Stars = ({ stars, reviews }) => {

    const ratingStars = Array.from({ length: 5 }, (elem, index) => {
        return (<span key={index} className='stars'>
            {stars >= index + 1 ? <FaStar /> : stars >= index + 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>)
    })

    return (
        <>
            {ratingStars}
            <span className="totalReviews">
                &nbsp;({reviews} Customer Reviews)
            </span>

        </>
    )
}

export default Stars
