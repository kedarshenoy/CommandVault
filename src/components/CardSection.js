// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// import '../styles/Cardsection.css'
// import img from '../Assets/content.jpeg'
// import tryim from '../Assets/try.jpg'
// import axios from 'axios'
// import FirebaseImage from './FirebaseImage'

// export default function CardSection() {
//   const navigation =useNavigate();

//   const [posts,setPosts] = useState([]);
//   const getPosts =()=>{
//     axios.get('http://localhost:5000/post/all').then((res)=>{setPosts(res.data); console.log(res.data)}).catch((err)=>{console.log(err)});
//   }

//   useEffect(()=>{
//     getPosts();
//   },[])

//   const renderPosts =()=>{
//     const arr =[]
//     posts.map((item,index)=>{
//       arr.push( <div className="gallery-item" onClick={()=>{navigation('/blog', { blogData: "try" });
//     }}>
//       <div style={{color:'white',textAlign:'center',fontFamily:'Roboto',fontWeight:'400',fontStyle:'normal',fontSize:'1.25rem',marginBottom:'15px'}}>{item[0].text}</div>
//       {/* <img src={img} alt='d'className="gallery-img"/> */}
//       <FirebaseImage imagePath={item[1].url} imgClass={'gallery-img'} />
//       </div>) 
//     })
//     console.log(arr)
//     return arr;
//   }
//   return (
//     <div>
//         <div className='gallery'>
//           {
//             renderPosts()
//           }
//             {/* <div className="gallery-item">
//             <div style={{color:'white',textAlign:'center',fontFamily:'Roboto',fontWeight:'400',fontStyle:'normal',fontSize:'1.25rem',marginBottom:'15px'}}>Name goes here fghffffldkejctyhthkmio45jok5o</div>
//             <img src={img} alt='d'className="gallery-img"/>
//             </div> */}
//             {/* <div className="gallery-item">
//             <div style={{color:'white',textAlign:'center',fontFamily:'Roboto',fontWeight:'400',fontStyle:'normal',fontSize:'1.25rem',marginBottom:'15px'}}>Name goes here  </div>

//             <img src={tryim} alt='d'className="gallery-img"/>
//             </div>

//             <div className="gallery-item">
//             <div style={{color:'white',textAlign:'center',fontFamily:'Roboto',fontWeight:'400',fontStyle:'normal',fontSize:'1.25rem',marginBottom:'15px'}}>Name goes here  </div>

//             <img src={img} alt='d'className="gallery-img"/>
//             </div> */}


//         </div>
//         <div className="gallery">
//     </div>

//     </div>
//   )
// }


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
  const handleNavigation = (data) => {
    navigate('/blog', { state: { blogData: data } }); // Navigate with state
  };

  // Render posts as gallery items
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

  return (
    <div>
      <div className='gallery'>
        {renderPosts()}
      </div>
    </div>
  );
}
