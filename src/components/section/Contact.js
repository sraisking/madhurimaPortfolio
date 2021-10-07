import React, { useRef, useState } from 'react'
import { contact, section5Title, social } from '../../profile'
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [msgFlag, setMsgFlag] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sua0td8', 'template_r47u27q', form.current, 'user_7DmM78AVBasYC88s8RWXG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setMsgFlag(true)
    };
    return (
        <div className="parallax">
            <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                <>
                    <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head">{section5Title}</h1>
                    </div>
                </>
                <div className="container">
                    <div className="git-cont row">
                        <div className="col-12 col-sm-6 half">
                            <form ref={form} onSubmit={sendEmail}>
                                <input type="text" id="fname" name="username" placeholder="Your name" required></input>
                                <input type="email" id="email" name="Email" placeholder="Email Address" required></input>
                                <textarea id="msg" name="message" placeholder="Message" required></textarea>
                                <button style={{ cursor: 'pointer' }} type="submit">Send Message</button>
                            </form>
                        </div>
                        <div className="col-12 col-sm-6 half">
                            <p className="lead">
                                {contact.pitch}
                            </p>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="inline-block">
                                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                                    {social.youtube && <a title="Visit Youtube channel" rel="noopener noreferrer" target="_blank" href={social.youtube}><i className="fab fa-youtube"></i></a>}<br />
                                </div>
                            </div>
                            {msgFlag && <p className="lead">
                                Message Sent ! Will get back to you soon
                            </p>}
                        </div>
                    </div>
                </div>
            </div>
            <p id="not-dark" className="Copy">2020 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p>
        </div>
    )

}

export default Contact
