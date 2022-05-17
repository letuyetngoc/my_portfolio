import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

export default function Experience() {
    return (
        <section id='experience'>
            <h5>What Skill I Have</h5>
            <h2>My Skills</h2>
            <div className='container experience_container'>
                <div className='experience__frontend'>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <h4>HTML</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <h4>ReactJS</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <h4>CSS</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <h4>Redux</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <h4>JavaScript</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <h4>Tailwind</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon' />
                            <h4>Boostrap</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
