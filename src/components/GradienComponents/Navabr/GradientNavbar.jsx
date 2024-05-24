import { NavLink } from 'react-router-dom';
import './GradientNavbar.css';
import { useState } from 'react';
import IMG from '../../../assets/Logo.png'


const GradientNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className={`nav-main ${isOpen ? 'open' : ''}`}>
                <div className='img'>
                    <img className='img' src={IMG} alt="" />
                </div>
                <div className="nav-content">
                    <NavLink to="/" className="tab-link">
                        PALLETS
                    </NavLink>
                    <NavLink to="/randomGenerate" className="tab-link">
                        RANDOM
                    </NavLink>
                    <NavLink to="/_2ColorAtTime" className="tab-link">
                        2 COLOR
                    </NavLink>
                    <NavLink to="/_3ColorAtTime" className="tab-link">
                        3 COLOR
                    </NavLink>
                </div>

                <div className="hamburger-menu" onClick={toggleNavbar}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>
        </div>
    );
};

export default GradientNavbar;
