import React from 'react';
import '../../styles/Search.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseImage from '../FirebaseImage';
export default function Search() {
    const navigate = useNavigate(); 
    const [posts, setPosts] = useState([]);
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
      const handleNavigation = (data) => {
        navigate('/blog', { state: { blogData: data } }); // Navigate with state
      };

      const renderPosts = () => {
        return posts.map((item, index) => (
          <div key={index} className="gallery-item" onClick={() => handleNavigation(item)}>
            <div style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Roboto',
              fontWeight: '400',
              fontStyle: 'normal',
              fontSize: '1.25rem',
              marginBottom: '15px'
            }}>
              {item[0].text} {/* Adjust based on your data structure */}
            </div>
            <FirebaseImage imagePath={item[1].url} imgClass={'gallery-img'} /> {/* Adjust based on your data structure */}
          </div>
        ));
      };
    

      useEffect(() => {
        getPosts();
      }, []);
    

    return (
        <div >
            <h1 className='searchHeading'>Explore Blogs</h1>
            <div style={{padding:'50px' ,display:'flex', alignItems:'center' ,justifyContent:'space-around'}}>
            <input className='searchBar' type='text' placeholder='search'/> <div className='searchBTn'>Search</div>
            </div>


            <div>
            {renderPosts()}
            </div>
        </div>
    )
}
