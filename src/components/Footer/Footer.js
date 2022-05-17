import React from 'react'
import './footer.css'
import { AiFillGithub } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { SiZalo } from 'react-icons/si'

export default function Footer() {
    return (
        <footer>
            <a href='#' className='footer__logo'>Ngoc's Portfolio</a>
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
            </ul>
            <div className='footer__socials'>
                <a href='https://www.facebook.com/profile.php?id=100005378958900' target="_blank"><BsFacebook /></a>
                <a href='https://github.com/letuyetngoc'><AiFillGithub /></a>
                <a href='https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F' target="_blank"><SiZalo /></a>
            </div>
        </footer>
    )
}
