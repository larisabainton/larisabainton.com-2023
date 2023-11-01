import React from "react";

const ContactForm = () => {
    return (
        <div className="contact-form">
            <form name="contact form" method="post" action="https://formspree.io/f/larisabainton@gmail.com">
                <input type="text" aria-label="name" name="name" id="name" placeholder="Name" />
                <input type="email" aria-label="email" name="email" id="email" placeholder="Email" />
                <input type="text" aria-label="subject" name="subject" id="subject" placeholder="Subject" />
                <textarea aria-label="message" name="message" id="message" rows="5" placeholder="Type your message here..."/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;