import React from 'react'

const Footer = () => {
    const SocialMediaLink = ({ href, src, alt }) => (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div className='border-2 p-3 border-[#dddddd] rounded-full hover:border-[#222] cursor-pointer'>
                <img className='w-12 h-12' src={src} alt={alt} />
            </div>
        </a>
    );

    const socialLinks = [
        { href: "https://www.linkedin.com/in/boobalan-r-4a5366179/", src: './assets/svg/linkedin.svg', alt: 'LinkedIn' },
        { href: "https://wa.me/7695018927", src: './assets/svg/whatsapp.svg', alt: 'WhatsApp' },
        { href: "https://instagram.com/__tap__2__know__?igshid=MzMyNGUyNmU2YQ==", src: './assets/svg/instagram.svg', alt: 'Instagram' },
        { href: "https://www.facebook.com/profile.php?id=100007512106938&mibextid=ZbWKwL", src: './assets/svg/fb.svg', alt: 'Facebook' },
    ];
    return (
        <section className='flex justify-center my-10 p-10 gap-5'>
            {socialLinks.map((link, index) => (
                <SocialMediaLink key={index} {...link} />
            ))}
        </section>
    )
}

export default Footer