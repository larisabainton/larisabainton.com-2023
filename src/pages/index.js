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
                <p> Larisa Bainton, an emerging soprano, is celebrated for her captivating performances and profound emotional depth. Recognized by the Boston Globe, OperaWire, WBUR, and Bachtrack for her pioneering work in the classical realm, Larisa has earned her place in the spotlight. In 2021, the Eastman School of Music named her one of the “Outstanding Eastman Women” for her groundbreaking digital production of Hänsel und Gretel.</p>
                <p> She studied at the world-renowned Eastman School of Music and New England Conservatory with award-winning faculty Jan Opalach and Dr. Ian Howell. She has performed around the globe on stages in Austria, Italy, Hawaii, Miami, California, New York, and in Boston where she resides. Her notable roles include Helena (Midsummer Night’s Dream), Gretel (Hänsel und Gretel),  Cendrillon (Cendrillon), and the Countess (Le Nozze di Figaro).</p>
                <p> As a fierce competitor, Larisa's accolades include being a semifinalist in the Orpheus Vocal Competition, Mario Lanza Scholarship Competition, and an alternate in the prestigious Washington International Competition. She was an encouragement award winner in the Mixtape Recital competition, and a winner of Massachusetts Cultural Council grants in 2019 and 2022 for creative projects.</p>
                <p> Larisa’s creative interests concentrate on using technology to make classical music and opera more accessible to the modern day listener. Beyond her vocal talents, Larisa is also proficient in instruments like the piano, guitar, ukulele, and balalaika. Outside the limelight, she enjoys spending time with her two dogs and two cats.</p>
            </div>
        </div>
    </div>
);

const calendarSection = (
    <div className="index_calendar">
        <div className="index_calendar_background">
            <StaticImage src="../images/flowers/events-background.png" className="index_calendar_image"/>
        </div>
        <div className="index_calendar_foreground">
            <div className="index_calendar_title">Events</div>
            <Calendar sourcePage="index" />
        </div>
        
    </div>
);

const projectsSection = (
    <div className="index_projects">
        <div className="index_projects_title">Projects</div>
        <div className="index_projects_text">Click <a href='/projects'>here</a> for a full list of Larisa's creative projects.</div>
    </div>
);

const contactSection = (
    <div className="index_contact">
        <div className="index_contact_title">Contact</div>
        <ContactForm />
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
