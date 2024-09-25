import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Avatar.css'
// import '../styles/Cardsection.css';
// import FirebaseImage from './FirebaseImage';

export default function Avatar({email}) {
    const [prof,setProf] =useState(16)
    const navigate = useNavigate();

    
    const sendProfile =()=>{
        
        const data ={
            email:email,
            prof:2
        }

        axios.post('http://localhost:5000/signup/avt', data)
            .then(res => {
                // localStorage.setItem("Token", res.data.Token);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    }
    return(
        <div className='AvatarMAinDIV'>
            <h4 className='AvtHeading'>Select Profile</h4>
            <div classname="avtcontainer">
                <img onClick={()=>setProf(1)} className="avtimg" src={require('../../Assets/Profile/1.jpg')} alt='' />
                <img onClick={()=>setProf(2)} className="avtimg" src={require('../../Assets/Profile/2.jpg')} alt='' />
                <img onClick={()=>setProf(3)} className="avtimg" src={require('../../Assets/Profile/3.jpg')} alt='' />
                <img onClick={()=>setProf(4)} className="avtimg" src={require('../../Assets/Profile/4.jpg')} alt='' />
                <img onClick={()=>setProf(5)} className="avtimg" src={require('../../Assets/Profile/5.jpg')} alt='' />
                <img onClick={()=>setProf(6)} className="avtimg" src={require('../../Assets/Profile/6.jpg')} alt='' />
                <img onClick={()=>setProf(7)} className="avtimg" src={require('../../Assets/Profile/7.jpg')} alt='' />
                <img onClick={()=>setProf(8)} className="avtimg" src={require('../../Assets/Profile/8.jpg')} alt='' />
                <img onClick={()=>setProf(9)} className="avtimg" src={require('../../Assets/Profile/9.jpg')} alt='' />
                <img onClick={()=>setProf(10)} className="avtimg" src={require('../../Assets/Profile/10.jpg')} alt='' />
                <img onClick={()=>setProf(11)} className="avtimg" src={require('../../Assets/Profile/11.jpg')} alt='' />
                <img onClick={()=>setProf(12)} className="avtimg" src={require('../../Assets/Profile/12.jpg')} alt='' />
                <img onClick={()=>setProf(13)} className="avtimg" src={require('../../Assets/Profile/13.jpg')} alt='' />
                <img onClick={()=>setProf(14)} className="avtimg" src={require('../../Assets/Profile/14.jpg')} alt='' />
                {/* <img className="avtimg" src={require('../../Assets/Profile/15.jpg')} alt='' /> */}


            </div>
            <div className='avtSendBtnDiv'>
                <div className='avtSendBtnSkip' onClick={()=>navigate('/')}>Skip</div>
                <div className='avtSendBtnSkip' onClick={()=>sendProfile()}>Complete</div>
            </div>
        </div>  
    )
}