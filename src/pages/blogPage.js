import React from "react";
import { graphql } from "gatsby"; // Import graphql explicitly

const BlogPost = ({ data }) => {
    const post = data.markdownRemark;

    return (
        <main>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </main>
    );
};

export default BlogPost;
