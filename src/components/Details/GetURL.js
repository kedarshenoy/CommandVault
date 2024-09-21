// import React from 'react'
// import { getDownloadURL, ref } from "firebase/storage";
// import { useState, useEffect } from "react";
// import storage from "../../firebase"; 
// const GetURL = ({ imagePath ,banner=false}) => {
//     const [imageURL, setImageURL] = useState("");
  
//     useEffect(() => {
//       const fetchImageURL = async () => {
//         try {
         
//         //   setImageURL(url); // Set the URL in the state
//         } catch (error) {
//           return console.error("Error fetching image URL:", error);
//         }
//       };
  
//       fetchImageURL();
//     }, [imagePath]);

//     return({imageURL})
  
//     // return (
//     //   <div>
//     //     {imageURL ? banner ? <img src={imageURL} alt="" style={{height:'50vh',width:'50vw', objectFit:'contain'}}/>:<img src={imageURL} alt="" style={{height:'100px',width:'100px'}}/> : <p>Loading...</p>}
//     //   </div>
//     // );
//   };


//   export default GetURL;


// import { getDownloadURL, ref } from "firebase/storage";
// import storage from "../../firebase";

// const getURL = async (imagePath) => {
//   try {
//     const storageRef = ref(storage, imagePath); // Get reference to the image in Firebase storage
//     const url = await getDownloadURL(storageRef); // Fetch the download URL
//     return url; // Return the URL
//   } catch (error) {
//     console.error("Error fetching image URL:", error);
//     return null; // Return null in case of error
//   }
// };

// export default getURL;

import { getDownloadURL, ref } from "firebase/storage";
import storage from "../../firebase";

const getURL = async (imagePath) => {
  try {
    const storageRef = ref(storage, imagePath); // Get reference to the image in Firebase storage
    const url = await getDownloadURL(storageRef); // Fetch the download URL
    console.log('URL to the image '+url)
    return url; // Return the URL
  } catch (error) {
    console.error("Error fetching image URL:", error);
    return null; // Return null in case of error
  }
};

export default getURL;
