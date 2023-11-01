import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import ContactForm from "../components/contactForm";

const ContactPage = () => {
    return (
        <Layout>
            <main className="contact-page">
                <div className="contact-page_background">
                    <StaticImage alt="" src="../images/flowers/contact.png" placeholder="none" className="contact-page_image"/>
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

export const Head = () => <title>Larisa Bainton | Contact</title>