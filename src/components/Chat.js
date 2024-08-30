import React from 'react'
import { getDownloadURL, ref } from "firebase/storage";
import { useState, useEffect } from "react";
import storage from "../firebase"; 
import Lottie from 'lottie-react';
import l1 from '../Assets/l1.json';
import l2 from '../Assets/l2.json';
import l3 from '../Assets/l3.json';
import l4 from '../Assets/l4.json';
import login from '../Assets/Login.json';



const ImageComponent = ({ imagePath }) => {
    const [imageURL, setImageURL] = useState("");
  
    useEffect(() => {
      const fetchImageURL = async () => {
        try {
          const imageRef = ref(storage, imagePath); // Create a reference to the image in Firebase Storage
          const url = await getDownloadURL(imageRef); // Get the download URL
          setImageURL(url); // Set the URL in the state
        } catch (error) {
          console.error("Error fetching image URL:", error);
        }
      };
  
      fetchImageURL();
    }, [imagePath]);
  
    return (
      <div>
        {imageURL ? <img src={imageURL} alt="" style={{height:'100px',width:'100px'}}/> : <p>Loading...</p>}
      </div>
    );
  };

export default function Chat() {
  return (

    <div>
        <div><ImageComponent imagePath={'https://storage.googleapis.com/commandvault-3277f.appspot.com/lenovo-001.jpg'} /></div>
    <div><ImageComponent imagePath={'https://storage.googleapis.com/commandvault-3277f.appspot.com/vecteezy_amazon-logo-png-amazon-icon-transparent-png_19766223.png'} /></div>
    <Lottie animationData={l1} loop={true} style={{ height: '100px', width: '100px' }} />
    <Lottie animationData={l2} loop={false} style={{ height: '500px', width: '500px' }} />
    <Lottie animationData={login} loop={true} style={{ height: '500px', width: '500px' }} />
    <Lottie animationData={l3} loop={true} style={{ height: '100px', width: '100px' }} />
    <Lottie animationData={l4} loop={true} style={{ height: '100px', width: '100px' }} />

    </div>
  )
}
