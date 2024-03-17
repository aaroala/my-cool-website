import { useEffect, useState } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

import sanityClient from "../../client";
import { Link } from 'react-router-dom';

const BlogsPage = () => {

  const [allPostsData, setAllPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
        asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {allPostsData &&
          allPostsData.map((post: any, index: any) => (
            <Link to={"/blogs/" + post.slug.current} key={post.slug.current} style={{ textDecoration: 'none' }}>
              <Paper sx={{ boxShadow: 10, padding: 5, margin: 2, display: 'flex', flexDirection: 'column', maxWidth: '600px', height: 'auto' }}>
                <Typography variant='h4'>
                  {post.title}
                </Typography>
                <Divider />
                <img src={post.mainImage.asset.url} alt="" style={{ width: '100%', height: 'auto', marginTop: "20px"}}/>
              </Paper>
            </Link>
          ))}
    </Container>
  );
}



export default BlogsPage;