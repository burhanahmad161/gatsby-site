import React from "react";
import { Helmet } from "react-helmet";

export default function SEO(){
    return(
        <Helmet>
            <title>My Gatsby Site</title>
            <meta name="description" content="This is a Gatsby site optimized for SEO" />
        </Helmet>
    );
}