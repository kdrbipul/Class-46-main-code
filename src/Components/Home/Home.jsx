import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { CgDatabase } from 'react-icons/cg';
import { FiCode } from 'react-icons/fi';
import { MdDns } from 'react-icons/md';
import { MdOutlineDesignServices } from 'react-icons/md';
import Picture from '../../assets/kader.jpg'
import  './Home.css';


const Home = () => {
    return (
        <>
        <div className='bg-secondary text-white p-3 my-5'>
            <div className="container">
                <div className="row row-cols-3">
                    <div className="col-2 icons d-flex flex-column">
                        <span><i className='fs-2 text-white'><BsFacebook /></i></span>
                        <span><i className='fs-2 text-white'><AiFillTwitterCircle /></i></span>
                        <span><i className='fs-2 text-white'><BiLogoGmail /></i></span>
                        <span><i className='fs-2 text-white'><BsGithub /></i></span>
                    </div>
                    <div className="col-6 text-left">
                        <h1>Hi! I'm Abdul Kader</h1>
                        <h3>Frontend Developer</h3>
                        <p className='text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, exercitationem fugit! Non quibusdam autem recusandae at fuga voluptas dolorem. Autem?</p>
                    </div>
                    <div className="col-4">
                        <div className="profile-area">
                            <div className="outer-circle">
                                <span className="material-icons-sharp"><MdOutlineDesignServices /></span>
                                <span className="material-icons-sharp"><MdDns /></span>
                                <span className="material-icons-sharp"><FiCode /></span>
                                <span className="material-icons-sharp"><CgDatabase /></span>
                            </div>
                            <div class="inner-circle">
                                <img src={Picture} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
        
    );
};

export default Home;