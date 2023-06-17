import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__contain">
                <div className="footer__column">
                    <h3 className='footer__title'>
                        Abstract
                    </h3>
                    <a href='/'>Start</a>
                    <a href='/'>Trial</a>
                    <a href='/'>Pricing</a>
                    <a href='/'>Download</a>
                </div>
                <div className="footer__column">
                    <h3 className='footer__title'>
                        Resources
                    </h3>
                    <a href='/'>Blog</a>
                    <a href='/'>Help Center</a>
                    <a href='/'>Release Notes</a>
                    <a href='/'>Status</a>
                </div>
                <div className="footer__column">
                    <h3 className='footer__title'>
                        Community
                    </h3>
                    <a href='/'>Twitter</a>
                    <a href='/'>Linkedln</a>
                    <a href='/'>Facebook</a>
                    <a href='/'>Dribbble</a>
                    <a href='/'>Podcast</a>
                </div>
                <div className="footer__column">
                    <h3 className='footer__title'>
                        Company
                    </h3>
                    <a href='/'>About Us</a>
                    <a href='/'>Career</a>
                    <a href='/'>Legal</a>
                    <strong>Contact Us</strong>
                    <a href='/'>info@abstractclone.com</a>
                </div>
                <div className="footer__column__copyright">
                    <img src='/abstract-logo-marks-2110370035.webp' />
                    <p>© Copyright 2022</p>
                    <p>Abstract Studio Design, Inc.</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer