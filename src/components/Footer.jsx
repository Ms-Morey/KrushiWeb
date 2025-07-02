import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#216db9] text-white pt-6 pb-3 mt-8 w-full border-t border-[#165a96]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="flex flex-wrap gap-4 md:gap-8 items-center text-sm font-medium">
          <a href="#" className="hover:underline">Website Policy</a>
          <a href="#" className="hover:underline">Disclaimer</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Copyright Policy</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-3 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-blue-100 opacity-90">
        <div className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Department of Agriculture & Farmers' Empowerment, Government of Odisha. All Rights Reserved.
        </div>
        <div className="text-center md:text-right mt-2 md:mt-0">
          Designed and Developed by <a href="https://nic.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">NIC, Odisha</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 