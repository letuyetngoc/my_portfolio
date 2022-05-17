import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { SiZalo } from 'react-icons/si'

export default function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href='https://www.facebook.com/' target="_blank"><BsFacebook /></a>
            <a href='https://github.com/letuyetngoc' target="_blank"><AiFillGithub /></a>
            <a href='https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F' target="_blank"><SiZalo /></a>
        </div>
    )
}
