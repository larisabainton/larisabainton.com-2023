import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";

import ContactForm from "../components/contactForm";


const ContactSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
    <div className="index_contact">
        <div className="index_contact_background" ref={ref}>
            <StaticImage alt="" placeholder="none" src="../images/flowers/contact.png" className={`index_contact_image index_contact_image--${inView ? 'is-visible' : 'not-visible'}`}/>
        </div>
        <div className="index_contact_foreground">
            <div className="index_contact_title">Contact</div>
            <ContactForm />
        </div>
    </div>
)};

export default ContactSection;