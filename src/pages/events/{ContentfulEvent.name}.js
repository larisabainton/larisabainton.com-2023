
import React from "react";
import '../../style/main.scss';
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const getCoverPhoto = coverPhoto => {
    return coverPhoto && <GatsbyImage className="cover-photo" image= {getImage(coverPhoto)} alt=""/>
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
};



const Event = ({ data }) => {
    const event = data.contentfulEvent;

    const { name, performances, description, coverPhoto } = event;

    return (
        <Layout>
            <main className="event-page">
                {getCoverPhoto(coverPhoto)}
                <div className="title">{name}</div>
                <div className="event-page_performances">
                    <ul className="performance-list">
                        {performances.map(({ date, venue, venueLink }, i) => {
                            return (
                                <li className="performance-list-item" key={`performance-${i}`}>
                                    <div className="performance-list-item_date">{formatDate(date)}</div>
                                    <div className="performance-list-item_location"><a className="text-link" href={venueLink}>{venue}</a></div>
                                </li>
                        )})}
                    </ul>
                </div>
                <div className="event-page_description">{description && renderRichText(description)}</div>
            </main>
        </Layout>
    )
}

export default Event;

export const Head = () => <SEO />

export const query = graphql`
    query ($id: String!) {
        contentfulEvent(id: {eq: $id}) {
            name
            description {
                raw
            }
            coverPhoto {
                gatsbyImageData
            }
            performances {
                date
                venue
                venueLink
            }
        }
    }
`