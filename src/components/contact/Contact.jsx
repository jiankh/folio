import './contact.scss'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'template_8649fbq', contactForm, 'UUZ2U3JvBit2rQvCl')
            .then(function () {
                messageStatusContainer.textContent = "Message sent!"
                contactForm.reset()
            }, function (error) {
                messageStatusContainer.textContent = `Error: ${error}`
                contactForm.reset()
            })
    };

    return (
        <div class="contact-container section" id="contact">
            <h2 class="subtitle">Contact Me</h2>
            <div class="contact-wrapper">
                <div class="contact-message">

                    <form ref={form} onSubmit={sendEmail} class="contact-form" >
                        <input type="text" name="name" id="name" placeholder=" Name" required />
                        <input type="email" name="email" id="email" placeholder=" Email" required />
                        <textarea rows="10" cols="60" name="message" id="message" placeholder=" Message . . ." required></textarea>
                        <button type="submit" class="send-message-btn">Send</button>
                        <div class="message-status"></div>
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