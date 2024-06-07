import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './GradientNavbar.css';
import IMG from '../../../assets/Logo.png';

const GradientNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r z-40 fixed w-screen from-blue-500 to-teal-400 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="h-8 w-8" src={IMG} alt="Logo" />
            <h1 className="ml-3 text-xl font-bold">CSS Blend Master</h1>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={!isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className="nav-link" activeClassName="active-link">PALLETS</NavLink>
              <NavLink to="/randomGenerate" className="nav-link" activeClassName="active-link">RANDOM</NavLink>
              <NavLink to="/_2ColorAtTime" className="nav-link" activeClassName="active-link">2 COLOR</NavLink>
              <NavLink to="/_3ColorAtTime" className="nav-link" activeClassName="active-link">3 COLOR</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink to="/" className="nav-link" activeClassName="active-link" onClick={toggleNavbar}>PALLETS</NavLink>
          <NavLink to="/randomGenerate" className="nav-link" activeClassName="active-link" onClick={toggleNavbar}>RANDOM</NavLink>
          <NavLink to="/_2ColorAtTime" className="nav-link" activeClassName="active-link" onClick={toggleNavbar}>2 COLOR</NavLink>
          <NavLink to="/_3ColorAtTime" className="nav-link" activeClassName="active-link" onClick={toggleNavbar}>3 COLOR</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default GradientNavbar;
