"use client"
import React, { useRef } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ContactForm from '../Homepage/contact'
import Footer from '../Homepage/footer'
import Details from './details'
import Project from './project'

const page = () => {
    const contactFormRef = useRef<HTMLDivElement>(null);
    const scrollToContactForm: MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();
        if (contactFormRef.current) {
            contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <Navbar
                scrollToContactForm={scrollToContactForm}
            />
            <Project />
            <Details />
            <ContactForm ref={contactFormRef} />
            <Footer />
        </>
    )
}

export default page