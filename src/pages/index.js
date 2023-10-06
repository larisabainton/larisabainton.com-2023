import * as React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm";

const coverSection = (
    <div className="index_cover">
        <div className="index_cover_photo"></div>
         <div className="index_cover_text"></div>
    </div>
)

const aboutSection = (
    <div className="index_about">
        <div className="index_about_headshot"></div>
        <div className="index_about_text"></div>
    </div>
);

const calendarSection = (
    <div className="index_calendar"></div>
);

const projectsSection = (
    <div className="index_projects"></div>
);

const contactSection = (
    <div className="index_contact">
        <ContactForm />
    </div>
);

const IndexPage = () => {
  return (
    <Layout>
        <main className="index">
            {coverSection}
            {aboutSection}
            {calendarSection}
            {projectsSection}
            {contactSection}
        </main>
    </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Larisa Bainton</title>
