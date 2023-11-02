import Image from 'next/image';
import React, { useState } from 'react'
import "../Sidebar/Sidebar.css"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';

export const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navItems = ["home", "About", "portfolio", "pages", "blog", "contact"];
    return (
        <>
            <div className='md:hidden'>
                <button
                    type="button"
                    className={`sidebar-burger border-2 rounded-full ${isOpen ? 'border-black' : 'border-[#dddddd]'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span >
                        {isOpen ? (
                            <CloseIcon sx={{ color: "black" }} />
                        ) : (
                            <MenuOpenIcon sx={{ color: "black" }} />
                        )}
                    </span>
                </button>

            </div>
            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="sidebar-inner" >
                    <header className="sidebar-header">
                        <Image src="/assets/img/logo.svg" alt="Logo" className='w-14 h-14 m-4' width={1600} height={900} />
                    </header >
                    <nav className="sidebar-menu">

                        <button className="sidebar-button">
                            <span>Home</span>
                        </button>
                        <button className="sidebar-button">
                            <span>About</span>
                        </button>
                        <button className="sidebar-button">
                            <span>portfolio</span>
                        </button>
                        <button className="sidebar-button">
                            <span>pages</span>
                        </button>
                        <button className="sidebar-button">
                            <span>blog</span>
                        </button>
                        <button className="sidebar-button">
                            <span>contact</span>
                        </button>
                    </nav>
                </div >
            </aside >

        </>
    );
};