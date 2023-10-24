import React from "react";
import Layout from "../components/layout";

import Calendar from "../components/calendar";

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