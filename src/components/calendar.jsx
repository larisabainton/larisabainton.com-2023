import React from "react";

const pagePath = (name, id, eventLinks) => {
    const page = eventLinks.find(page => page.pageContext.id === id);

    return <a className="title-link" href={page.path}>{name}</a>
}

const formatDate = (dateString) => {
    const date = new Date(dateString);

    const dateOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
    }

    const timeOptions = {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
    }

    return (
        <div className="calendar_list-item_performances_date">
            <div className="calendar_list-item_performances_date_mdy">{date.toLocaleDateString("en-US", dateOptions)}</div>
            <div className="calendar_list-item_performances_date_time">{date.toLocaleTimeString("en-US", timeOptions)}</div>
        </div>
    )
}

const Calendar = ({ sourcePage, eventsList, eventLinks }) => {
    return (
        <ul className={sourcePage + "_events_calendar events_calendar"}>
            {eventsList.map((eventData) => {
                const { name, id, role, company, companyLink, performances, createPage } = eventData;
                const title = createPage ? pagePath(name, id, eventLinks) : name;

                return performances && performances.map(({ venue, venueLink, date}, i) => {
                    return (
                        <li className={sourcePage + "_calendar_list-item calendar_list-item"} key={i}>
                            <div className="calendar_list-item_background">
                            </div>
                            <div className="calendar_list-item_foreground">
                                {formatDate(date)}
                                <div className="calendar_list-item_performances_show-info">
                                    <div className="calendar_list-item_show-info_name">{title}</div>
                                    <div className="calendar_list-item_show-info_role">{role}</div>
                                    <div className="calendar_list-item_company">
                                        <a className="text-link" href={companyLink}>{company}</a>
                                    </div>
                                </div>
                                <div className="calendar_list-item_performances_venue">
                                    <a className="text-link" href={venueLink}>{venue}</a>
                                </div>
                            </div>
                        </li>
                    )
                }) 
            })}
        </ul>
    )
}

export default Calendar;