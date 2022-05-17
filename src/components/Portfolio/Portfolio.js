import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'This is a portfolio item title',
        github: '#',
        demo: '#',
    },
    {
        id: 1,
        image: IMG1,
        title: 'This is a portfolio item title',
        github: '#',
        demo: '#',
    },
    {
        id: 1,
        image: IMG1,
        title: 'This is a portfolio item title',
        github: '#',
        demo: '#',
    },
]

export default function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My recent project</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio__container'>
                {data.map((item, index) => {
                    return <article className='portfolio__item' key={index}>
                        <div className='portfolio__item-img'>
                            <img src={item.image} alt='portfolio_img' />
                        </div>
                        <h3>{item.title}</h3>
                        <div className='portfolio__item-cta'>
                            <a href={item.github} className='btn'>Github</a>
                            <a href={item.demo} className='btn btn-primary'>Live Demo</a>
                        </div>
                    </article>
                })}
            </div>
        </section>
    )
}
