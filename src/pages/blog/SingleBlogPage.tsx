// src/component/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../config/sanityClient";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { Container, Divider, Typography } from "@mui/material";
import { PortableText } from '@portabletext/react'
import BlogImage from "./components/BlogImage";

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
        <PortableText
          value={postData.body}
          components={{
            types: {
              image: BlogImage
            }
          }}
        />
      </Container>
  );
}

export default BlogPage;
