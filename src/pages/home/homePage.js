import React, { useState } from 'react';

const HomePage = () => {
  const [csvFiles, setCsvFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Filter out non-CSV files
    const csvFiles = files.filter(file => file.type === 'text/csv');

    setCsvFiles(prevFiles => [...prevFiles, ...csvFiles]);
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...csvFiles];
    newFiles.splice(index, 1);
    setCsvFiles(newFiles);
  };

  const handleUpload = () => {
    // Implement file upload logic here
    // You can send the csvFiles array to your server or process them as needed
    console.log('Uploading CSV files:', csvFiles);
  };

  const handleProcess = () => {
    // Implement processing logic here
    // You can send the csvFiles array to your server for further processing
    console.log('Processing CSV files:', csvFiles);
  };

  return (
    <div>
      <h1>CSV File Upload</h1>
      <input type="file" accept=".csv" multiple onChange={handleFileChange} />
      
      {csvFiles.length > 0 && (
        <div>
          <h2>Selected Files:</h2>
          <ul>
            {csvFiles.map((file, index) => (
              <li key={index}>
                {file.name}
                <button onClick={() => handleRemoveFile(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={handleUpload}>Upload</button>
          <button onClick={handleProcess}>Process</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
