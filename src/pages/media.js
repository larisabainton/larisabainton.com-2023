import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import '../style/main.scss';

import Layout from "../components/layout"
import SEO from "../components/SEO";

const MediaPage = () => {
    return (
        <Layout>
            <main className="media-page page">
                <div className="media-page_videos">
                    <div className="media-page_title page_title">Videos</div>
                    <ul className="media-page_list">
                        <li className="media-page_list-item">
                            <iframe 
                                src="https://www.youtube.com/embed/oNngx0GyYqE?si=fSK5XifvQUtN60A1" 
                                className="youtube-video"
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen>
                            </iframe>
                            <div className="media-page_list-item_title">Injurious Hermia, Midsummer Night's Dream (Britten)</div>
                            <div className="media-page_list-item_description">Miami Music Festival, 2022</div>
                        </li>
                    </ul>
                </div>
                
                <div className="media-page_photos">
                    <div className="media-page_title page_title">Photos</div>
                    <ul className="media-page_list production-photos">
                        <li className="media-page_list-item production-photos_list-item">
                            <StaticImage alt="" src="../images/production-photos/1.jpg" className="production-photo"/>
                            <div className="production-photo--hover">
                                <div className="production-photo--hover_text">Helena, Midsummer Night's Dream</div>
                            </div>
                        </li>
                        <li className="media-page_list-item production-photos_list-item">
                            <StaticImage alt="" src="../images/production-photos/2.jpg" className="production-photo"/>
                            <div className="production-photo--hover">
                                <div className="production-photo--hover_text">Helena, Midsummer Night's Dream</div>
                            </div>
                        </li>
                        <li className="media-page_list-item production-photos_list-item">
                            <StaticImage alt="" src="../images/production-photos/3.jpg" className="production-photo"/>
                            <div className="production-photo--hover">
                                <div className="production-photo--hover_text">Helena, Midsummer Night's Dream</div>
                            </div>
                        </li>
                        <li className="media-page_list-item production-photos_list-item">
                            <StaticImage alt="" src="../images/production-photos/4.jpg" className="production-photo"/>
                            <div className="production-photo--hover">
                                <div className="production-photo--hover_text">Helena, Midsummer Night's Dream</div>
                            </div>
                        </li>
                        <li className="media-page_list-item production-photos_list-item">
                            <StaticImage alt="" src="../images/production-photos/5.jpg" className="production-photo"/>
                            <div className="production-photo--hover">
                                <div className="production-photo--hover_text">Helena, Midsummer Night's Dream</div>
                            </div>
                        </li>
                        <li className="media-page_list-item production-photos_list-item">
                            <StaticImage alt="" src="../images/production-photos/6.jpg" className="production-photo"/>
                            <div className="production-photo--hover">
                                <div className="production-photo--hover_text">Helena, Midsummer Night's Dream</div>
                            </div>
                        </li>
                        <li className="media-page_list-item production-photos_list-item">
                            <StaticImage alt="" src="../images/production-photos/7.jpg" className="production-photo"/>
                            <div className="production-photo--hover">
                                <div className="production-photo--hover_text">Helena, Midsummer Night's Dream</div>
                            </div>
                        </li>
                        <li className="media-page_list-item production-photos_list-item">
                            <StaticImage alt="" src="../images/production-photos/8.jpg" className="production-photo"/>
                            <div className="production-photo--hover">
                                <div className="production-photo--hover_text">Helena, Midsummer Night's Dream</div>
                            </div>
                        </li>
                        <li className="media-page_list-item production-photos_list-item">
                            <StaticImage alt="" src="../images/production-photos/9.jpg" className="production-photo"/>
                            <div className="production-photo--hover">
                                <div className="production-photo--hover_text">Helena, Midsummer Night's Dream</div>
                            </div>
                        </li>
                        <li className="media-page_list-item production-photos_list-item">
                            <StaticImage alt="" src="../images/production-photos/10.jpg" className="production-photo"/>
                            <div className="production-photo--hover">
                                <div className="production-photo--hover_text">Helena, Midsummer Night's Dream</div>
                            </div>
                        </li>
                        <li className="media-page_list-item production-photos_list-item">
                            <StaticImage alt="" src="../images/production-photos/11.jpg" className="production-photo"/>
                            <div className="production-photo--hover">
                                <div className="production-photo--hover_text">Helena, Midsummer Night's Dream</div>
                            </div>
                        </li>
                        <li className="media-page_list-item production-photos_list-item">
                            <StaticImage alt="" src="../images/production-photos/12.png" className="production-photo"/>
                            <div className="production-photo--hover">
                                <div className="production-photo--hover_text">Gretel, Hänsel und Gretel</div>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </main>
        </Layout>
    )
}

export default MediaPage;

export const Head = () => <SEO title="Larisa Bainton | Media" />