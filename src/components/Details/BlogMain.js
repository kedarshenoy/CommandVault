import React, { useEffect, useState } from 'react'
import html2pdf from 'html2pdf.js';
import axios from 'axios';
import '../../styles/BlogMain.css'
import exportimg from '../../Assets/export.svg'
import ImageComponent from '../Helpers/ImageComponent';
import { useLocation } from 'react-router-dom';



export default function BlogMain() {
  const location = useLocation();
  const { blogData } = location.state || {};
  // const [post, setPost]=useState();
  // console.log(blogData);
  const DisplayContent = () => {

    let [data, setData]=useState(blogData);

    return (
      <div>
        {data.map((item, index) => {
          if (item.type === 'code') {
            return <h4 key={index} style={{ color: 'blue' }}>{item.text}</h4>;
          }

          if (item.type === 'heading') {
            return <h1 key={index} style={{ color: 'orange' }}>{item.text}</h1>;
          }

          if (item.type === 'subheading') {
            return <h2 key={index} style={{ color: 'green' }}>{item.text}</h2>;
          }

          if (item.type === 'text') {
            return <p key={index}>{item.text}</p>;
          }

          if (item.type === 'image') {
            return <ImageComponent imagePath={item.url} key={index}/>
            // return <img key={index} src={item.url} alt={item.fileName} style={{ maxWidth: '100%' }} />;
          }

          return null; // Fallback return in case no type matches
        })}
      </div>
    );
  };
  const handleShare2 = () => {
    // Select the content you want to convert to PDF
    const content = document.getElementById('content-to-pdf');

    // Configure the PDF options
    const options = {
      filename: 'page.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Convert the content to PDF
    html2pdf().set(options).from(content).save();
  };

  return (
    <div className='mainBlogdiv ' >
      <div>

        <div className='exportlogodiv'>
          <p className='exportText' onClick={() => handleShare2()}>Get a Copy &nbsp;</p>
          <img onClick={() => handleShare2()} src={exportimg} className='exportlogo' />
        </div>
        {/* <img className='blogmainimg' src={require('../../Assets/content.jpeg')} alt=''/> */}
        <div className='content' id='content-to-pdf'>
          {DisplayContent()}
        </div>
        {/* Need to add profile name and photo  */}
        {/* scroll animation  */}

      </div>
    </div>
  )
}
