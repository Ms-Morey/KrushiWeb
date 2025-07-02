import React from 'react';
import logo from '../assets/logo.png';
import cmOdisha from '../assets/cm-odisha.png';
// Import all needed icons as React components or images
import searchIcon from '../assets/ico-site-search.png';
import skipIcon from '../assets/ico-skip.png';
import screenReaderIcon from '../assets/screen-reader.png';
import accessibilityIcon from '../assets/ico-accessibility.png';
import sitemapIcon from '../assets/ico-sitemap.png';

const Header = () => {
  return (
    <header className="w-full">
      {/* Pixel-perfect Top Header Bar */}
      <div className="bg-[#1d1f1e] border-b border-[#d3d3d3] text-xs text-[#333] font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-2 h-[60px]">
            {/* Left: Government links */}
            <div className="flex items-center">
            <ul className="flex items-center space-x-4">
                <li>
                <a
                    href="#"
                    title="Government of Odisha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-[16px] hover:underline border-r border-white pr-4"
                >
                    Government of Odisha
                </a>
                </li>
                <li>
                <a
                    href="#"
                    title="ଓଡ଼ିଶା ସରକାର"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-[16px] hover:underline"
                >
                    ଓଡ଼ିଶା ସରକାର
                </a>
                </li>
            </ul>
            </div>

            {/* Right: Utility links and icons */}
            <div className="flex items-center">
            <ul className="flex items-center space-x-4" id="header-nav">
                <li>
                <a href="#" title="Login" target="_blank" rel="noopener noreferrer" className="text-white text-[16px] hover:underline">
                    Login
                </a>
                </li>
                <li>
                <a href="#" title="Registration" target="_blank" rel="noopener noreferrer" className="text-white text-[16px] hover:underline">
                    Register
                </a>
                </li>
                <li>
                <a href="#" title="Site Search">
                    <img src={searchIcon} alt="Site Search" className="h-5 w-8 inline" />
                </a>
                </li>
                <li>
                <a href="#skipCont" title="Skip to main content">
                    <img src={skipIcon} alt="Skip to main content" className="h-5 w-8 inline" />
                </a>
                </li>
                <li>
                <a href="/screen-reader" title="Screen Reader Access">
                    <img src={screenReaderIcon} alt="Screen Reader Access" className="h-5 w-8 inline" />
                </a>
                </li>

                {/* Accessibility Dropdown */}
                <li className="relative group">
                <a href="#" title="Accessibility Dropdown">
                    <img src={accessibilityIcon} alt="Accessibility Dropdown" className="h-5 w-8 inline" />
                </a>
                <ul className="absolute right-0 top-full bg-white border border-gray-200 shadow-lg rounded mt-1 min-w-[120px] z-50 hidden group-hover:block">
                    <li><a className="block px-3 py-1 hover:bg-gray-100" title="Increase font size" href="#">A<sup>+</sup></a></li>
                    <li><a className="block px-3 py-1 hover:bg-gray-100" title="Reset font size" href="#">A<sup>&nbsp;</sup></a></li>
                    <li><a className="block px-3 py-1 hover:bg-gray-100" title="Decrease font size" href="#">A<sup>-</sup></a></li>
                    <li><a className="block px-3 py-1 hover:bg-gray-100" href="#" title="High Contrast">A</a></li>
                    <li><a className="block px-3 py-1 hover:bg-gray-100" href="#" title="Normal Contrast">A</a></li>
                </ul>
                </li>

                <li>
                <a href="/sitemap" title="Sitemap">
                    <img src={sitemapIcon} alt="Sitemap" className="h-5 w-8 inline" />
                </a>
                </li>
                <li>
                <a
                    href="/or"
                    className="text-white text-[16px] hover:underline border-r border-white pr-4"
                    hreflang="or"
                    data-drupal-link-system-path="<front>"
                    title="Select Language"
                >
                    ଓଡ଼ିଆ
                </a>
                </li>
            </ul>
            </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white w-full border-b border-[#d3d3d3]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-2 px-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Odisha Logo" className="h-16 w-auto" />
            <div className="flex flex-col">
              <span className="text-[1.15rem] md:text-2xl font-bold text-[#1b5e20] leading-tight">DEPARTMENT OF AGRICULTURE &<br className="hidden md:block"/> FARMERS' EMPOWERMENT</span>
              <span className="text-xs md:text-sm text-[#333] font-medium">Government of Odisha</span>
            </div>
          </div>
          {/* Chief Minister Section */}
          <div className="flex items-center gap-3 ">
            <div className="flex flex-col text-right mr-2">
              <a href="#" className="text-[1rem] font-semibold text-[#1b5e20] leading-tight hover:underline">Shri Mohan Charan Majhi<br/>
                <span className="block text-xs text-[#333] font-normal">Hon'ble Chief Minister</span>
              </a>
            </div>
            <img src={cmOdisha} alt="Shri Mohan Charan Majhi" title="Shri Mohan Charan Majhi" width={90} height={90} className="bg-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 