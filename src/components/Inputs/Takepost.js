// import React from 'react'
// import '../../styles/Takepost.css'
// export default function Takepost() {
//   return (
// <div> 
//       <h1  style ={{color:'blue',textAlign:'center'}}>Create new Post</h1>
//     <div className='MainPostinputBox' >
//       <div class="input-field">
//     <input type="text" id="name" required />
//     <label for="name">Your name:</label>
//   </div>
  

//     </div>
//     </div>
//   )
// }


import React from 'react';
import '../../styles/Takepost.css';
import CoustomInput from '../CoustomInput';

export default function Takepost() {
  return (
    <div className='mainDivPost'>
      <div className='innerDiv'> 
      <h1 style={{ color: 'blue',}}>Create new Post</h1>
      <CoustomInput />
      <div className='PublsiBtn'>Publish Post
      </div>
      {/* <div className='MainPostinputBox'>
        <div className="input-field">

          <input type="text" id="name" required />
          <label htmlFor="name">Post Title</label>
        </div>

        <div className="input-field">
          <input type="text" id="email" required />
          <label htmlFor="email">Post Description</label>
        </div>

        <div className="input-field">
          <input type="text" id="username" required />
          <label htmlFor="username">Reference Link</label>
        </div>

        <div className="input-field">
          <input type="text" id="location" required />
          <label htmlFor="location">Script/Command</label>
        </div>
        <div style={{width:'500px'}} >
        <div for="occupation" style={{color:'silver',textAlign:'start',marginLeft:'10px'}}>
          Thumbnail
          </div>
          <input type="file" id="occupation" required alt='Thumbnail' placeholder='Thumbnail' />
          
        </div>
        <div className="input-field">
          <input type="text" id="bio" required />
          <label htmlFor="bio">Relevant Tags</label>
        </div>
      </div> */}
    </div>
    </div>
  );
}
