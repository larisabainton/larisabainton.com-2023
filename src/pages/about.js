import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const AboutPage = () => {
    return (
        <Layout>
            <main className="about-page">
                <div className="about_image">
                    <StaticImage placeholder="none" src="../images/flowers/about_frame.png" alt="" className="about_image_foreground"/>
                    <StaticImage src="../images/about.jpg" alt="Larisa smiling and sitting on a bench" className="about_image_background"/>
                </div>
                <div className="about_text">
                    <div className="about_title">About</div>
                    <div className="about_blurb">
                        <p> Larisa Bainton, an emerging soprano, is celebrated for her captivating performances and profound emotional depth. Recognized by the <em> Boston Globe</em>, 
                    <em> OperaWire</em>, 
                    <em> WBUR</em> and 
                    <em> Bachtrack</em> for her pioneering work in the classical realm, Larisa has earned her place in the spotlight. In 2021, the <em> Eastman School of Music</em> named her one of the “Outstanding Eastman Women” for her groundbreaking digital production of Hänsel und Gretel.</p>
                        <p> She studied at the world-renowned Eastman School of Music and New England Conservatory with award-winning faculty Jan Opalach and Dr. Ian Howell. She has performed around the globe on stages in Austria, Italy, Hawaii, Miami, California, New York, and in Boston where she resides. Her notable roles include <em> Helena</em> (Midsummer Night’s Dream), 
                    <em> Gretel</em> (Hänsel und Gretel),  
                    <em> Cendrillon</em> (Cendrillon), and the 
                    <em> Countess (Le Nozze di Figaro).</em>.</p>
                        <p> As a fierce competitor, Larisa's accolades include being a semifinalist in the 
                            <em> Orpheus Vocal Competition</em>, 
                            <em> Mario Lanza Scholarship Competition,</em> and an alternate in the prestigious 
                            <em> Washington International Competition</em>. She was an encouragement award winner in the 
                            <em> Mixtape Recital Competition</em>, and a winner of Massachusetts Cultural Council grants in 2019 and 2022 for creative projects.</p>
                        <p> Larisa’s creative interests concentrate on using technology to make classical music and opera more accessible to the modern day listener. Beyond her vocal talents, Larisa is also proficient in instruments like the piano, guitar, ukulele, and balalaika. Outside the limelight, she enjoys spending time with her two dogs and two cats.</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default AboutPage;