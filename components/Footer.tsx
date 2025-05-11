import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='my-4 text-center text-white/70'>© {currentYear} Ayush Dixit</div>

    );
};

export default Footer;
