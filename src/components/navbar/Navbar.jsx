import { useState, useEffect } from "react";
import './header.css';
import { HiOutlineHome, HiOutlineUser, HiOutlineBadgeCheck, HiOutlineClipboardList, HiOutlinePhotograph, HiOutlineMail, HiX, HiOutlineMenu } from "react-icons/hi";
import { GrGroup, GrCertificate } from "react-icons/gr";
import { NavLink } from 'react-router-dom'; // Keep this import

// Define nav items with specific IDs for scrolling
const navItems = [
    { id: "home", icon: <HiOutlineHome className="nav__icon" />, label: "Home", className: "nav__item-1" },
    { id: "about", icon: <HiOutlineUser className="nav__icon" />, label: "About", className: "nav__item-2" },
    { id: "skills", icon: <HiOutlineBadgeCheck className="nav__icon" />, label: "Skills", className: "nav__item-3" },
    { id: "services", icon: <HiOutlineClipboardList className="nav__icon" />, label: "Services", className: "nav__item-4" },
    { id: "portfolio", icon: <HiOutlinePhotograph className="nav__icon" />, label: "Projects", className: "nav__item-5" },
    { id: "contact", icon: <HiOutlineMail className="nav__icon" />, label: "Contact", className: "nav__item-6" },
    { id: "testimonials", icon: <GrGroup className="nav__icon" />, label: "Testimonials", className: "nav__item-7" },
    { id: "certificates", icon: <GrCertificate className="nav__icon" />, label: "Certificates", className: "nav__item-8" },
];

const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (window.scrollY >= 80) header.classList.add("scroll-header");
            else header.classList.remove("scroll-header");
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Clean up the event listener
    }, []);

    const [toggle, setToggle] = useState(false);
    const [activeNav, setActiveNav] = useState("#home"); // Keep default activeNav for scrolling

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveNav(id);
        setToggle(false);
    };

    return (
        <header className="header">
            <nav className="nav container">
                <NavLink to="/" className="nav__logo"> <strong>Montaser Mballo</strong></NavLink>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {navItems.map(item => (
                            <li className={item.className} key={item.id}>
                                <a 
                                    href={`#${item.id}`} 
                                    onClick={() => handleScrollToSection(item.id)} 
                                    className={`nav__link ${activeNav === item.id ? "active-link" : ""}`}>
                                    {item.icon} {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <HiX className="nav__close-icon" onClick={() => setToggle(!toggle)} />
                </div>
                <div className="nav__toggle-icon" onClick={() => setToggle(!toggle)}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header>
    );
}

export default Header;
