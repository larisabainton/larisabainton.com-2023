import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import '../style/main.scss';

import Layout from "../components/layout"
import Calendar from "../components/calendar";
import ContactForm from "../components/contactForm";

const coverSection = (
    <div className="index_cover">
        <div className="index_cover_background">
            <StaticImage className="index_cover_photo" src="../images/cover.jpg" alt="Larisa smiling and sitting on a bench" />
        </div>
        <div className="index_cover_foreground">
            <StaticImage className="index_cover_flowers_bottom" src="../images/flowers/cover_bottom-left.png" alt="" />
        </div>
    </div>
)

const aboutSection = (
    <div className="index_about">
        <div className="index_about_image">
            <StaticImage src="../images/about.png" alt="Larisa standing in front of a tree"/>
        </div>
        <div className="index_about_text">
            <div className="index_about_title">About</div>
            <div className="index_about_blurb">Lorem Ipsum</div>
        </div>
    </div>
);

const calendarSection = (
    <div className="index_calendar">
        <div className="index_calendar_title">Events</div>
        <Calendar sourcePage="index" />
    </div>
);

const projectsSection = (
    <div className="index_projects">
        <div className="index_projects_title">Projects</div>
        <div className="index_projects_text">Click <a href='/projects'>here</a> for a full list of Larisa's creative projects.</div>
    </div>
);

const contactSection = (
    <div className="index_contact">
        <div className="index_contact_title">Contact</div>
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
