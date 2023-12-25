import React from "react"
import '../style/main.scss';

import Layout from "../components/layout"
import Calendar from "../components/calendar";
import SEO from "../components/SEO";

const CalendarPage = () => {
    return (
        <Layout>
            <main className="calendar-page">
                <div className="calendar-page_calendar_title">Events</div>
                <Calendar sourcePage="calendar-page"/>
            </main>
        </Layout>
    )
}

export default CalendarPage;

export const Head = () => <SEO title= "Larisa Bainton | Calendar" />