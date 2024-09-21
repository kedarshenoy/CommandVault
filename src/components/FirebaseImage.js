import React, { useEffect, useState } from 'react'
import { getDownloadURL, ref } from "firebase/storage";
import storage from "../firebase"; 
const FirebaseImage = ({ imagePath,imgClass }) => {
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
        {imageURL ? <img src={imageURL} alt="" className={imgClass}/> : <p>Loading...</p>}
      </div>
    );
  };

  export default FirebaseImage;