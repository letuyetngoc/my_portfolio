import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { FiUsers } from 'react-icons/fi'

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
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Project</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>
                    <p>If your project grows in size, this option is available. This method has the trade-off that it takes a long time to install the package. Suitable for MeteorJS, Gatsbyjs etc. If your project grows in size, this option is available. This method has the trade-off that it takes a long time to install the package. Suitable for MeteorJS, Gatsbyjs etc.</p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>

            </div>
        </section>
    )
}
