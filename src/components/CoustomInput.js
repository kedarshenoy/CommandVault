
////////////////////////////////////////////
import React, { useRef, useEffect } from "react";
import CommandImg from '../Assets/icons/code.svg'
import Link from '../Assets/icons/copy.svg'
import H1 from '../Assets/icons/h1.svg'
import H2 from '../Assets/icons/h2.svg'
import Image from '../Assets/icons/image.svg'
import '../styles/Takepost.css'

function CustomInput() {
  const contentEditableRef = useRef(null);

  const focusAndPlaceCursor = () => {
    const contentDiv = contentEditableRef.current;
    if (contentDiv) {
      contentDiv.focus();
      const range = document.createRange();
      const selection = window.getSelection();
      range.setStart(contentDiv.firstChild, 0);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  useEffect(() => {
    focusAndPlaceCursor();
  }, []);

  // const addStyledInputBox = (style, placeholder) => {
  //   const inputWrapper = document.createElement("div");
  //   inputWrapper.setAttribute("contentEditable", "false");
  //   inputWrapper.style.marginBottom = "10px";
  //   inputWrapper.style.paddingRight = "10px";
  //   inputWrapper.style.width = "95%";

  //   Object.assign(inputWrapper.style, style.wrapperStyle);

  //   const inputElement = document.createElement("input");
  //   inputElement.setAttribute("type", "text");
  //   inputElement.setAttribute("placeholder", placeholder);
  //   Object.assign(inputElement.style, style.inputStyle);

  //   const removeButton = document.createElement("button");
  //   removeButton.textContent = "x";
  //   removeButton.onclick = () => inputWrapper.remove();

  //   Object.assign(removeButton.style, {
  //     backgroundColor: "transparent",
  //     border: "none",
  //     color: "red",
  //     fontSize: "16px",
  //     cursor: "pointer",
  //     padding: "0",
  //     marginLeft: "5px",
  //   });

  //   inputWrapper.appendChild(inputElement);
  //   inputWrapper.appendChild(removeButton);

  //   const contentDiv = contentEditableRef.current;
  //   if (contentDiv) {
  //     const br = document.createElement("br");
  //     contentDiv.appendChild(inputWrapper);
  //     contentDiv.appendChild(br);
  //     contentDiv.focus();
  //     const range = document.createRange();
  //     const selection = window.getSelection();
  //     range.setStartAfter(inputWrapper);
  //     range.collapse(true);
  //     selection.removeAllRanges();
  //     selection.addRange(range);
  //   }
  // };


  const addStyledInputBox = (style, placeholder, type) => {
    const inputWrapper = document.createElement("div");
    inputWrapper.setAttribute("contentEditable", "false");
    inputWrapper.setAttribute("data-type", type); // Set the data-type attribute
    inputWrapper.style.marginBottom = "10px";
    inputWrapper.style.paddingRight = "10px";
    inputWrapper.style.width = "95%";
  
    Object.assign(inputWrapper.style, style.wrapperStyle);
  
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("placeholder", placeholder);
    Object.assign(inputElement.style, style.inputStyle);
  
    const removeButton = document.createElement("button");
    removeButton.textContent = "x";
    removeButton.onclick = () => inputWrapper.remove();
  
    Object.assign(removeButton.style, {
      backgroundColor: "transparent",
      border: "none",
      color: "red",
      fontSize: "16px",
      cursor: "pointer",
      padding: "0",
      marginLeft: "5px",
    });
  
    inputWrapper.appendChild(inputElement);
    inputWrapper.appendChild(removeButton);
  
    const contentDiv = contentEditableRef.current;
    if (contentDiv) {
      const br = document.createElement("br");
      contentDiv.appendChild(inputWrapper);
      contentDiv.appendChild(br);
      contentDiv.focus();
      const range = document.createRange();
      const selection = window.getSelection();
      range.setStartAfter(inputWrapper);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };
  
const addLinkInputBox = () =>
    addStyledInputBox(
      {
        wrapperStyle: {
          border: "1px solid #87CEEB",
          borderRadius: "10px",
          display:'flex',
          justifyContent:'space-between'
        },
        inputStyle: {
          width: "80%",
          fontSize: "16px",
          color: "pink",
          border: "none",
        },
      },
      "Paste Link",
      "link"
    );

  const addFileInputBox = () => {
    const inputWrapper = document.createElement("div");
    inputWrapper.setAttribute("contentEditable", "false");
    inputWrapper.setAttribute("data-type", "image");
    inputWrapper.style.marginBottom = "10px";
    inputWrapper.style.border = "1px solid #FF4500"; // Pink border for the file input
    inputWrapper.style.width = "95%"; // 95% width for the input wrapper
    inputWrapper.style.borderRadius = "10px";
    inputWrapper.style.paddingRight = "10px";
    inputWrapper.style.display = "flex"; // Align input and button in the same line
    inputWrapper.style.alignItems = "center"; // Vertically align items
    inputWrapper.style.justifyContent ="space-between";
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "file");
    inputElement.style.width = "95%"; // Slightly reduced width to make space for the button
    inputElement.style.border = "none"; // Remove any default border
    inputElement.style.padding = "5px"; // Optional: add some padding for better spacing

    const removeButton = document.createElement("button");
    removeButton.textContent = "x";
    removeButton.onclick = () => inputWrapper.remove();

    Object.assign(removeButton.style, {
      backgroundColor: "transparent",
      border: "none",
      color: "red",
      fontSize: "16px",
      cursor: "pointer",
      padding: "0",
      marginLeft: "10px", // Add some spacing between the input and the button
      flexShrink: "0", // Prevent the button from shrinking
    });

    inputWrapper.appendChild(inputElement);
    inputWrapper.appendChild(removeButton);

    const contentDiv = contentEditableRef.current;
    if (contentDiv) {
      const br = document.createElement("br");
      contentDiv.appendChild(inputWrapper);
      contentDiv.appendChild(br);
      contentDiv.focus();
      const range = document.createRange();
      const selection = window.getSelection();
      range.setStartAfter(inputWrapper);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const addNormalInputBox = () =>
    addStyledInputBox(
      {
        wrapperStyle: {
          border: "2px solid #00FFFF",
          borderRadius: "10px",
                    display:'flex',
          justifyContent:'space-between'
        },
        inputStyle: {
          width: "80%",
          fontSize: "16px",
          color: "pink",
          border: "none",
        },
      },
      "Add Command",
      "Code"
    );

  const addHeadingInputBox = () =>
    addStyledInputBox(
      {
        wrapperStyle: {
          border: "1px solid #FFC0CB",
          // padding: "10px",
          backgroundColor: "transparent",
          borderRadius: "10px",
                    display:'flex',
          justifyContent:'space-between'
        },
        inputStyle: {
          width: "80%",
          fontSize: "24px",
          fontWeight: "bold",
          color: "white",
          border: "none",
        },
      },
      "Add Heading",
      "Heading"
    );

  const addSubheadingInputBox = () =>
    addStyledInputBox(
      {
        wrapperStyle: {
          border: "1px solid #00FF00",
          // padding: "8px",
          backgroundColor: "transparent",
          color: "white",
          borderRadius: "10px",
                    display:'flex',
          justifyContent:'space-between'
        },
        inputStyle: {
          width: "80%",
          fontSize: "20px",
          fontWeight: "bold",
          color: "white",
          border: "none",
        },
      },
      "Add Subheading",
      "Subheading"
    );



    // const getDocumentContent = () => {
    //   const contentDiv = contentEditableRef.current;
    //   if (!contentDiv) return null;
    
    //   const documentContent = [];
    
    //   // Iterate through the child nodes of the content div
    //   contentDiv.childNodes.forEach(node => {
    //     if (node.nodeType === Node.ELEMENT_NODE) {
    //       const type = node.getAttribute('data-type');
    
    //       if (type) {
    //         if (type === 'image') {
    //           // Handle image inputs
    //           const fileInput = node.querySelector('input[type="file"]');
    //           if (fileInput && fileInput.files.length > 0) {
    //             const file = fileInput.files[0];
    //             // TODO: Upload the file to a server or convert it to a base64 string as needed
    //             // For demonstration, we'll use the file name
    //             documentContent.push({
    //               text: file.name,
    //               type: "image"
    //             });
    //           }
    //         } else {
    //           // Handle other input types (text-based)
    //           const input = node.querySelector('input[type="text"]');
    //           if (input) {
    //             const text = input.value.trim();
    //             if (text) {
    //               documentContent.push({
    //                 text: text,
    //                 type: type
    //               });
    //             }
    //           }
    //         }
    //       } else {
    //         // Handle plain text within <p> tags or direct text nodes
    //         if (node.nodeName === 'P') {
    //           const text = node.innerText.trim();
    //           if (text) {
    //             documentContent.push({
    //               text: text,
    //               type: "text"
    //             });
    //           }
    //         } else if (node.nodeName === 'BR') {
    //           // Ignore <br> tags
    //         } else {
    //           // Handle any other element types as plain text
    //           const text = node.innerText.trim();
    //           if (text) {
    //             documentContent.push({
    //               text: text,
    //               type: "text"
    //             });
    //           }
    //         }
    //       }
    //     } else if (node.nodeType === Node.TEXT_NODE) {
    //       const text = node.textContent.trim();
    //       if (text) {
    //         documentContent.push({
    //           text: text,
    //           type: "text"
    //         });
    //       }
    //     }
    //   });
    
    //   return { documentContent };
    // };

    
    // const collectDocumentContent = () => {
    //   const contentDiv = contentEditableRef.current;
    //   if (!contentDiv) return [];
    
    //   const documentContent = [];
    //   const children = contentDiv.children;
    
    //   Array.from(children).forEach((child) => {
    //     if (child.nodeName === "DIV") {
    //       const inputElement = child.querySelector("input[type='text'], input[type='file']");
    //       if (inputElement) {
    //         const placeholder = inputElement.getAttribute("placeholder");
    //         let type = "text";
    //         if (placeholder === "Add Heading") {
    //           type = "heading";
    //         } else if (placeholder === "Add Subheading") {
    //           type = "subheading";
    //         } else if (placeholder === "Add Command") {
    //           type = "code";
    //         } else if (inputElement.type === "file") {
    //           const file = inputElement.files[0];
    //           if (file) {
    //             documentContent.push({
    //               type: "file",
    //               file, // include the file object
    //               name: file.name, // file name for reference
    //             });
    //           }
    //           return; // Skip adding text info for the file input
    //         }
    //         documentContent.push({
    //           text: inputElement.value || placeholder,
    //           type,
    //         });
    //       }
    //     }
    //   });
    
    //   return documentContent;
    // };

    // const collectDocumentContent = () => {
    //   const contentDiv = contentEditableRef.current;
    //   if (!contentDiv) return [];
    
    //   const documentContent = [];
    
    //   // Capture plain text from the content-editable div
    //   const plainText = contentDiv.innerText.trim();
    //   if (plainText) {
    //     documentContent.push({
    //       text: plainText,
    //       type: "text",
    //     });
    //   }
    
    //   // Iterate over dynamic input boxes
    //   const children = contentDiv.children;
    //   Array.from(children).forEach((child) => {
    //     if (child.nodeName === "DIV") {
    //       const inputElement = child.querySelector("input[type='text'], input[type='file']");
    //       if (inputElement) {
    //         const placeholder = inputElement.getAttribute("placeholder");
    //         let type = "text";
    //         if (placeholder === "Add Heading") {
    //           type = "heading";
    //         } else if (placeholder === "Add Subheading") {
    //           type = "subheading";
    //         } else if (placeholder === "Add Command") {
    //           type = "code";
    //         } else if (inputElement.type === "file") {
    //           const file = inputElement.files[0];
    //           if (file) {
    //             documentContent.push({
    //               type: "file",
    //               file, // include the file object
    //               name: file.name, // file name for reference
    //             });
    //           }
    //           return; // Skip adding text info for the file input
    //         }
    //         documentContent.push({
    //           text: inputElement.value || placeholder,
    //           type,
    //         });
    //       }
    //     }
    //   });
    
    //   return documentContent;
    // };
    

    const collectDocumentContent = () => {
      const contentDiv = contentEditableRef.current;
      if (!contentDiv) return [];
    
      const documentContent = [];
    
      const children = contentDiv.childNodes;
    
      children.forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          // Capture plain text nodes
          const text = child.textContent.trim();
          if (text) {
            documentContent.push({
              text: text,
              type: "text",
            });
          }
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          if (child.nodeName === "DIV") {
            const inputElement = child.querySelector("input[type='text'], input[type='file']");
            if (inputElement) {
              const placeholder = inputElement.getAttribute("placeholder");
              let type = "text";
              if (placeholder === "Add Heading") {
                type = "heading";
              } else if (placeholder === "Add Subheading") {
                type = "subheading";
              } else if (placeholder === "Add Command") {
                type = "code";
              } else if (inputElement.type === "file") {
                const file = inputElement.files[0];
                if (file) {
                  documentContent.push({
                    type: "file",
                    file, // include the file object
                    name: file.name, // file name for reference
                  });
                }
                return; // Skip adding text info for the file input
              }
              documentContent.push({
                text: inputElement.value || placeholder,
                type,
              });
            }
          }
        }
      });
    
      return documentContent;
    };
    
    const handleSave = () => {
      const documentContent = collectDocumentContent();
      
      const formData = new FormData();
    
      documentContent.forEach((item, index) => {
        if (item.type === "file") {
          formData.append(`file_${index}`, item.file);
          
        } else {
          formData.append(`content_${index}`, JSON.stringify(item));
        }
      });
      // Example API call
      fetch("http://192.168.1.15:5000/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("API Response:", data);
        })
        .catch((error) => {
          console.error("Error uploading document:", error);
        });
    };
    


  return (
    <div style={styles.editorContainer}>
      <div style={styles.header}>
        
          <button className='AddbtnPost' style={styles.button} onClick={addNormalInputBox}>
            <img src={CommandImg} alt='' style={styles.icon} className="iconsAdd"/>
            Add Command
          </button>
          <button className='AddbtnPost' style={styles.button} onClick={addHeadingInputBox}>
            <img src={H1} alt='' style={styles.icon} className="iconsAdd"/>

            Add Heading
          </button>
          <button className='AddbtnPost' style={styles.button} onClick={addSubheadingInputBox}>
            <img src={H2} alt='' style={styles.icon} className="iconsAdd"/>

            Add Subheading
          </button>
          <button className='AddbtnPost' style={styles.button} onClick={addFileInputBox}>
            <img src={Image} alt='' style={styles.icon} className="iconsAdd"/>

            Add Image
          </button>
          <button className='AddbtnPost' style={styles.button} onClick={addLinkInputBox}>
            <img src={Link} alt='' style={styles.icon} className="iconsAdd"/>
            Add Link
          </button>
        
      </div>
      <div
        ref={contentEditableRef}
        contentEditable
        suppressContentEditableWarning
        style={styles.textArea}
      >
        <p></p>
      </div>

      <button onClick={()=>{console.log(handleSave())}}> LOG DATA</button>
    </div>
  );
}

const styles = {
  editorContainer: {
    position: "relative",
  },
  header: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap:'10px',
    marginBottom: "20px",
  },
  icon: {
    // width: '1.5rem',
    // height: '1.5rem',
    // marginRight: '10px',
  },
  // addButton: {
  //   fontSize: "16px",
  //   fontWeight: '700',
  //   backgroundColor: "transparent",
  //   color: "silver",
  //   border: "1px solid silver",
  //   // padding: "10px",
  //   borderRadius: "5px",
  //   cursor: "pointer",
  //   marginRight: "10px",
  // },
  headingButton: {
    fontSize: "16px",
    backgroundColor: "transparent",
    color: "silver",
    fontWeight: '700',
    border: "1px solid silver",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  subheadingButton: {
    fontSize: "16px",
    // backgroundColor: "#007BFF",
    // color: "white",
    backgroundColor: 'transparent',
    color: 'silver',
    border: "1px solid silver",
    // border: "none",
    fontWeight: '700',
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  linkButton: {
    fontSize: "16px",
    // backgroundColor: "#800080", // Purple background for the button
    // color: "white",
    backgroundColor: 'transparent',
    // background: 'linear-gradient(45deg, #1e3c72, #2a5298)',
    color: 'silver',
    fontWeight: '700',
    border: "1px solid silver",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  fileButton: {
    fontSize: "16px",
    fontWeight: '700',

    // backgroundColor: "#FFC107",
    // color: "white",
    backgroundColor: 'transparent',

    color: 'silver',
    // boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF',
    border: "1px solid silver",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",

  },
  textArea: {
    // width: "100%",
    minHeight: "300px",
    fontSize: "16px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    overflowY: "auto",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    color: "white",
    textAlign: 'left',
    // backgroundColor:'rgb(1, 1, 1,0.5)'
  },
  button: {
    fontWeight: '700',
    backgroundColor: "transparent",
    color: "silver",
    border: "1px solid silver",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },

};

export default CustomInput;
