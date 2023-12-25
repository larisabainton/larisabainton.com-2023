import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import '../style/main.scss';

import Layout from "../components/layout"
import Calendar from "../components/calendar";
import SEO from "../components/SEO";

import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ProjectsSection from "../components/ProjectsSection";

const coverSection = (
    <div className="index_cover">
        <div className="index_cover_background">
            <StaticImage className="index_cover_photo" src="../images/cover.jpg" alt="Larisa standing in front of a tree" />
        </div>
        <div className="index_cover_foreground">
            <StaticImage style={{position: "absolute"}} placeholder="none" className="index_cover_flowers_top" src="../images/flowers/cover_top-right.png" alt="" />
            <StaticImage style={{position: "absolute"}} placeholder="none" className="index_cover_flowers_bottom" src="../images/flowers/cover_bottom-left.png" alt="" />
        </div>
    </div>
)

const calendarSection = (
    <div className="index_calendar">
        <div className="index_calendar_title">Events</div>
        <Calendar sourcePage="index" />
    </div>
);

const IndexPage = () => {
  return (
    <Layout>
        <main className="index">
            {coverSection}
            <AboutSection />
            {calendarSection}
            <ProjectsSection />
            <ContactSection />
        </main>
    </Layout>
    )
}

export default IndexPage

export const Head = () => <SEO />
