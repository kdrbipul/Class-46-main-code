import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import  './Home.css';

const Home = () => {
    return (
        <>
        <div className='bg-secondary text-white p-3'>
            <div class="container">
                <div class="row row-cols-3">
                    <div class="col-2 icons d-flex flex-column">
                        <span><i className='fs-2 text-white'><BsFacebook /></i></span>
                        <span><i className='fs-2 text-white'><AiFillTwitterCircle /></i></span>
                        <span><i className='fs-2 text-white'><BiLogoGmail /></i></span>
                        <span><i className='fs-2 text-white'><BsGithub /></i></span>
                    </div>
                    <div class="col-6 text-left">
                        <h1>Hi! I'm Abdul Kader</h1>
                        <h3>Frontend Developer</h3>
                        <p className='text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, exercitationem fugit! Non quibusdam autem recusandae at fuga voluptas dolorem. Autem?</p>
                    </div>
                    <div class="col-4">Column</div>
                </div>
            </div>
        </div>
            
        </>
        
    );
};

export default Home;