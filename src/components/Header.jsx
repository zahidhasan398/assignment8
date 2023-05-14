import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [isOpen,setIsOpen]=useState(false);
    return (
        <nav className='flex md:justify-around md:items-center md:flex-row flex-col justify-start'>
            <button className='md:hidden block text-2xl' onClick={()=>setIsOpen(!isOpen)}>{isOpen ? <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>:<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}</button>
            <div className='text-3xl font-bold'>
                proffetional app 
            </div>
            <ul className={`flex md:flex-row flex-col gap-5 text-xl font-semibold relative duration-200 md:static ${isOpen ?'left-5 top-0':'-left-36 top-0'}`}>
                <li><Link to="/">home</Link></li>
                <li><Link to="/details">job details</Link></li>
                <li><Link to="/static">Statistics</Link></li>
                <li><Link to="/apply">Applied Jobs</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
            <div><button className={`btn btn-primary relative transition-all md:static ${isOpen ? 'left-5':'-left-36'}`}>Star Applying</button></div>
        </nav>
    );
};

export default Header;