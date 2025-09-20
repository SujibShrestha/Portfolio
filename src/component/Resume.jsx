import React from 'react';
import { Download } from 'lucide-react';

// Download Button Component
const DownloadButton = ({ 
  fileUrl, 
  fileName = 'download', 
  children = 'Download',
  className = 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25',
  
}) => {
  const handleDownload = () => {
    if (!fileUrl) {
      console.warn('No file URL provided');
      return;
    }

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  

  return (
    <button
      onClick={handleDownload}
      className={`
        inline-flex items-center gap-2 font-medium py-3 px-6 rounded-lg 
        transition-all duration-200 transform hover:scale-105
      
        ${className}
      `}
      disabled={!fileUrl}
    >
      <Download className="w-4 h-4" />
      {children}
    </button>
  );
};

// Your Resume Component
const Resume = () => {
  return (
    <div className="p-8 md:p-0">
      <div className="max-w-4xl mx-auto">
        <div className="text-center ">
    
          
          <DownloadButton 
            fileUrl="src\assets\Resume.pdf" // Replace with your actual resume file path
            fileName="Sujib_Resume.pdf"

          >
            Download Resume
          </DownloadButton>
        </div>


      </div>
    </div>
  );
};

export default Resume;
