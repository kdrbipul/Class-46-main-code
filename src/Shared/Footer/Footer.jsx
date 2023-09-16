import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-primary'>
            <div className='container footer_container'>
                <div className="icon">
                        <span><i className='fs-2 text-white'><BsFacebook /></i></span>
                        <span><i className='fs-2 text-white'><AiFillTwitterCircle /></i></span>
                        <span><i className='fs-2 text-white'><BiLogoGmail /></i></span>
                        <span><i className='fs-2 text-white'><BsGithub /></i></span>
                </div>
                <div className="link">
                    <ul><li><NavLink to='/home' className='text-white'>Home</NavLink></li></ul>
                    <ul><li><NavLink to='/login' className='text-white'>Login</NavLink></li></ul>
                    <ul><li><NavLink to='/registration' className='text-white'>Registration</NavLink></li></ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;