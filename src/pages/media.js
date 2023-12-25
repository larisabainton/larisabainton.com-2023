import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import '../style/main.scss';

import Layout from "../components/layout"
import SEO from "../components/SEO"; // eslint-disable-line
import { graphql } from "gatsby";

const MediaPage = ({ data }) => {
    const photoData = data.allContentfulProductionPhoto.nodes;
    const videoData = data.allContentfulPerformanceVideo.nodes;
    
    return (
        <Layout>
            <main className="media-page page">
                <div className="media-page_videos">
                    <div className="media-page_title page_title">Videos</div>
                    <ul className="media-page_list">
                        {videoData.map(({ name, show, composer, description, videoLink}, i) => {
                            return (
                                <li className="media-page_list-item" key={`video-${i}`}>
                                    <iframe 
                                        src={videoLink}
                                        className="youtube-video"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowFullScreen>
                                    </iframe>
                                    <div className="media-page_list-item_title">{`${name}, ${show} (${composer})`}</div>
                                    <div className="media-page_list-item_description">{description}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                
                <div className="media-page_photos">
                    <div className="media-page_title page_title">Photos</div>
                    <ul className="media-page_list production-photos">
                        {photoData.map(({ name, photos, id }) => {
                            return photos.map((photo, i) => {
                                return (
                                    <li className="media-page_list-item production-photos_list-item" key={`production-photo-${id}-${i}`}>
                                        <GatsbyImage alt="" className="production-photo" image={getImage(photo)}/>
                                        <div className="production-photo--hover">
                                            <div className="production-photo--hover_text">{name}</div>
                                        </div>
                                    </li>
                                )
                            })
                        })}
                    </ul>
                </div>
            </main>
        </Layout>
    )
}

export default MediaPage;

export const Head = () => <SEO title="Larisa Bainton | Media" /> // eslint-disable-line

export const query = graphql`
query MediaPageQuery {
    allContentfulProductionPhoto(sort: {date: DESC}) {
        nodes {
            name
            id
            photos {
                gatsbyImageData
            }
        }
    }
    allContentfulPerformanceVideo {
        nodes {
            name
            show
            composer
            description
            videoLink
        }
    }
}
`