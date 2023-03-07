import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="footer">
                <div className="footer__part-1">
                    <div className="write__something">
                        <span>Ready to get started?</span>
                        <span>Talk to us Today</span>
                    </div>
                    <button className='btn'>get started</button>
                </div>
                <div className="footer__part-2">
                    <div className="contents-1">
                        <h3 className="footer__heading">Sarki ECommerce</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="contents-2">
                        <h3 className="footer__heading">Subscribe to get Important updates</h3>
                        <form action="" className="subscribe">
                            <input className='footer__email' type="email" name='email' placeholder='Email' />
                            <button className='btn'>subscribe</button>
                        </form>
                    </div>
                    <div className="contents-3">
                        <h3 className="footer__heading">Follow Me</h3>
                        <figure className='socials__icons'>
                            <BsInstagram size={30}/>
                            <BsTwitter size={30}/>
                        </figure>
                    </div>
                    <div className="contents-4">
                        <h3 className="footer__heading">Call Me</h3>
                        <span>+91 9883475729</span>
                    </div>
                </div>
                <div className="footer__part-3">
                    <span className='legal'>@{year} SarkiECommerce. All Rights Reserved</span>
                    <ul className="policylists">
                        <li className='policylists__items'><a href='/'>privacy policy</a></li>
                        <li className='policylists__items'><a href='/'>terms & conditions</a></li>
                    </ul>
                    <span className='madewithlove'>Made with ❤️ by AKASH SARKI</span>
                </div>
            </div>
        </>
    )
}

export default Footer
