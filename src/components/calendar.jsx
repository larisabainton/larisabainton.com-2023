import React from "react";

const eventsList = [
    {
        name: "Il Giuoco del Quadriglio",
        role: "Camilla",
        company: "West End Lyric",
        companyLink: "www.westendlyric.com",
        details: [
            {
                location: "Somerville Music Spaces",
                locationLink: "https://www.somervillemusicspaces.com/",
                date: new Date("November 17, 2023 19:00:00")
            }, {
                location: "The Boston Synagogue",
                locationLink: "https://bostonsynagogue.org/",
                date: new Date("November 19, 2023 15:00:00")
            }
        ]
    },
    {
        name: "Women of Tin Pan Alley Cabaret",
        company: "West End Lyric",
        companyLink: "www.westendlyric.com",
        details: [
            {
                location: "The Boston Synagogue",
                locationLink: "https://bostonsynagogue.org/",
                date: new Date("December 17, 2023 15:00:00")
            }
        ]
    },
    {
        name: "L'amico Fritz",
        role: "Caterina",
        company: "West End Lyric",
        companyLink: "www.westendlyric.com",
        details: [
            {
                location: "Somerville Music Spaces",
                locationLink: "https://www.somervillemusicspaces.com/",
                date: new Date("April 5, 2024 19:00:00")
            }, {
                location: "The Boston Synagogue",
                locationLink: "https://bostonsynagogue.org/",
                date: new Date("April 7, 2024 15:00:00")
            }

        ]
    }
]

const formatDate = (date) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
    }
    return date.toLocaleDateString("en-US", options);
}

const getEventListItems = (sourcePage) => {
    return eventsList.map((eventData) => {
        const { name, role, company, companyLink, details } = eventData;

        return details.map(({ location, locationLink, date}, i) => {
            return (
                <li className={sourcePage + "_calendar_list-item calendar_list-item"} key={i}>
                    <div className="calendar_list-item_name">{name}</div>
                    <div className="calendar_list-item_role">{role}</div>
                    <div className="calendar_list-item_company">
                        <a href={companyLink}>{company}</a>
                    </div>
                    <div className="calendar_list-item_details_location">
                        <a href={locationLink}>{location}</a>
                    </div>
                    <div className="calendar_list-item_details_date">{formatDate(date)}</div>
                </li>
            )
        }) 
    }
)}

const Calendar = ({ sourcePage }) => {
    return (
        <ul className={sourcePage + "_events_calendar events_calendar"}>
            {getEventListItems(sourcePage)}
        </ul>
    )
}

export default Calendar;