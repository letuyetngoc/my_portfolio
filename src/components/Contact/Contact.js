import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'

export default function Contact() {
    return (
        <section id='contact' >
            <h5>Get in touch</h5>
            <h2>My Contact</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineMailOutline className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>letuyetngocksh@gmail.com</h5>
                        <a href="mailto:letuyetngocksh@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messager</h4>
                        <h5>Lê Tuyết Ngọc</h5>
                        <a href="https://www.facebook.com/profile.php?id=100005378958900" target='_blank'>Send a message</a>
                    </article>
                </div>
                <form>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='mail' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}
