import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../src/styles/Nav.css'
export default function Nav() {
  const navigation =useNavigate();
  return (
    <div style={{position: 'sticky',top:0,zIndex:1000,backgroundColor:'black', display:'flex', justifyContent:'space-around',alignItems:'center', paddingTop:30,paddingBottom:20}}>
        {/* <div> */}
        <div style={{width:'60%',fontFamily:'Roboto',fontWeight:'600',fontStyle:'normal',fontSize:'1.5rem',letterSpacing:1.5,color:'blue',cursor:'pointer',paddingLeft:'5%'}} onClick={()=>{navigation('/')}}>
        CommandVault
        </div>
        <div style={{width:'30%',display:'flex', justifyContent:'space-between',alignItems:'center'}}>
            <span style={{fontFamily:'Roboto',fontWeight:'400',fontStyle:'normal',letterSpacing:1.5,color:'blue',cursor:'pointer',fontSize:'1.15rem'}} onClick={()=>{navigation('/')}}>Home</span>
            <span style={{fontFamily:'Roboto',fontWeight:'400',fontStyle:'normal',letterSpacing:1.5,color:'blue',cursor:'pointer',fontSize:'1.15rem'}} onClick={()=>{navigation('/post')}}>Post</span>
            <span style={{fontFamily:'Roboto',fontWeight:'400',fontStyle:'normal',letterSpacing:1.5,color:'blue',cursor:'pointer',fontSize:'1.15rem'}} onClick={()=>{navigation('/chat')}}>Chat</span>
            <span><input type='text' className='inputBoxNav' placeholder='Search'/><i class="fas fa-search" aria-hidden="true"></i></span>

        </div>
        <div>
            
        </div>
    </div>
  )
}