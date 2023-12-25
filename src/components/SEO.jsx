import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const SEO = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                    description
                    keywords
                }
            }
        }
    `)

    const seo = data.site.siteMetadata;
    const siteTitle = title || seo.title; 

    return (
        <>
            <title>{siteTitle}</title>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
            <meta name="url" content={seo.url} />
        </>
    )
};

export default SEO;