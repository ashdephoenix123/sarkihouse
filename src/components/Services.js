import React from 'react'
import {FaTruckMoving, FaHandHoldingUsd} from 'react-icons/fa'
import { MdOutlineSecurity } from "react-icons/md";
import {RiSecurePaymentLine} from 'react-icons/ri'


const Services = () => {
  return (
    <>
        <div className="services">
            <div className="services__list list--1"><FaTruckMoving className='list-icon' size={40} /> <span>Super Fast and Free Delivery</span></div>
            <div className="services__list list--2"><MdOutlineSecurity className='list-icon' size={40} /> <span>Non-contact Shipping</span></div>
            <div className="services__list list--3"><FaHandHoldingUsd className='list-icon' size={40} /> <span>Money-Back Guaranteed</span></div>
            <div className="services__list list--4"><RiSecurePaymentLine className='list-icon' size={40} /> <span>Super Secure Payments System</span></div>
        </div>
        <div className="trust">
            <h2 className='trust__title'>trusted by 1000+ companies</h2>
            <div className="trust__lists">
                <img className='trust__lists-icon' src="/images/forbes.png" alt="imagehere" />
                <img className='trust__lists-icon' src="/images/oracle.png" alt="imagehere" />
                <img className='trust__lists-icon' src="/images/netflix.png" alt="imagehere" />
                <img className='trust__lists-icon' src="/images/stripe.png" alt="imagehere" />
                <img className='trust__lists-icon' src="/images/google.png" alt="imagehere" />
                
            </div>
        </div>
    </>
  )
}

export default Services
