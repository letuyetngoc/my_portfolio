import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
// import { FaAward } from 'react-icons/fa'
// import { VscFolderLibrary } from 'react-icons/vsc'
// import { FiUsers } from 'react-icons/fi'
import LogoBK from '../../assets/logoBK.png'
import LogoCybersoft from '../../assets/cybersoft.png'

export default function About() {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-img'>
                        <img src={ME} alt='about me' />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <img src={LogoBK} alt='about_me' className='about__logo-BK' />
                            <h5>Ho Chi Minh City University of Technology</h5>
                            <small>Chemical Engineering</small>
                        </article>
                        <article className='about__card'>
                            <img src={LogoCybersoft} alt='about_me' className='about__logo-Cyber' />
                            <h5>Cybersoft Academy</h5>
                            <small>FrontEnd Web</small>
                        </article>
                    </div>
                    <p>I want to be a Front-end Developer. I love create polished and meaningful user experiences. I'm ready to collaborate with new opportunities and challenges.</p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}
