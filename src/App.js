import React from 'react'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Portfolio from './components/Portfolio/Portfolio'
import Service from './components/Services/Service'
import Testimonials from './components/Testimonials/Testimonials'
import About from './components/About/About'

export default function App() {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Service />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}
