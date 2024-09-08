import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface VitalData {
  SGOT?: number;
  SGPT?: number;
  GGTP?: number;
  Protein?: number;
  Albumin?: number;
  Globulin?: number;
  date?: string;
  [key: string]: any;
}

export const ImageUploaderliver: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const [extractedData, setExtractedData] = useState<VitalData[] | null>(null);
  const [summary, setSummary] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImages(acceptedFiles); // Allow multiple files
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: true });

  const handleUpload = async () => {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('image', image);
    });

    try {
      const response = await fetch('http://13.60.46.23:3000/api/v1/user/uploadliver', {
        method: 'POST',
        body: formData,
      });

      const data: VitalData[] = await response.json();
      setExtractedData(data);
    } catch (error) {
      console.error('Error uploading and processing images:', error);
    }
  };

  const handleInputChange = (index: number, key: string, value: string) => {
    if (extractedData) {
      const updatedData = [...extractedData];
      updatedData[index][key] = value;
      setExtractedData(updatedData);
    }
  };
  const cleanSummary = (text: string) => {
    // Replace or remove unwanted characters such as hashtags
    return text.replace(/#/g, '').trim();
  };

  const handleSummarization = async () => {
    const email = localStorage.getItem('email') || '';

    try {
      const response = await fetch('http://13.60.46.23:3000/api/v1/user/liversummarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          email,
        },
        body: JSON.stringify({ email, data: extractedData }),
      });

      const summary = await response.json();
      setSummary(cleanSummary(summary));
      
      console.log('Summarization Result:', summary);
    } catch (error) {
      console.error('Error during summarization:', error);
    }
  };

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #aaa',
          padding: '20px',
          cursor: 'pointer',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop one or more images here, or click to select</p>
      </div>

      {images.length > 0 && (
        <div>
          <h3>Selected Images:</h3>
          <ul>
            {images.map((image, index) => (
              <li key={index}>{image.name}</li>
            ))}
          </ul>
          <button onClick={handleUpload} style={{ padding: '10px 20px', cursor: 'pointer', marginTop: '10px' }}>
            Upload and Process
          </button>
        </div>
      )}

      {extractedData && (
        <div>
          <h3>Confirm or Edit Extracted Data:</h3>
          {extractedData.map((data, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h4>Image {index + 1}:</h4>
              <form>
                {Object.entries(data).map(([key, value]) => (
                  <div key={key} style={{ marginBottom: '10px' }}>
                    <label>
                      <strong>{key}:</strong>
                      <input
                        type="text"
                        value={value || ''}
                        onChange={(e) => handleInputChange(index, key, e.target.value)}
                        style={{
                          marginLeft: '10px',
                          padding: '5px',
                          border: '1px solid #ccc',
                          borderRadius: '4px',
                        }}
                      />
                    </label>
                  </div>
                ))}
              </form>
            </div>
          ))}
          <button
            onClick={handleSummarization}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Summarize All Vitals
          </button>
        </div>
      )}

      {summary && (
        <div id="summary" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <h3>Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUploaderliver;
