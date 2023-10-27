import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";

const ProjectsSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div className="index_projects">
            <div ref={ref} className="index_projects_background">
                <StaticImage alt="" placeholder="none" src="../images/flowers/projects-background.png" className={`index_projects_image index_projects_image--${inView ? 'is-visible' : 'not-visible'}`}/>
            </div>
            <div className="index_projects_foreground">
                <div className="index_projects_title">Projects</div>
                <div className="index_projects_text">Click <a className="text-link" href='/projects'>here</a> for a full list of Larisa's creative projects.</div>
            </div>
        </div>
    )
};

export default ProjectsSection;