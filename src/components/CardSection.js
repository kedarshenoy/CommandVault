import React from 'react'
import '../styles/Cardsection.css'
import img from '../Assets/content.jpeg'
import tryim from '../Assets/try.jpg'

export default function CardSection() {
  return (
    <div>
        <div className='gallery'>
            <div className="gallery-item">
            <div style={{color:'white',textAlign:'center',fontFamily:'Roboto',fontWeight:'400',fontStyle:'normal',fontSize:'1.25rem',marginBottom:'15px'}}>Name goes here fghffffldkejctyhthkmio45jok5o</div>
            <img src={img} alt='d'className="gallery-img"/>
            </div>
            <div className="gallery-item">
            <div style={{color:'white',textAlign:'center',fontFamily:'Roboto',fontWeight:'400',fontStyle:'normal',fontSize:'1.25rem',marginBottom:'15px'}}>Name goes here  </div>

            <img src={tryim} alt='d'className="gallery-img"/>
            </div>

            <div className="gallery-item">
            <div style={{color:'white',textAlign:'center',fontFamily:'Roboto',fontWeight:'400',fontStyle:'normal',fontSize:'1.25rem',marginBottom:'15px'}}>Name goes here  </div>

            <img src={img} alt='d'className="gallery-img"/>
            </div>


        </div>
        <div className="gallery">
    </div>

    </div>
  )
}
