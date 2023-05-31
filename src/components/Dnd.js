import React, { useState } from 'react';

import EG from "../images/Excelgray.png";
import EV from "../images/Excelverde.png";
import '../styles/masive.css';

const DndropImage = () => {
    
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

      
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
      };
    
    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append('file', selectedFile);
    
        const xhr = new XMLHttpRequest();
    
    
    
        // Request completed event handler
        xhr.addEventListener('load', () => {
          // Handle the response from the server
          console.log(xhr.responseText);
        });
    
        // Send the file to the server using an HTTP request
        xhr.open('POST', '/upload');
        xhr.send(formData);
      };
    
    const Evsource = {EV}
  
    const inputClassName = isHovered ? 'custom-file-input input[type="file"]' : 'custom-file-input input[type="file"]';
    const imageSource = isHovered ? EV : EG;
  
    return (
      <div className="custom-file-input" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
         <input
                type="file"
                onChange={handleFileChange}
                className={inputClassName}
                placeholder="Arrastra tu Archivo de Excel o haz click sobre el icono para seleccionarlo" 
        />
        <img src={imageSource} className="eimage" alt="eimage" />
      </div>
    );
  };

export default DndropImage;