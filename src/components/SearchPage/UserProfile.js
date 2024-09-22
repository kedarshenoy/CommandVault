import React from 'react'
import { getDownloadURL, ref } from "firebase/storage";
import { useState, useEffect } from "react";
// import storage from "../firebase"; 
import '../../styles/Profile.css';
import messageLogo from '../../Assets/Profile/message.svg';
// import Lottie from 'lottie-react';
// import l1 from '../Assets/l1.json';
// import l2 from '../Assets/l2.json';
// import l3 from '../Assets/l3.json';
// import l4 from '../Assets/l4.json';
// import login from '../Assets/Login.json';
// import { disablePersistentCacheIndexAutoCreation } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
// import FirebaseImage from './FirebaseImage';
import axios from 'axios';
export default function UserProfile({user}) {
    const navigate = useNavigate(); // Use 'navigate' instead of 'navigation'
  const [posts, setPosts] = useState([]);
    const getPosts = () => {
      axios.post('http://localhost:5000/post/posts-creator', {
        creatorName:user
    },{
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
  
    // Fetch posts when the component mounts
    useEffect(() => {
      getPosts();
    }, []);
  
  
    const renderPosts = () => {
      return posts.map((itemmain, index) => (
        <div key={index} className="gallery-item" onClick={() => handleNavigation(itemmain.content)}>
          {/* Access content array within each itemmain */}
          { console.log(itemmain) }
          <div style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontStyle: 'normal',
            fontSize: '1.25rem',
            marginBottom: '15px'
          }}>
            {itemmain.content[0].text} {/* Access text from the content array */}
          </div>
          {/* <FirebaseImage imagePath={itemmain.content[1].url} imgClass={'gallery-img'} /> Access image URL from the content array */}
        </div>
      ));
    };
    
  
  
    return (
  
      <div className='ProfilePage' >

        <div style={{display:'flex', justifyContent:'start', alignItems:'center' }}>
            <img src={require('../../Assets/Profile/1.jpg')} alt='user' className='ProfilePageImg'/>
            <div className='ProfileNameSidediv'>
            <h2 className='ProfileName'>{posts[0]? posts[0].userName : ''}</h2>
            <p className='PostCountName'>Number of Posts:- <span className='PostCount'>{posts.length >0 ? posts.length : 0} </span></p>
            {/* <p className='Postlogot' onClick={()=>{localStorage.removeItem('Token');navigate('/login')}}>Logout</p> */}
            {/* <p className='PostSendMessage'>Send a Quick Message <img src={messageLogo} style={{height:'1.5rem',marginLeft:'1rem'}} alt=''/></p> */}
            </div>
        </div>
  
        <div className='gallery'>
          {renderPosts()}
        </div>
  
      </div>
    )
  }