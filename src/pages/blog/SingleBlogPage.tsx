// src/component/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { Container, Divider, Typography } from "@mui/material";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source: any) {
  return builder.image(source);
}

const BlogPage = () => {
  const [postData, setPostData] = useState<any>(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
           title,
           slug,
           mainImage{
           asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
       }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  console.log("heyHey")

  if (!postData) return <div>Loading...</div>;

  return (
    <Container>
        {/* Title Section */}
        <Typography variant="h2">{postData.title}</Typography>
        <Divider sx={{mb:3}}/>
        <img
          src={urlFor(postData.mainImage).url()}
          alt=""
          style={{ height: "400px"}}
        />
        <BlockContent
          blocks={postData.body}
          projectId="n0w9gmne"
          dataset="production"
        />
      </Container>
  );
}

export default BlogPage;
