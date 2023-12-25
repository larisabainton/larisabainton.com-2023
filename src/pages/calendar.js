import React from "react"
import { graphql } from "gatsby";
import '../style/main.scss';

import Layout from "../components/layout"
import Calendar from "../components/calendar";
import SEO from "../components/SEO"; // eslint-disable-line

const CalendarPage = ({ data }) => {
    const upcomingEvents = [];
    const pastEvents = [];

    data.allContentfulEvent.nodes.forEach(event => {
        event.performances.forEach(({ date }) => {
            const isUpcomingEvent = (new Date(date).getTime() - new Date().getTime() > 0)

            if (isUpcomingEvent) {
                const eventIsInArray = upcomingEvents.find(upcomingEvent => upcomingEvent.id === event.id)

                if (!eventIsInArray) {
                    upcomingEvents.push(event);
                }
            } else {
                const eventIsInArray = pastEvents.find(upcomingEvent => upcomingEvent.id === event.id)

                if (!eventIsInArray) {
                    pastEvents.push(event)
                }
            }
        })
    })

    return (
        <Layout>
            <main className="calendar-page">
                <div>
                    <div className="calendar-page_calendar_title">Upcoming Events</div>
                    <Calendar sourcePage="calendar-page" eventsList={upcomingEvents}/>
                </div>
                <div>
                    <div className="calendar-page_calendar_title">Past Events</div>
                    <Calendar sourcePage="calendar-page" eventsList={pastEvents}/>
                </div>
            </main>
        </Layout>
    )
}

export default CalendarPage;

export const Head = () => <SEO title= "Larisa Bainton | Calendar" /> // eslint-disable-line

export const query = graphql`
    query CalendarQuery {
        allContentfulEvent(sort: {performances: {date: ASC}}) {
            nodes {
                company
                companyLink
                name
                id
                role
                performances {
                    date
                    venue
                    venueLink
                    id
                }
            }
        }
    }`