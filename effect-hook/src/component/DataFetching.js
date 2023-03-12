import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  // fetching data (1)
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => {
  //       console.log(res);
  //       setPosts(res.data);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  // fetching data with id (2)
  // const [post, setPost] = useState({});
  // const [id, setId] = useState(1);
  // useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //       setPost(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [id]);

  // Fetching data with id and control by user (3)
  const [post, setPost] = useState({});
  const [id, setId] = useState('');
  const [idFromButton, setIdFromButton] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromButton]);

  const handleIdFromButton = () => {
    setIdFromButton(id);
  };
  return (
    <div>
      {/* Fetching data (1) */}
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
          ))}
        </ul> */}

      {/* Fetching data with id(2) */}
      {/* <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <div>{post.title}</div> */}

      {/* Fetching data with id and control by user (3) */}
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleIdFromButton}>Fetching post</button>
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetching;
