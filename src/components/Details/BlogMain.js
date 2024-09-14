import React, { useEffect, useState } from 'react'
// import html2pdf from 'html2pdf.js';
import axios from 'axios';
import '../../styles/BlogMain.css'
import exportimg from '../../Assets/export.svg'
import ImageComponent from '../Helpers/ImageComponent';
import { useLocation } from 'react-router-dom';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import { convertHtmlPageToWordJavascript } from 'html-to-word-convertor/convertHtmlPageToWordJavascript';
// const PuppeteerHTMLPDF = require("puppeteer-html-pdf");
// import Vue2Img from 'vue-2-img'
// import 'vue-2-img/dist/vue-2-img.css'
// const { PDF } = require("@lesjoursfr/html-to-pdf");
// current: { node: 'v18.17.0', npm: '9.6.7' }
export default function BlogMain() {
  const location = useLocation();
  const { blogData } = location.state || {};
  // const [post, setPost]=useState();
  // console.log(blogData);
  const DisplayContent = () => {

    let [data, setData]=useState(blogData);
    console.log(data)
    return (
      <div style={{backgroundColor:'black',paddingLeft:'10%', paddingRight:'10%'}}>
        <h2 className='postTiltle'>{
          data[0].type=="PostTitle" ? data[0].text : 'New Blog'  }</h2>
        {
          
       data[1].type === 'image' ? <div><ImageComponent imagePath={data[1].url} banner={true}/></div> :<div></div>
       }
        
        
        {data.map((item, index) => {
          if (item.type === 'code') {
            return <h4 className='postcode' key={index} >{item.text}</h4>;
          }

          if (item.type === 'heading') {
            return <h1  className='postHeading' key={index} >{item.text}</h1>;
          }

          if (item.type === 'subheading') {
            return <h2 className='postSubhead' key={index} >{item.text}</h2>;
          }

          if (item.type === 'text') {
            return <p className='postText' key={index}>{item.text}</p>;
          }

          if (item.type === 'image' && item.fileName !=='file_1') {
            return <ImageComponent imagePath={item.url} key={index}/>
            // return <img key={index} src={item.url} alt={item.fileName} style={{ maxWidth: '100%' }} />;
          }

          return null; // Fallback return in case no type matches
        })}
      </div>
    );
  };
  // const handleShare2 = () => {
  //   // Select the content you want to convert to PDF
  //   const content = document.getElementById('content-to-pdf');

  //   // Configure the PDF options
  //   const options = {
  //     filename: 'page.pdf',
  //     image: { type: 'jpeg', quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  //   };

  //   // Convert the content to PDF
  //   html2pdf().set(options).from(content).save();
  // };


  // const handleShare2=()=>{
  //   const pdf = new PDF('http://localhost:3000/blog', '/downloads');
  //   pdf.render()
  //       .then(() => {
  //           console.log("PDF Generated Successfully!")
  //       })
  //       .catch((err) => {
  //           console.error("Failed to generate PDF because of ", err)
  //       });
    
  // }

  const handleShare2=()=>{
    console.log('fucked')
  }

  // const handleShare2 = () => {
  //   const content = document.getElementById('content-to-pdf');
    
  //   html2canvas(content).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/jpeg');
  //     const pdf = new jsPDF({
  //       orientation: 'portrait',
  //       unit: 'px',
  //       format: 'a4'
  //     });
      
  //     // Adjust width/height based on content size
  //     const imgWidth = 210;
  //     const pageHeight = 297;
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
  //     let position = 0;
  //     pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
  //     pdf.save('page.pdf');
  //   });
  // };
  
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
