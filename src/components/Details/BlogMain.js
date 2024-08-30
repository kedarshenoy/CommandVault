import React from 'react'
import '../../styles/BlogMain.css'
export default function BlogMain() {
    
  return (
    <div className='mainBlogdiv'>
       <div>
       <h2 className='mainPostHeading'>Name of the Post Goes here</h2>
        <img className='blogmainimg' src={require('../../Assets/content.jpeg')} alt=''/>
        <div className='content'></div>
       </div>
    </div>
  )
}
