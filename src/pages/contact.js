import React from "react";
import Layout from "../components/layout";

import ContactForm from "../components/contactForm";

const ContactPage = () => {
    return (
        <Layout>
            <main className="contact-page">
                <ContactForm />
            </main>
        </Layout>
    )
}

export default ContactPage;