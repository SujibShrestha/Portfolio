import React from 'react';
import { Download } from 'lucide-react';

// Download Button Component
const DownloadButton = ({ 
  fileUrl, 
  fileName = 'download', 
  children = 'Download',
  className = '',
  variant = 'primary'
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

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25';
      case 'secondary':
        return 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500';
      case 'outline':
        return 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent';
      case 'minimal':
        return 'text-blue-400 hover:text-blue-300 hover:bg-gray-800/50 bg-transparent';
      default:
        return 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl';
    }
  };

  return (
    <button
      onClick={handleDownload}
      className={`
        inline-flex items-center gap-2 font-medium py-3 px-6 rounded-lg 
        transition-all duration-200 transform hover:scale-105
        ${getVariantStyles()}
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
            fileUrl="/resume.pdf" // Replace with your actual resume file path
            fileName="John_Doe_Resume.pdf"
            variant="primary"
          >
            Download Resume
          </DownloadButton>
        </div>


      </div>
    </div>
  );
};

export default Resume;
