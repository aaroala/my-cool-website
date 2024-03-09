
import axios from 'axios';

const BlogPage = () => {
  const user = "grumbach";
  const repo = "ft_ping";
  const url = `https://github.com/oikki/website-blogs/tree/main/blogs`;

  axios.get(url)
    .then(response => {
      const res = response.data;
      console.log(res);
    })
    .catch(error => {
      console.error(error);
    });


  return(<div></div>)
}

export default BlogPage;