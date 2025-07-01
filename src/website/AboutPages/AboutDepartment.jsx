// src/components/AboutDepartment.jsx
import React from 'react';

const AboutDepartment = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-blue-200 font-sans max-w-4xl mx-auto my-8">
      <h2 className="text-3xl text-blue-800 font-bold mb-4">About the Department</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        The Department of Agriculture, Government of Odisha, is committed to the growth and development
        of the agricultural sector in the state. It formulates policies and implements various schemes
        to improve the livelihoods of farmers, boost agricultural productivity, and ensure sustainable
        farming practices.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mt-4">
        Through modern technology, farmer education programs, and subsidies, the department strives
        to make Odisha a leading state in agri-based development. It also coordinates with various
        central government initiatives to ensure holistic support to the farming community.
      </p>
    </div>
  );
};

export default AboutDepartment;
