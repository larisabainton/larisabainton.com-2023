import * as React from "react"
import { StaticImage } from "gatsby-plugin-image";
import '../style/main.scss';

import Layout from "../components/layout"
import Calendar from "../components/calendar";
import ContactForm from "../components/contactForm";

const coverSection = (
    <div className="index_cover">
        <div className="index_cover_background">
            <StaticImage className="index_cover_photo" src="../images/cover.jpg" alt="Larisa standing in front of a tree" />
        </div>
        <div className="index_cover_foreground">
            <StaticImage placeholder="none" className="index_cover_flowers_top" src="../images/flowers/cover_top-right.png" alt="" />
            <StaticImage placeholder="none" className="index_cover_flowers_bottom" src="../images/flowers/cover_bottom-left.png" alt="" />
        </div>
    </div>
)

const aboutSection = (
    <div className="index_about">
        <div className="index_about_image">
            <StaticImage placeholder="none" src="../images/flowers/about_frame.png" alt="" className="index_about_image_foreground"/>
            <StaticImage src="../images/about.jpg" alt="Larisa smiling and sitting on a bench" className="index_about_image_background"/>
        </div>
        <div className="index_about_text">
            <div className="index_about_title">About</div>
            <div className="index_about_blurb">
                <p> Larisa Bainton, an emerging soprano, is celebrated for her captivating performances and profound emotional depth. Recognized by the 
                    <em> Boston Globe</em>, 
                    <em> OperaWire</em>, 
                    <em> WBUR</em> and 
                    <em> Bachtrack</em> for her pioneering work in the classical realm, Larisa has earned her place in the spotlight. In 2021, the 
                    <em> Eastman School of Music</em> named her one of the “Outstanding Eastman Women” for her groundbreaking digital production of Hänsel und Gretel. Her notable roles include 
                    <em> Helena</em> (Midsummer Night’s Dream), 
                    <em> Gretel</em> (Hänsel und Gretel),  
                    <em> Cendrillon</em> (Cendrillon), and the 
                    <em> Countess (Le Nozze di Figaro).</em></p>
                <a href="/about" className="index_about_button">Learn More</a>
            </div>
        </div>
    </div>
);

const calendarSection = (
    <div className="index_calendar">
        <div className="index_calendar_title">Events</div>
        <Calendar sourcePage="index" />
    </div>
);

const projectsSection = (
    <div className="index_projects">
        <div className="index_projects_background">
            <StaticImage alt="" placeholder="none" src="../images/flowers/projects-background.png" className="index_projects_image"/>
        </div>
        <div className="index_projects_foreground">
            <div className="index_projects_title">Projects</div>
            <div className="index_projects_text">Click <a className="text-link" href='/projects'>here</a> for a full list of Larisa's creative projects.</div>
        </div>
        
    </div>
);

const contactSection = (
    <div className="index_contact">
        <div className="index_contact_background">
            <StaticImage alt="" placeholder="none" src="../images/flowers/contact.png" className="index_contact_image"/>
        </div>
        <div className="index_contact_foreground">
            <div className="index_contact_title">Contact</div>
            <ContactForm />
        </div>
        
    </div>
);

const IndexPage = () => {
  return (
    <Layout>
        <main className="index">
            {coverSection}
            {aboutSection}
            {calendarSection}
            {projectsSection}
            {contactSection}
        </main>
    </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Larisa Bainton</title>
