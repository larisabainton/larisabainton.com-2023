import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import '../style/main.scss';

import Layout from "../components/layout"
import Calendar from "../components/calendar";
import ContactForm from "../components/contactForm";

const coverSection = (
    <div className="index_cover">
        <StaticImage className="index_cover_photo" src="../images/cover.jpg" alt="Larisa smiling and sitting on a bench" />
         <div className="index_cover_text"></div>
    </div>
)

const aboutSection = (
    <div className="index_about">
        <div className="index_about_title">About</div>
        <div className="index_about_text">Lorem Ipsum</div>
    </div>
);

const calendarSection = (
    <div className="index_calendar">
        <div className="index_calendar_title">Events</div>
        <Calendar sourcePage="index" />
    </div>
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
