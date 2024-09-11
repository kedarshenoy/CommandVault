import React from 'react'
import { getDownloadURL, ref } from "firebase/storage";
import { useState, useEffect } from "react";
import storage from "../../firebase"; 


const ImageComponent = ({ imagePath ,banner=false}) => {
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
        {imageURL ? banner ? <img src={imageURL} alt="" style={{height:'500px',width:'500px'}}/>:<img src={imageURL} alt="" style={{height:'100px',width:'100px'}}/> : <p>Loading...</p>}
      </div>
    );
  };


  export default ImageComponent;