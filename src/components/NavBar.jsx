import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about',
    dropdown: [
      { label: 'About Department', path: '/about/department' },
      { label: 'Statistics', path: '/about/statistics' },
      { label: 'Organizational Structure', path: '/about/structure' },
      { label: 'Agro Advisory', path: '/about/advisory' },
      { label: 'Web Directory', path: '/about/web-directory' },
    ],
  },
  {
    label: 'Notification',
    path: '/notifications',
    dropdown: [
      { label: 'Act & Rules', path: '/notifications/acts' },
      { label: 'Circulars & Office Orders', path: '/notifications/circulars' },
      { label: 'Memorandum', path: '/notifications/memorandum' },
      { label: 'Notification', path: '/notifications/notification' },
      { label: 'Resolution', path: '/notifications/resolution' },
    ],
  },
  {
    label: 'Schemes',
    path: '/schemes',
    dropdown: [
      { label: 'Centrally Sponsored Scheme', path: '/schemes/central' },
      { label: 'State Sector Scheme', path: '/schemes/state' },
      { label: 'Externally Aided Projects', path: '/schemes/external' },
    ],
  },
  { label: 'Policies', path: '/policies' },
  { label: 'RTI', path: '/rti' },
  { label: 'Media Gallery', path: '/media' },
  { label: 'Contact Us', path: '/contact' },
];

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="w-full bg-[#216db9] shadow z-30 relative">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center h-12 md:h-14 gap-1 md:gap-2">
          {navItems.map((item, idx) => (
            <li
              key={item.label}
              className="relative group h-full flex items-center"
              onMouseEnter={() => setOpenDropdown(idx)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className="nav-link px-4 py-2 h-full flex items-center text-white font-semibold text-[15px] hover:bg-[#165a96] transition rounded-none border-r border-[#1a5a8a] last:border-r-0"
                style={{ letterSpacing: '0.01em', position: 'relative' }}
              >
                {item.label}
              </Link>
              {item.dropdown && openDropdown === idx && (
                <ul className="absolute left-0 top-full min-w-[220px] bg-[#216db9] text-white shadow-lg rounded-b z-50 border-t-2 border-[#216db9] animate-fadeIn">
                  {item.dropdown.map((sub, subIdx) => (
                    <li key={sub.label}>
                      <Link
                        to={sub.path}
                        className="block px-5 py-2 text-[15px] hover:bg-[#165a96] hover:text-white transition"
                        style={{ borderBottom: subIdx !== item.dropdown.length - 1 ? '1px solid #1a5a8a' : 'none' }}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          nav ul { flex-wrap: wrap; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.18s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 6px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.25s cubic-bezier(.4,0,.2,1);
          pointer-events: none;
        }
        .nav-link:hover::after, .group:hover .nav-link::after {
          transform: scaleX(1);
        }
      `}</style>
    </nav>
  );
};

export default NavBar; 