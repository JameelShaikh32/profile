import { useEffect, useState } from 'react';
import { bgvideo } from "../../assets";
import './home.css';

const Home = () => {
    const [designation, setDesignation] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [designationIndex, setDesignationIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const designations = [
        "Full Stack Developer",
        "UI/UX Designer",
        "Problem Solver",
        "Tech Enthusiast"
    ];

    useEffect(() => {
        const scrollDownIcon = document.querySelector('.scroll-down');
        const handleScroll = () => {
            if (window.scrollY > 100) {
                scrollDownIcon.style.opacity = '0';
                scrollDownIcon.style.bottom = '-40px';
            } else {
                scrollDownIcon.style.opacity = '1';
                scrollDownIcon.style.bottom = '20px';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const currentDesignation = designations[designationIndex];
        
        if (!isDeleting && designation === currentDesignation) {
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        }

        if (isDeleting && designation === '') {
            setIsDeleting(false);
            setDesignationIndex((prev) => (prev + 1) % designations.length);
            setTypingSpeed(150);
            return;
        }

        const timeout = setTimeout(() => {
            if (isDeleting) {
                setDesignation(currentDesignation.substring(0, designation.length - 1));
                setTypingSpeed(50);
            } else {
                setDesignation(currentDesignation.substring(0, designation.length + 1));
                setTypingSpeed(150);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [designation, isDeleting, designationIndex]);

    return (
        <div className="hero" id="home">
            <video autoPlay muted loop id="myVideo">
                <source src={bgvideo} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className="hero-overlay">
                <div className="hero-content" data-aos="fade-up">
                    <h1>Jameel Shaikh</h1>
                    <p>I&apos;m a <abbr id='designation'>{designation}</abbr>,
                        specialising in building user-friendly, fast-loading websites & web-applications.</p>
                </div>
                <div className="scroll-down">
                    <a href="#about" className="scroll-down-link">
                        <span></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
