import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import ContactForm from "../components/contactForm";

const ContactPage = () => {
    return (
        <Layout>
            <main className="contact-page">
                <div className="contact-page_background">
                    <StaticImage src="../images/flowers/contact.png" className="contact-page_image"/>
                </div>
                <div className="contact-page_foreground">
                    <div className="contact-page_title">Contact</div>
                    <ContactForm />
                </div>
            </main>
        </Layout>
    )
}

export default ContactPage;