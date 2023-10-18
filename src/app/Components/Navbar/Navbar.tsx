import React from 'react'
import styles from "./Navbar.module.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


interface NavbarProps {
    scrollToAbout: React.MouseEventHandler;
    scrollToContactForm: React.MouseEventHandler;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToAbout, scrollToContactForm }) => {
    return (
        <>
            <nav className=' bg-white w-full '>
                <div className='flex justify-between  items-center px-[15px] py-[15px]  max-w-[1200px] mx-auto'>
                    <div>
                        <img className={`${styles.logoImg}`} src="/assets/img/logo.svg"></img>
                    </div>
                    <div className='md:flex hidden md:gap-7 lg:gap-[50px]'>
                        <p className={`${styles.titleStyle}`}>Home</p>
                        {/* <p >About</p> */}
                        <a className={`${styles.titleStyle}`} href="#" onClick={scrollToAbout}>About</a>
                        <p className={`${styles.titleStyle}`}>Portfolio</p>
                        <div className='dropdown-menu w-auto'>
                            Pages
                            <ul className='dropdown'>
                                <li>Contact</li>
                                <li>Contact</li>
                                <li>Contact</li>
                                <li>Contact</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <p className={`${styles.titleStyle}`}>Blog</p>
                        <a href="#" className={`${styles.titleStyle}`} onClick={scrollToContactForm}>Contact</a>
                    </div>
                    <div>
                        <Button style={{ backgroundColor: "#fe3e57", color: "#fff", padding: "17px 40px 13px" }}>
                            Let's Talk
                        </Button>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar