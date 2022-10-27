import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='text-center mt-5'>
            <h4 className='text-info'>Contact Us</h4>
            <div className='fs-5'>
                <FaFacebook className='me-2'></FaFacebook>
                <FaTwitter className='me-2'></FaTwitter>
                <FaWhatsapp></FaWhatsapp>
            </div>
            <p >Copyright @ 2022 All Rights Reserved</p>
        </div>
    );
};

export default Footer;