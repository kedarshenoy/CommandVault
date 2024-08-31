import React from 'react'
import '../../styles/BlogMain.css'
export default function BlogMain() {


  const DisplayContent = () => {
    const data = [
      { text: 'kedar', type: 'code' },
      { text: 'Kedar', type: 'heading' },
      { text: 'dwfwfwf', type: 'text' },
      { text: 'Shenoy', type: 'subheading' },
      { text: 'sqsdqadwfqwfw', type: 'text' },
      {
        fileName: 'file_1',
        type: 'image',
        url: 'https://storage.googleapis.com/commandvault-3277f.appspot.com/code.svg'
      }
    ];
  
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
            return <img key={index} src={item.url} alt={item.fileName} style={{ maxWidth: '100%' }} />;
          }
  
          return null; // Fallback return in case no type matches
        })}
      </div>
    );
  };
  return (
    <div className='mainBlogdiv'>
       <div>
       <h2 className='mainPostHeading'>Name of the Post Goes here</h2>
        {/* <img className='blogmainimg' src={require('../../Assets/content.jpeg')} alt=''/> */}
        <div className='content'>
          {DisplayContent()}
        </div>
        {/* Need to add profile name and photo  */}
        {/* scroll animation  */}
      {/* Download option  */}
       </div>
    </div>
  )
}
