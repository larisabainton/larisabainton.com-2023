import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true });


    return (
        <div className="index_about">
            <div className="index_about_image" ref={ref} >
                <div className="index_about_image_foreground">
                    <StaticImage placeholder="none" src="../images/flowers/about_frame.png" alt="" className={`index_about_image_frame index_about_image_frame--${inView ? 'is-visible' : 'not-visible'}`}/>
                </div>
                <StaticImage src="../images/about.jpg" alt="Larisa smiling and sitting on a bench" className="index_about_image_background"/>
            </div>
            <div className="index_about_text">
                <div className="index_about_title">About</div>
                <div className="index_about_blurb">
                    <p> Larisa Bainton Hernandez, an emerging soprano, is celebrated for her captivating performances and profound emotional depth. Recognized by the 
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
)};

export default AboutSection