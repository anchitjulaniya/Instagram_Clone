import React from 'react';

const Footer = () => {
    
    
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* First Row - Links */}
        <div className="flex flex-wrap justify-center space-x-4 text-gray-500 text-sm mb-4">
          <a href="#" className="hover:underline">Meta</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">API</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Locations</a>
          <a href="#" className="hover:underline">Instagram Lite</a>
          <a href="#" className="hover:underline">Threads</a>
          <a href="#" className="hover:underline">Contact uploading and non-users</a>
          <a href="#" className="hover:underline">Meta Verified</a>
        </div>

        {/* Second Row - Language and Copyright */}
        <div className="flex justify-center items-center space-x-4 text-gray-500 text-sm">
          <span>English (UK)</span>
          <span>&copy; 2024 Instagram from Meta</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
