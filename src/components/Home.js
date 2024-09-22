import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import main from '../Assets/main.json'
import '../styles/Home.css'
import CardSection from './CardSection';
const Home = () => {
  const contentRef = useRef(null);
  const scrollToContent = () => {
    contentRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
    <div className='homeDiv'>
      <div className='homeDivChild'>
        <h1 style={{fontFamily:'Roboto',fontWeight:'400',fontStyle:'normal',fontSize:'2.5rem',color:'white',}}>Streamline Your Workflow with CommandVault</h1>
        <div style={{fontFamily:'Roboto',fontWeight:'200',fontStyle:'normal',fontSize:'1.25rem',letterSpacing:1.5,wordSpacing:1.5,color:'white'}}>
              Welcome to CommandVault, where developers can easily store, retrieve, and share commands,
              project guidelines, debugging tips, and visual aids. Elevate your development experience with
              our comprehensive toolkit.
        </div>
        <div className='joinBtn' onClick={scrollToContent}>
        Join the Community
        </div>
      </div>
      <div >

        <Lottie className='homelottie' animationData={main} loop={true} style={{  }} />
      </div>

    </div>
    <div  ref={contentRef} className="cardSectionHome" style={{color:'white'}}>
    <CardSection/>
    </div>
    </div>
  )
}

export default Home;
