// import React, { useEffect, useState } from 'react'
// import html2pdf from 'html2pdf.js';
// import axios from 'axios';
// import '../../styles/BlogMain.css'
// import exportimg from '../../Assets/export.svg'
// import ImageComponent from '../Helpers/ImageComponent';
// import { useLocation } from 'react-router-dom';
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import PDFFile from '../Helpers/PDFFile';
// import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
// // import jsPDF from 'jspdf';
// // import html2canvas from 'html2canvas';
// // import { convertHtmlPageToWordJavascript } from 'html-to-word-convertor/convertHtmlPageToWordJavascript';
// // const PuppeteerHTMLPDF = require("puppeteer-html-pdf");
// // import Vue2Img from 'vue-2-img'
// // import 'vue-2-img/dist/vue-2-img.css'
// // const { PDF } = require("@lesjoursfr/html-to-pdf");
// // current: { node: 'v18.17.0', npm: '9.6.7' }
// export default function BlogMain() {
//   const location = useLocation();
//   const { blogData } = location.state || {};
//   // const [post, setPost]=useState();
//   // console.log(blogData);
//   const DisplayContent = () => {

//     let [data, setData]=useState(blogData);
//     console.log(data)
//     return (
//       <Document>
//       <Page>
//       <div style={{backgroundColor:'black',paddingLeft:'10%', paddingRight:'10%'}}>
//         <h2 className='postTiltle'>{
//           data[0].type=="PostTitle" ? data[0].text : 'New Blog'  }</h2>
//         {
          
//        data[1].type === 'image' ? <div><ImageComponent imagePath={data[1].url} banner={true}/></div> :<div></div>
//        }
        
        
//         {data.map((item, index) => {
//           if (item.type === 'code') {
//             return <h4 className='postcode' key={index} >{item.text}</h4>;
//           }

//           if (item.type === 'heading') {
//             return <h1  className='postHeading' key={index} >{item.text}</h1>;
//           }

//           if (item.type === 'subheading') {
//             return <h2 className='postSubhead' key={index} >{item.text}</h2>;
//           }

//           if (item.type === 'text') {
//             return <p className='postText' key={index}>{item.text}</p>;
//           }

//           if (item.type === 'image' && item.fileName !=='file_1') {
//             return <ImageComponent imagePath={item.url} key={index}/>
//             // return <img key={index} src={item.url} alt={item.fileName} style={{ maxWidth: '100%' }} />;
//           }

//           return null; // Fallback return in case no type matches
//         })}
//       </div>
//       </Page>
//       </Document>
//     );
//   };
//   const handleShare2 = () => {
//     // Select the content you want to convert to PDF
//     const content = document.getElementById('content-to-pdf');

//     // Configure the PDF options
//     const options = {
//       filename: 'page.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };

//     // Convert the content to PDF
//     html2pdf().set(options).from(content).save();
//   };


//   // const handleShare2=()=>{
//   //   const pdf = new PDF('http://localhost:3000/blog', '/downloads');
//   //   pdf.render()
//   //       .then(() => {
//   //           console.log("PDF Generated Successfully!")
//   //       })
//   //       .catch((err) => {
//   //           console.error("Failed to generate PDF because of ", err)
//   //       });
    
//   // }

//   // const handleShare2=()=>{
//   //   console.log('fucked')
//   // }

//   // const handleShare2 = () => {
//   //   const content = document.getElementById('content-to-pdf');
    
//   //   html2canvas(content).then((canvas) => {
//   //     const imgData = canvas.toDataURL('image/jpeg');
//   //     const pdf = new jsPDF({
//   //       orientation: 'portrait',
//   //       unit: 'px',
//   //       format: 'a4'
//   //     });
      
//   //     // Adjust width/height based on content size
//   //     const imgWidth = 210;
//   //     const pageHeight = 297;
//   //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
//   //     let position = 0;
//   //     pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
//   //     pdf.save('page.pdf');
//   //   });
//   // };
  
//   return (
//     <div className='mainBlogdiv ' >
//       <div>
//       <PDFDownloadLink document={<DisplayContent />} filename="FORM">
//       {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
//       </PDFDownloadLink>
//         <div className='exportlogodiv'>
//           <p className='exportText' onClick={() => handleShare2()}>Get a Copy &nbsp;</p>
//           <img onClick={() => handleShare2()} src={exportimg} className='exportlogo' />
//         </div>
//         {/* <img className='blogmainimg' src={require('../../Assets/content.jpeg')} alt=''/> */}
//         <div className='content' id='content-to-pdf'>
//           {DisplayContent()}
//         </div>
//         {/* Need to add profile name and photo  */}
//         {/* scroll animation  */}

//       </div>
//     </div>
//   )
// }





// import React, { useEffect, useState } from 'react';
// import { PDFDownloadLink, Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
// import ImageComponent from '../Helpers/ImageComponent';
// import { useLocation } from 'react-router-dom';
// import GetURL from './GetURL';

// // Define styles for react-pdf components
// const styles = StyleSheet.create({
//   page: {
//     padding: 10,
//     backgroundColor: '#ffffff',
//   },
//   heading: {
//     fontSize: 24,
//     marginBottom: 10,
//     color: '#000',
//   },
//   subheading: {
//     fontSize: 18,
//     marginBottom: 10,
//     color: '#555',
//   },
//   text: {
//     fontSize: 12,
//     marginBottom: 5,
//     color: '#000',
//   },
//   code: {
//     fontSize: 12,
//     fontFamily: 'Courier',
//     backgroundColor: '#f5f5f5',
//     padding: 5,
//   },
//   image: {
//     marginVertical: 10,
//     width: 200,
//     height: 150,
//   }
// });

// const DisplayContent = ({ data }) => {
//   const [updatedData, setUpdatedData] = useState(data);

//   // useEffect that maps through the data and replaces the image URLs
//   useEffect(() => {
//     const updateImageURLs = async () => {
//       const newData = await Promise.all(
//         data.map(async (item) => {
//           if (item.type === 'image') {
//             const imageUrl = await GetURL(item.url); // Fetch the image URL
//             return { ...item, url: imageUrl }; // Return the updated item with the new URL
//           }
//           return item; // Return the unchanged item
//         })
//       );
//       setUpdatedData(newData); // Update the state with the new data
//     };

//     updateImageURLs();
//   }, [data]); // Depend on the data array
//   return (
//     <Document>
//       <Page style={styles.page}>
//         {updatedData.map((item, index) => {
//           if (item.type === 'PostTitle') {
//             return <Text key={index} style={styles.heading}>{item.text}</Text>;
//           }

//           if (item.type === 'heading') {
//             return <Text key={index} style={styles.heading}>{item.text}</Text>;
//           }

//           if (item.type === 'subheading') {
//             return <Text key={index} style={styles.subheading}>{item.text}</Text>;
//           }

//           if (item.type === 'text') {
//             return <Text key={index} style={styles.text}>{item.text}</Text>;
//           }

//           if (item.type === 'code') {
//             return <Text key={index} style={styles.code}>{item.text}</Text>;
//           }

//           if (item.type === 'image') {
//             return (
              

//               <Image key={index} src={item.url} style={styles.image} />
//             );
//           }

//           return null; // fallback for undefined types
//         })}
//       </Page>
//     </Document>
//   );
// };

// export default function BlogMain() {
//   const location = useLocation();
//   const { blogData } = location.state || {};

//   // const handleShare2 = () => {
//   //   const content = document.getElementById('content-to-pdf');
//   //   const options = {
//   //     filename: 'page.pdf',
//   //     image: { type: 'jpeg', quality: 0.98 },
//   //     html2canvas: { scale: 2 },
//   //     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//   //   };
//   //   html2pdf().set(options).from(content).save();
//   // };
//   useEffect(()=>{

//   })
//   return (
//     <div className='mainBlogdiv'>
//       <div>
//         <PDFDownloadLink document={<DisplayContent data={blogData} />} filename="BlogPost.pdf">
//           {({ loading }) => loading ? <button>Loading Document...</button> : <button>Download PDF</button>}
//         </PDFDownloadLink>
//         {/* <div className='exportlogodiv'>
//           <p className='exportText' onClick={handleShare2}>Get a Copy &nbsp;</p>
//           <img onClick={handleShare2} src={exportimg} className='exportlogo' alt="Export" />
//         </div> */}
//         <div className='content' id='content-to-pdf'>
//           {/* Blog content preview can still use HTML here */}
//           {/* Replace DisplayContent if you want to show the PDF content here */}
//         </div>
//       </div>
//     </div>
//   );
// }

// //////////////////////////
// import React, { useEffect, useState } from 'react';
// import { PDFDownloadLink, Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
// import GetURL from './GetURL';
// import { useLocation } from 'react-router-dom';
// const styles = StyleSheet.create({
//   page: {
//     padding: 10,
//     backgroundColor: '#ffffff',
//   },
//   heading: {
//     fontSize: 24,
//     marginBottom: 10,
//     color: '#000',
//   },
//   subheading: {
//     fontSize: 18,
//     marginBottom: 10,
//     color: '#555',
//   },
//   text: {
//     fontSize: 12,
//     marginBottom: 5,
//     color: '#000',
//   },
//   code: {
//     fontSize: 12,
//     fontFamily: 'Courier',
//     backgroundColor: '#f5f5f5',
//     padding: 5,
//   },
//   image: {
//     marginVertical: 10,
//     width: 200,
//     height: 150,
//   }
// });

// const DisplayContent = ({ data }) => {
//   const [updatedData, setUpdatedData] = useState(data);


//   return (
//     <Document>
//       <Page style={styles.page}>
//         {data.map((item, index) => {
//           if (item.type === 'PostTitle') {
//             return <Text key={index} style={styles.heading}>{item.text}</Text>;
//           }

//           if (item.type === 'heading') {
//             return <Text key={index} style={styles.heading}>{item.text}</Text>;
//           }

//           if (item.type === 'subheading') {
//             return <Text key={index} style={styles.subheading}>{item.text}</Text>;
//           }

//           if (item.type === 'text') {
//             return <Text key={index} style={styles.text}>{item.text}</Text>;
//           }

//           if (item.type === 'code') {
//             return <Text key={index} style={styles.code}>{item.text}</Text>;
//           }

//           if (item.type === 'image') {
//             return (
//               <Image key={index} src={item.url} style={styles.image} />
//             );
//           }

//           return null; // fallback for undefined types
//         })}
//       </Page>
//     </Document>
//   );
// };

// export default function BlogMain() {
//   const location = useLocation();
//   const { blogData } = location.state || {};

//   return (
//     <div className='mainBlogdiv'>
//       <div>
//         <PDFDownloadLink document={<DisplayContent data={blogData} />} filename="BlogPost.pdf">
//           {({ loading }) => loading ? <button>Loading Document...</button> : <button>Download PDF</button>}
//         </PDFDownloadLink>
//         <div className='content' id='content-to-pdf'>
//           {/* Blog content preview can still use HTML here */}
//           <img src={blogData[1].url} alt='' />
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import { PDFDownloadLink, Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';
// import { useLocation } from 'react-router-dom';
// const styles = StyleSheet.create({
//   page: {
//     padding: 10,
//     backgroundColor: '#ffffff',
//   },
//   heading: {
//     fontSize: 24,
//     marginBottom: 10,
//     color: '#000',
//   },
//   subheading: {
//     fontSize: 18,
//     marginBottom: 10,
//     color: '#555',
//   },
//   text: {
//     fontSize: 12,
//     marginBottom: 5,
//     color: '#000',
//   },
//   code: {
//     fontSize: 12,
//     fontFamily: 'Courier',
//     backgroundColor: '#f5f5f5',
//     padding: 5,
//   },
//   image: {
//     marginVertical: 10,
//     width: 200,
//     height: 150,
//   },
// });

// const getBase64Image = async (url) => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error(`Failed to load image: ${response.statusText}`);
    
//     const blob = await response.blob();
//     return new Promise((resolve) => {
//       const reader = new FileReader();
//       reader.onloadend = () => resolve(reader.result);  // Base64 string
//       reader.readAsDataURL(blob);
//     });
//   } catch (error) {
//     console.error(error);
//     return null;  // Return null if fetch failed
//   }
// };

// const preloadImages = async (data) => {
//   const updatedData = await Promise.all(
//     data.map(async (item) => {
//       if (item.type === 'image') {
//         const base64Image = await getBase64Image(item.url);
//         return { ...item, base64Image };
//       }
//       return item;
//     })
//   );
//   return updatedData;
// };

// const DisplayContent = ({ data }) => (
//   <Document>
//     <Page style={styles.page}>
//       {data.map((item, index) => {
//         if (item.type === 'heading') {
//           return <Text key={index} style={styles.heading}>{item.text}</Text>;
//         }
//         if (item.type === 'subheading') {
//           return <Text key={index} style={styles.subheading}>{item.text}</Text>;
//         }
//         if (item.type === 'text') {
//           return <Text key={index} style={styles.text}>{item.text}</Text>;
//         }
//         if (item.type === 'code') {
//           return <Text key={index} style={styles.code}>{item.text}</Text>;
//         }
//         if (item.type === 'image' && item.base64Image) {
//           return <Image key={index} src={item.base64Image} style={styles.image} />;
//         }
//         return null;
//       })}
//     </Page>
//   </Document>
// );

// export default function BlogMain() {
//   const [blogData, setBlogData] = useState(null);
//   const location = useLocation();
//   const { blogData: initialData } = location.state || {};

//   useEffect(() => {
//     const fetchData = async () => {
//       if (initialData) {
//         const preloadedData = await preloadImages(initialData);  // Preload images
//         setBlogData(preloadedData);
//       }
//     };
//     fetchData();
//   }, [initialData]);

//   if (!blogData) {
//     return <div>Loading...</div>;  // Show loading state until images are preloaded
//   }

//   return (
//     <div className="mainBlogdiv">
//       <div>
//         <PDFDownloadLink document={<DisplayContent data={blogData} />} filename="BlogPost.pdf">
//           {({ loading }) => loading ? <button>Loading Document...</button> : <button>Download PDF</button>}
//         </PDFDownloadLink>
//         <div className="content" id="content-to-pdf">
//           {/* Blog content preview can still use HTML */}
//           {blogData.map((item, index) => item.type === 'image' && <img key={index} src={item.url} alt="" />)}
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState, useRef } from 'react';
import { PDFDownloadLink, Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';
import { useLocation } from 'react-router-dom';
import exportimg from '../../Assets/export.svg'
import '../../styles/BlogMain.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


// const styles = StyleSheet.create({
//   page: {
//     padding: 10,
//     backgroundColor: '#ffffff',
//   },
//   heading: {
//     fontSize: 24,
//     marginBottom: 10,
//     color: '#000',
//   },
//   subheading: {
//     fontSize: 18,
//     marginBottom: 10,
//     color: '#555',
//   },
//   text: {
//     fontSize: 12,
//     marginBottom: 5,
//     color: '#000',
//   },
//   code: {
//     fontSize: 12,
//     fontFamily: 'Courier',
//     backgroundColor: '#f5f5f5',
//     padding: 5,
//   },
//   image: {
//     marginVertical: 10,
//     width: 200,
//     height: 150,
//   },
// });

//  const DisplayContentMain = (blogData) => {

//     return (
//       <div  ref={pdfRef} style={{backgroundColor:'black',paddingLeft:'10%', paddingRight:'10%'}}>
//         <h2 className='postTiltle'>{
//           blogData[0].type=="PostTitle" ? blogData[0].text : 'New Blog'  }</h2>
//         {
          
//        blogData[1].type === 'image' ? <div><img className='mainBlogImg' src={blogData[1].url} alt='' /></div> :<div><img className='mainBlogImg'  src={require('../../Assets/content.jpeg')} alt=''/></div>
//        }
        
        
//         {blogData.map((item, index) => {
//           if (item.type === 'code') {
//             return <h4 className='postcode' key={index} >{item.text}</h4>;
//           }

//           if (item.type === 'heading') {
//             return <h1  className='postHeading' key={index} >{item.text}</h1>;
//           }

//           if (item.type === 'subheading') {
//             return <h2 className='postSubhead' key={index} >{item.text}</h2>;
//           }

//           if (item.type === 'text') {
//             return <p className='postText' key={index}>{item.text}</p>;
//           }

//           if (item.type === 'image' && item.fileName !=='file_1') {
//             return <div className='postImg'> <img  key={index} src={item.url} /></div>
//           }

//           return null; 
//         })}
//       </div>
//     );
//   };

// const getBase64Image = async (url) => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error(`Failed to load image: ${response.statusText}`);
    
//     const blob = await response.blob();
//     return new Promise((resolve) => {
//       const reader = new FileReader();
//       reader.onloadend = () => resolve(reader.result);  // Base64 string
//       reader.readAsDataURL(blob);
//     });
//   } catch (error) {
//     console.error(error);
//     return null;  
//   }
// };

// const preloadImages = async (data) => {
//   const updatedData = await Promise.all(
//     data.map(async (item) => {
//       if (item.type === 'image') {
//         const base64Image = await getBase64Image(item.url);
//         if (!base64Image) {
//           console.warn(`Failed to load image at URL: ${item.url}`);
//         }
//         return { ...item, base64Image };
//       }
//       return item;
//     })
//   );
//   return updatedData;
// };

// const DisplayContent = ({ data }) => (
//   <Document>
//     <Page style={styles.page}>
//       {data.map((item, index) => {
//         if (item.type === 'heading') {
//           return <Text key={index} style={styles.heading}>{item.text}</Text>;
//         }
//         if (item.type === 'subheading') {
//           return <Text key={index} style={styles.subheading}>{item.text}</Text>;
//         }
//         if (item.type === 'text') {
//           return <Text key={index} style={styles.text}>{item.text}</Text>;
//         }
//         if (item.type === 'code') {
//           return <Text key={index} style={styles.code}>{item.text}</Text>;
//         }
//         if (item.type === 'image' && item.base64Image) {
//           return <Image key={index} src={item.base64Image} style={styles.image} />;
//         }
//         return <Text key={index} style={{ color: 'red' }}>Failed to load image</Text>;  // Fallback if image fails
//       })}
//     </Page>
//   </Document>
// );


// const preloadImages = async (data) => {
//   const updatedData = await Promise.all(
//     data.map(async (item) => {
//       if (item.type === 'image') {
//         const base64Image = await getBase64Image(item.url);
//         return { ...item, base64Image };
//       }
//       return item;
//     })
//   );
//   return updatedData;
// };


export default function BlogMain() {
  const [blogData, setBlogData] = useState(null);
  const [userName, setuserName] = useState(null);

  const location = useLocation();
  const { blogData: initialData } = location.state || {}; 
  const { userName: initialUser } = location.state || {}; 

  const pdfRef = useRef();
  useEffect(() => {
    const fetchData = async () => {
      if (initialData) {
        // const preloadedData = await preloadImages(initialData);  
        // console.log('Preloaded Data:', preloadedData);  
        setBlogData(initialData);
      }
      if(initialUser){
        setuserName(initialUser)
      }
    };
    fetchData();
  }, [initialData,initialUser]);



  if (!blogData) {
    return <div>Loading...</div>; 
  }

  const DisplayContentMain = (blogData) => {

    return (
      <div  className='postDisplay' ref={pdfRef} style={{backgroundColor:'black'}}>
        <h2 className='postTiltle'>{
          blogData[0].type ==="PostTitle" ? blogData[0].text : 'New Blog'  }</h2>
          
          <p className='postOwner'>{userName} · Sep-9-2024 · 2 min read</p>
        {
          
       blogData[1].type === 'image' ? <div className='mainBlogImgdiv'><img className='mainBlogImg' src={blogData[1].url} alt='' /></div> :<div className='mainBlogImgdiv'><img className='mainBlogImg' style={{width:'100%'}}  src={require('../../Assets/content.jpeg')} alt=''/></div>
       }
        
        
        {blogData.map((item, index) => {
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

          if (item.type === 'link') {
            return <a href={item.text} target='blank' className='postLink' key={index}>{item.text}</a>;
          }

          if (item.type === 'image' && item.fileName !=='file_1') {
            return <img className='postImg' key={index} src={item.url}  alt=''/>
          }

          return null; 
        })}
      </div>
    );
  };
  const downloadPDF = () => {
    const input = pdfRef.current;
  
    if (!input) {
      console.error('PDF reference is null or undefined.');
      return;
    }
  
    html2canvas(input).then((canvas) => {
      console.log('Canvas size:', canvas.width, canvas.height);  // Debugging
      const imgData = canvas.toDataURL("image/png");
      console.log('Image data URL:', imgData);  // Debugging
  
      const pdf = new jsPDF('p', 'mm', 'a4');  // Changed to 'a4' for standard size
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
  
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
  
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('invoice.pdf');
    }).catch((error) => {
      console.error('Error generating PDF:', error);  // Catch and log errors
    });
  };
  

  return (
    <div className="mainBlogdiv">
      <div>
     
        <div className='exportlogodiv' onClick={()=>{downloadPDF()}}>
        <p className='exportText' >Get a Copy &nbsp;</p> 
          <img  src={exportimg} className='exportlogo' alt="Export" />
        </div>
        
        <div className="content" id="content-to-pdf">
          {
            DisplayContentMain(blogData)
          }
        </div>
      </div>
    </div>
  );
}
