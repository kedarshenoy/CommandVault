import React, { useEffect, useState } from 'react'
import '../styles/Cardsection.css'
import img from '../Assets/content.jpeg'
import tryim from '../Assets/try.jpg'
import axios from 'axios'
import FirebaseImage from './FirebaseImage'
export default function CardSection() {
  const [posts,setPosts] = useState([]);
  const getPosts =()=>{
    axios.get('http://localhost:5000/post/all').then((res)=>{setPosts(res.data); console.log(res.data)}).catch((err)=>{console.log(err)});
  }

  useEffect(()=>{
    getPosts();
  },[])

  const renderPosts =()=>{
    const arr =[]
    posts.map((item,index)=>{
      arr.push( <div className="gallery-item">
      <div style={{color:'white',textAlign:'center',fontFamily:'Roboto',fontWeight:'400',fontStyle:'normal',fontSize:'1.25rem',marginBottom:'15px'}}>{item[0].text}</div>
      {/* <img src={item[1].type ==='image' ? item[1].url :img} alt='d'className="gallery-img"/> */}
      <FirebaseImage imagePath={item[1].url} />
      </div>)
    })
    console.log(arr)
    return arr;
  }
  return (
    <div>
        <div className='gallery'>
          {
            renderPosts()
          }
            {/* <div className="gallery-item">
            <div style={{color:'white',textAlign:'center',fontFamily:'Roboto',fontWeight:'400',fontStyle:'normal',fontSize:'1.25rem',marginBottom:'15px'}}>Name goes here fghffffldkejctyhthkmio45jok5o</div>
            <img src={img} alt='d'className="gallery-img"/>
            </div> */}
            {/* <div className="gallery-item">
            <div style={{color:'white',textAlign:'center',fontFamily:'Roboto',fontWeight:'400',fontStyle:'normal',fontSize:'1.25rem',marginBottom:'15px'}}>Name goes here  </div>

            <img src={tryim} alt='d'className="gallery-img"/>
            </div>

            <div className="gallery-item">
            <div style={{color:'white',textAlign:'center',fontFamily:'Roboto',fontWeight:'400',fontStyle:'normal',fontSize:'1.25rem',marginBottom:'15px'}}>Name goes here  </div>

            <img src={img} alt='d'className="gallery-img"/>
            </div> */}


        </div>
        <div className="gallery">
    </div>

    </div>
  )
}
