import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import '../style/main.scss';

import Layout from "../components/layout"
import SEO from "../components/SEO"; // eslint-disable-line
import { graphql } from "gatsby";

const embroiderySection = (photos) => {
    return (
        <li className="projects-page_list-item embroidery">
            <div className="projects-page_list-item_title embroidery_title">Embroidery</div>
            <ul className="projects-page_list-item_list embroidery_list">
                {photos.map((photo, i) => {
                    return (
                        <li className="projects-page_list-item_list-item embroidery_list-item" key={`embroidery-${i}`}>
                            <GatsbyImage alt="" className="embroidery_list-item_image" image={getImage(photo)}/>
                        </li>
                    )
                })}
            </ul>
        </li>
    )
}

const webDesignSection =  () => {
    return (
        <li className="projects-page_list-item website">
            <div className="projects-page_list-item_title website_title">Web Developer & Designer</div>
            <ul className="projects-page_list-item_list website_list">
                <li className="projects-page_list-item_list-item website_list-item">
                    <embed src="https://westendlyric.com" />
                    <a className="projects-page_list-item_list-item_description website_list-item_description text-link" href="http://www.westendlyric.com" target="_blank" rel="noreferrer">West End Lyric</a>
                </li>
                <li className="projects-page_list-item_list-item website_list-item">
                    <embed src="https://lessonswithlarisa.com" />
                    <a className="projects-page_list-item_list-item_description website_list-item_description text-link" href="https://www.lessonswithlarisa.com" target="_blank" rel="noreferrer">Lessons with Larisa</a>
                </li>
            </ul>
        </li>
    )
}

const digitalMediaSection = () => {
    return (
        <li className="projects-page_list-item digital-media">
            <div className="projects-page_list-item_title digital-media_title">Digital Media</div>
            <ul className="projects-page_list-item_list digital-media_list">
                <li className="projects-page_list-item_list-item digital-media_list-item">
                    <iframe 
                        src="https://www.youtube.com/embed/tWrpSYMKR0c?si=5F5Q8YUO8EOKbbJk" 
                        className="youtube-video"
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe>
                    <div className="projects-page_list-item_list-item_description digital-media_list-item_description">Producer, Video Engineer, Audio Engineer</div>
                </li>
            </ul>
        </li>
    )
}

const graphicDesignSection = (photos) => {
    return (
        <li className="projects-page_list-item graphic-design">
            <div className="projects-page_list-item_title graphic-design_title">Graphic Design</div>
            <ul className="projects-page_list-item_list graphic-design_list">
                {photos.map((photo, i) => {
                    return (
                        <li className="projects-page_list-item_list-item graphic-design_list-item" key={`graphic-design-${i}`}>
                            <GatsbyImage alt="" className="graphic-design_list-item_image" image={getImage(photo)}/>
                        </li>
                    )
                })}
            </ul>
        </li>
    )
}

const ProjectsPage = ({ data }) => {
    return (
        <Layout>
            <main className="projects-page">
                <div className="projects-page_background">
                    <StaticImage alt="" className="projects-page_flowers" src="../images/flowers/projects-background.png" placeholder="none" />
                </div>
                <div className="projects-page_foreground">
                    <div className="projects-page_title">Projects</div>
                    <div className="projects-page_subtitle">An sample of several creative projects by Larisa</div>
                    <ul className="projects-page_list">
                        {webDesignSection()}
                        {digitalMediaSection()}
                        {graphicDesignSection(data.allContentfulGraphicDesign.nodes[0].photos)}
                        {embroiderySection(data.allContentfulEmbroidery.nodes[0].photos)}                    
                    </ul>
                </div>
                
            </main>
        </Layout>
    )
}

export default ProjectsPage;

export const Head = () => <SEO title="Larisa Bainton Hernandez | Projects"/> // eslint-disable-line

export const query = graphql`
query ProjectsPageQuery {
    allContentfulEmbroidery {
        nodes {
            photos {
                gatsbyImageData
            }
        }
    }
    allContentfulGraphicDesign {
        nodes {
            photos {
                gatsbyImageData
            }
        }
    }
}
`