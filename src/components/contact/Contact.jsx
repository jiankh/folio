import './contact.scss'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef()
    const [messageStatus, setMessageStatus] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        // const {name, email, message} = e.target.elements
        // console.log({name,email,message})

        emailjs.sendForm('contact_service', 'template_8649fbq', e.target, 'UUZ2U3JvBit2rQvCl')
            .then(() => 
                setMessageStatus('Message Sent!'), 
                (error) => setMessageStatus(`Error: ${error.text}`)
            )
            .finally(() => form.current.reset())
    };

    return (
        <div id="contact" className="contact-container section">
            <h2 className="subtitle">Contact Me</h2>
            <div class="contact-wrapper">
                <div class="contact-message">

                    <form ref={form} onSubmit={sendEmail} class="contact-form" >
                        <input type="text" name="name" id="name" placeholder="  Name" required />
                        <input type="email" name="email" id="email" placeholder="  Email" required />
                        <textarea rows="10" cols="60" name="message" id="message" placeholder=" Message " required></textarea>
                        <button type="submit" class="send-message-btn">Send</button>
                        <div class="message-status">{messageStatus}</div>
                    </form>

                </div>
                <div class="contact-info">

                    <a href="https://www.linkedin.com/in/jchuangz/">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
                        LinkedIn
                    </a>

                    <a href="https://github.com/jiankh">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                        GitHub
                    </a>


                </div>
            </div>

        </div>

        

    )
}

export default Contact
