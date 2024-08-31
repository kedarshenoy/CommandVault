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


import React, { useState } from 'react';
import '../../styles/Takepost.css';
import CoustomInput from './CoustomInput';

export default function Takepost() {
  const [showsecond,setShowsecond]= useState(false)
  return (
    <div className='mainDivPost'>
      <div className='innerDiv'> 
      <h1 style={{ color: 'blue',}}>Create new Post</h1>

      {
        !showsecond ?
        <CoustomInput setShowsecond={setShowsecond }/>
        :
        <div style={{color:'white'}}> Additional Input </div>

      }
    </div>
    </div>
  );
}
