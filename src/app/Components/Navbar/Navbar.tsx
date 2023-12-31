"use client"
import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import { Sidebar } from '../Sidebar/Sidebar';
import { usePathname } from 'next/navigation'


interface NavbarProps {
    scrollToAbout: React.MouseEventHandler<HTMLAnchorElement>;
    scrollToContactForm: React.MouseEventHandler<HTMLParagraphElement>;
}
const Navbar: React.FC<NavbarProps> = ({ scrollToAbout, scrollToContactForm }) => {
    const [cards, setCards] = useState<React.ReactNode[]>([]);
    const pathname = usePathname()
    return (
        <>
            <nav className=' bg-white w-full border-b'>
                <div className='flex justify-between  items-center px-[15px] py-[15px]  max-w-[1200px] mx-auto'>
                    <div>
                        <Image src="/assets/img/logo.svg" alt="Logo" className={styles.logoImg} width={1600} height={900} />
                    </div>

                    <div className='md:flex hidden md:gap-7 lg:gap-[50px]'>
                        {pathname !== '/' && (
                            <Link href="/" className={`${styles.titleStyle}`}>Home</Link>
                        )}
                        <a className={`${styles.titleStyle}`} href="#" onClick={scrollToAbout}>About</a>
                        {pathname !== '/Project' && (
                            <Link href="../../Project" className={`${styles.titleStyle}`}>Projects</Link>
                        )}
                        <div className='dropdown-menu w-auto'>
                            <p>Pages</p>
                            <ul className='dropdown'>
                                <li>
                                    <Link href="../../task1">Task 1</Link>
                                </li>
                                <li>
                                    <Link href="../../task2">Task 2</Link>
                                </li>
                                <li>Contact</li>
                                <li>Contact</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <p className={`${styles.titleStyle}`}>Blog</p>
                        <p className={`${styles.titleStyle}`} onClick={scrollToContactForm}>Contact</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Button style={{ backgroundColor: "#fe3e57", color: "#fff", padding: "17px 40px 13px" }}>
                            Let's Talk
                        </Button>
                        <Sidebar />
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar