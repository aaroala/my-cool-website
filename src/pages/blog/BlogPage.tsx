
import axios from 'axios';
import firebase from '../../config/firebase';
import { getFunctions, httpsCallable, connectFunctionsEmulator  } from "firebase/functions";
import { useEffect, useState } from 'react';
import { Octokit } from 'octokit';
import { Container, Paper, Stack, Typography } from '@mui/material';
import Markdown from 'react-markdown'

const BlogPage = () => {
  // const user = "grumbach";
  // const repo = "ft_ping";
  // const url = `https://github.com/oikki/website-blogs/tree/main/blogs`;

  // axios.get(url)
  //   .then(response => {
  //     const res = response.data;
  //     console.log(res);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });


  const [blogLinks, setBlogLinks] = useState([])
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    getGit()
  },[])

  const octokit = new Octokit({
    auth: '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'
  })


  const getGit = async() => {

    const result: any = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: 'oikki',
      repo: 'website-blogs',
      path: 'blogs',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    console.log(result)
    const fileContents = await Promise.all(
      result.data.map(async (file: any) => {
        const response: any = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
          owner: 'oikki',
          repo: 'website-blogs',
          path: file.path,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });
        return response.data.content;
      })
    );
    const decodedContents: any = fileContents.map((content) => atob(content));
    setBlogLinks(result.data);
    setBlogs(decodedContents);
    //console.log(decodedContents)
    //setBlogLinks(result.data)
  
  }


  const functions = getFunctions(firebase);
  const sayHello = async() => {
    try {
      connectFunctionsEmulator(functions, 'localhost', 5001); // DEBUG
      let func = httpsCallable(functions, 'sayHello');
      let result = await func({});
      const data = result.data;
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }

  }


  return(
  <Container>
    <Stack>
      {blogs.map((value: any, index) => {
        console.log(value)
        return(
          <Paper key={index} sx={{m: 5, p:5, whiteSpace:"pre-line"}}>
            <Markdown>{value}</Markdown>
          </Paper>
          )
      })}
    </Stack>
  </Container>)
}

export default BlogPage;