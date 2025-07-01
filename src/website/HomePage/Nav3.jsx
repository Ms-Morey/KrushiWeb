import React from 'react';

const Nav3 = () => {
  return (
    <nav className="bg-blue-600 text-white font-semibold">
      <ul className="flex justify-center items-center gap-6 h-12 relative">
        <NavItem label="Home" />
        <NavItem label="About us" dropdown={['About Department', 'Statistics', 'Organizational Structure','Agro Advisory', 'Web Directory']} />
        <NavItem label="Notification" dropdown={['Act & Rules', 'Circulars & Office Orders', 'Memorandum', 'Notification', 'Resolution']} />
        <NavItem label="Publication" dropdown={['Activity Report', 'Outcome Budget', 'PSUs Annual Report', 'Others']}/>
        <NavItem label="Schemes" dropdown={['Centrally Sponsored Scheme', 'State Sector Scheme', 'Externally Aided Projects']} />
        <NavItem label="Policies" />
        <NavItem label="RTI"  dropdown={['Citezen Charter']}/>
        <NavItem label="Media Gallery"dropdown={['New clipping', 'Photo Gallery']} />
        <NavItem label="Contact us" />
        <NavItem label="Directorate" dropdown={['Directorate of Agriculture & Food Production', 'Directorate of Horticulture', 'Directorate of Soil Conservation & Wateshe Development']} />
        <NavItem label="PSUs" dropdown={['OSCC', 'OSSOPCA', 'OAIC','APICOL', 'OSCDC']} />
      </ul>
    </nav>
  );
};

const NavItem = ({ label, dropdown = [] }) => {
  return (
    <li className="relative group cursor-pointer">
      <div className="px-3 py-2 hover:bg-blue-700 transition">{label}</div>

      {dropdown.length > 0 && (
        <ul className="absolute top-full left-0 mt-1 bg-blue-600 text-white font-semibold shadow-lg rounded-md min-w-[180px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-50">
          {dropdown.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 text-sm border-b border-blue-300 last:border-none"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Nav3;
