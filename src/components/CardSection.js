
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Cardsection.css';
import FirebaseImage from './FirebaseImage';

export default function CardSection() {
  const navigate = useNavigate(); // Use 'navigate' instead of 'navigation'
  const [posts, setPosts] = useState([]);

  // Fetch posts from the API
  const getPosts = () => {
    axios.get('http://localhost:5000/post/all',{
      headers: {
        'authorization': `Bearer ${localStorage.getItem('Token')}` }
    })
      .then((res) => {
        setPosts(res.data);
        console.log(res.data); // Log the posts data
      })
      .catch((err) => {
        console.log(err); // Log any errors
      });
  };

  // Fetch posts when the component mounts
  useEffect(() => {
    getPosts();
  }, []);

  // Handle navigation to the blog page with data
  const handleNavigation = (data,userName) => {
    navigate('/blog', { state: { blogData: data,userName:userName } }); // Navigate with state
  };

  // Render posts as gallery items
  const renderPosts = () => {
    return posts.map((item, index) => (
      <div key={index} className="gallery-item" onClick={() => handleNavigation(item.content,item.userName)}>
       {/* { console.log(item)} */}
        <div style={{
          color: 'white',
          textAlign: 'center',
          fontFamily: 'Roboto',
          fontWeight: '400',
          fontStyle: 'normal',
          fontSize: '1.25rem',
          marginBottom: '15px'
        }}>
          {item.content[0].text} {/* Adjust based on your data structure */}
        </div>
        <FirebaseImage imagePath={item.content[1].url} imgClass={'gallery-img'} /> {/* Adjust based on your data structure */}
      </div>
    ));
  };

  return (
    <div>
      <div className='gallery'>
        {renderPosts()}
      </div>
    </div>
  );
}
