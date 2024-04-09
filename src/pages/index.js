import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import '../style/main.scss';

import Layout from "../components/layout"
import Calendar from "../components/calendar";
import SEO from "../components/SEO"; // eslint-disable-line

import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ProjectsSection from "../components/ProjectsSection";
import { graphql } from "gatsby";

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


const IndexPage = ({ data }) => {
    const upcomingEvents = []
    
    const eventLinks = data.allSitePage.nodes;
    data.allContentfulEvent.nodes.forEach(event => {
        event.performances.forEach(({ date }) => {
            const isUpcomingEvent = (new Date(date).getTime() - new Date().getTime() > 0)
            const eventIsInArray = upcomingEvents.find(upcomingEvent => upcomingEvent.id === event.id)

            if (isUpcomingEvent & !eventIsInArray) {
                upcomingEvents.push(event);
            }
        })
    })


    return (
        <Layout>
            <main className="index">
                {coverSection}
                <AboutSection />
                <div className="index_calendar">
                    <div className="index_calendar_title">Upcoming Events</div>
                    <Calendar sourcePage="index" eventsList={upcomingEvents} eventLinks={eventLinks}/>
                </div>
                <ProjectsSection />
                <ContactSection />
            </main>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <SEO /> // eslint-disable-line

export const query = graphql`
    query IndexQuery {
        allContentfulEvent(sort: {performances: {date: ASC}}) {
            nodes {
                company
                companyLink
                id
                name
                role
                createPage
                performances {
                    date
                    venue
                    venueLink
                    id
                }
            }
        }
        allSitePage(filter: {path: {regex: "/events/"}}) {
            nodes {
                path
                pageContext
            }
        }
    }`