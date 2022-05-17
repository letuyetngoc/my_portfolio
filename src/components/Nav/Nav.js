import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

export default function Nav() {
    let classActive
    const [active, setActive] = useState('#')

    return (
        <nav>
            <a href='#' onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href='#about' onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href='#experience' onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><BsBook /></a>
            {/* <a href='#services' onClick={() => setActive('#services')} className={active === '#services' ? 'active' : ''}><RiServiceLine /></a> */}
            <a href='#contact' onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </nav>
    )
}
