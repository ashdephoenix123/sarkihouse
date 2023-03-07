import React from 'react'
import { Link } from 'react-router-dom'

const HomeContent = (props) => {
    return (
        <>
            <div className="home">
                <div className="home__content">
                    <div className="content__left">
                        <span className='title1'>Welcome to</span>
                        <div className="title2">{props.title}</div>
                        <p className='title3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos est sed quia similique? Magni quo eaque consequatur atque? Consequatur libero voluptatem odit nemo tenetur earum vero recusandae neque tempore.</p>
                        <Link to="/cart"><button className='btn  margin-above-2'>Shop now</button></Link>
                    </div>
                    <div className="content__right">
                        <img src="images/hero.jpg" alt="imagehere" className='home__image' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeContent
