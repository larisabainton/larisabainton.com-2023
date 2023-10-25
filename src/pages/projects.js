import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const embroiderySection = () => {
    return (
        <li className="projects-page_list-item embroidery">
            <div className="projects-page_list-item_title embroidery_title">Embroidery</div>
            <ul className="projects-page_list-item_list embroidery_list">
                <li className="projects-page_list-item_list-item embroidery_list-item">
                    <StaticImage src="../images/embroidery/1.png" className="embroidery_list-item_image" />
                </li>
                <li className="projects-page_list-item_list-item embroidery_list-item">
                    <StaticImage src="../images/embroidery/2.png" className="embroidery_list-item_image" />
                </li>
                <li className="projects-page_list-item_list-item embroidery_list-item">
                    <StaticImage src="../images/embroidery/3.png" className="embroidery_list-item_image" />
                </li>
                <li className="projects-page_list-item_list-item embroidery_list-item">
                    <StaticImage src="../images/embroidery/4.png" className="embroidery_list-item_image" />
                </li>
                <li className="projects-page_list-item_list-item embroidery_list-item">
                    <StaticImage src="../images/embroidery/5.png" className="embroidery_list-item_image" />
                </li>
                <li className="projects-page_list-item_list-item embroidery_list-item">
                    <StaticImage src="../images/embroidery/6.png" className="embroidery_list-item_image" />
                </li>
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
                    <embed src="http://westendlyric.com" width='500px' height= '300px' />
                    <div className="projects-page_list-item_list-item_description website_list-item_description">West End Lyric</div>
                </li>
                <li className="projects-page_list-item_list-item website_list-item">
                    <embed src="http://lessonswithlarisa.com" width='500px' height= '300px' />
                    <div className="projects-page_list-item_list-item_description website_list-item_description">Lessons with Larisa</div>
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
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/tWrpSYMKR0c?si=5F5Q8YUO8EOKbbJk" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                    <div className="projects-page_list-item_list-item_description digital-media_list-item_description">Producer, Video Engineer, Audio Engineer</div>
                </li>
            </ul>
        </li>
    )
}

const ProjectsPage = () => {
    return (
        <Layout>
            <main className="projects-page">
                <div className="projects-page_background">
                    <StaticImage src="../images/flowers/projects-background.png" placeholder="none" />
                </div>
                <div className="projects-page_foreground">
                    <div className="projects-page_title">Projects</div>
                    <div className="projects-page_subtitle">An sample of several creative projects by Larisa</div>
                    <ul className="projects-page_list">
                        {digitalMediaSection()}
                        {webDesignSection()}
                        {embroiderySection()}                    
                    </ul>
                </div>
                
            </main>
        </Layout>
    )
}

export default ProjectsPage;