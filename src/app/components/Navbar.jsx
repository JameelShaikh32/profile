import { ArrowUpRight, Menu, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { assets } from '../../assets/assets';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const sideMenuRef = useRef();
    const [isScrolled, setIsScrolled] = useState(false);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        })
    }, [])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt="header" className='w-full contrast-90 blur-sm' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScrolled ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}>
                <a href="#top">
                    <h1 className='text-3xl text-gray-800 font-semibold tracking-wide dark:text-white'>
                        Jameel
                        <span className='text-rose-500 dark:text-rose-400'>.</span>
                    </h1>
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScrolled ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dar:border-white/50 dark:bg-transparent'}`}>
                    <li><a className='font-ovo' href="#top">Home</a></li>
                    <li><a className='font-ovo' href="#about">About</a></li>
                    <li><a className='font-ovo' href="#services">Services</a></li>
                    <li><a className='font-ovo' href="#work">Work</a></li>
                    <li><a className='font-ovo' href="#contact">Contact</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button className='cursor-pointer' onClick={() => setIsDarkMode(prev => !prev)}>
                        {isDarkMode ? <Sun className='w-6' /> : <Moon className='w-6 text-gray-800' />}
                    </button>

                    <a href="#contact"
                        className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 group-hover:border-white rounded-full ml-4 dark:border-white/50 hover:bg-rose-400 hover:text-white hover:border-rose-400 dark:hover:bg-darkHover dark:hover:text-white dark:hover:border-white transition-all duration-300 group'
                    >Contact
                        <ArrowUpRight className='w-6 text-gray-800 dark:text-white group-hover:text-white transition-all duration-300' /></a>

                    <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
                        {isDarkMode ? <Menu className='w-6' /> : <Menu className='w-6 text-gray-800' />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col items-center gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

                    <div className='absolute top-6 right-6 cursor-pointer' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="close icon" className='w-5 cursor-pointer' onClick={closeMenu} />
                    </div>

                    <li><a className='font-ovo' href="#top" onClick={closeMenu}>Home</a></li>
                    <li><a className='font-ovo' href="#about" onClick={closeMenu}>About</a></li>
                    <li><a className='font-ovo' href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a className='font-ovo' href="#work" onClick={closeMenu}>Work</a></li>
                    <li><a className='font-ovo' href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar