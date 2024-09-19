import React from 'react'
import { getDownloadURL, ref } from "firebase/storage";
import { useState, useEffect } from "react";
import storage from "../firebase"; 
import '../styles/Profile.css';
import messageLogo from '../Assets/Profile/message.svg';
import Lottie from 'lottie-react';
import l1 from '../Assets/l1.json';
import l2 from '../Assets/l2.json';
import l3 from '../Assets/l3.json';
import l4 from '../Assets/l4.json';
import login from '../Assets/Login.json';
import { disablePersistentCacheIndexAutoCreation } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import FirebaseImage from './FirebaseImage';
import axios from 'axios';


// const ImageComponent = ({ imagePath }) => {
//   const [imageURL, setImageURL] = useState("");

//     useEffect(() => {
//       const fetchImageURL = async () => {
//         try {
//           const imageRef = ref(storage, imagePath); // Create a reference to the image in Firebase Storage
//           const url = await getDownloadURL(imageRef); // Get the download URL
//           setImageURL(url); // Set the URL in the state
//         } catch (error) {
//           console.error("Error fetching image URL:", error);
//         }
//       };
  
//       fetchImageURL();
//     }, [imagePath]);
  
//     return (
//       <div>
//         {imageURL ? <img src={imageURL} alt="" style={{height:'100px',width:'100px'}}/> : <p>Loading...</p>}
//       </div>
//     );
//   };


export default function Profile() {
  const navigate = useNavigate(); // Use 'navigate' instead of 'navigation'
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
        <FirebaseImage imagePath={itemmain.content[1].url} imgClass={'gallery-img'} /> {/* Access image URL from the content array */}
      </div>
    ));
  };
  


  return (

    <div className='ProfilePage' >
        {/* <div><ImageComponent imagePath={'https://storage.googleapis.com/commandvault-3277f.appspot.com/lenovo-001.jpg'} /></div>
    <div><ImageComponent imagePath={'https://storage.googleapis.com/commandvault-3277f.appspot.com/vecteezy_amazon-logo-png-amazon-icon-transparent-png_19766223.png'} /></div>
    <Lottie animationData={l1} loop={true} style={{ height: '100px', width: '100px' }} />
    <Lottie animationData={l2} loop={false} style={{ height: '500px', width: '500px' }} />
    <Lottie animationData={login} loop={true} style={{ height: '500px', width: '500px' }} />
    <Lottie animationData={l3} loop={true} style={{ height: '100px', width: '100px' }} />
    <Lottie animationData={l4} loop={true} style={{ height: '100px', width: '100px' }} /> */}
      <div style={{display:'flex', justifyContent:'start', alignItems:'center' }}>
          <img src={require('../Assets/Profile/1.jpg')} alt='user' className='ProfilePageImg'/>
          <div className='ProfileNameSidediv'>
          <h2 className='ProfileName'>Username</h2>
          <p className='PostCountName'>Number of Posts:- <span className='PostCount'>13 </span></p>
          <p className='Postlogot'>Logout</p>
          {/* <p className='PostSendMessage'>Send a Quick Message <img src={messageLogo} style={{height:'1.5rem',marginLeft:'1rem'}} alt=''/></p> */}
          </div>
      </div>

      <div className='gallery'>
        {renderPosts()}
      </div>

    </div>
  )
}
