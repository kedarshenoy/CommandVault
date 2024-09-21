import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Avatar.css'
// import '../styles/Cardsection.css';
// import FirebaseImage from './FirebaseImage';

export default function Avatar() {
    return(
        <div className='AvatarMAinDIV'>
            <div classname="avtcontainer">
                <img className="avtimg" src={require('../../Assets/Profile/1.jpg')} alt='' />
                <img className="avtimg" src={require('../../Assets/Profile/2.jpg')} alt='' />
                <img className="avtimg" src={require('../../Assets/Profile/3.jpg')} alt='' />
                <img className="avtimg" src={require('../../Assets/Profile/4.jpg')} alt='' />
                <img className="avtimg" src={require('../../Assets/Profile/5.jpg')} alt='' />
                <img className="avtimg" src={require('../../Assets/Profile/6.jpg')} alt='' />
                <img className="avtimg" src={require('../../Assets/Profile/7.jpg')} alt='' />
                <img className="avtimg" src={require('../../Assets/Profile/8.jpg')} alt='' />
                <img className="avtimg" src={require('../../Assets/Profile/9.jpg')} alt='' />
                <img className="avtimg" src={require('../../Assets/Profile/10.jpg')} alt='' />
                <img className="avtimg" src={require('../../Assets/Profile/11.jpg')} alt='' />
                <img className="avtimg" src={require('../../Assets/Profile/12.jpg')} alt='' />
                <img className="avtimg" src={require('../../Assets/Profile/13.jpg')} alt='' />
                <img className="avtimg" src={require('../../Assets/Profile/14.jpg')} alt='' />
                <img className="avtimg" src={require('../../Assets/Profile/15.jpg')} alt='' />


            </div>
        </div>  
    )
}