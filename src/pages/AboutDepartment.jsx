import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AboutDepartment = () => (
  <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
    <Header />
    <NavBar />
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg border border-[#e0e0e0] p-8">
        <h1 className="text-3xl font-bold mb-4 text-[#216db9]">About the Department</h1>
        <p className="text-gray-800 text-lg leading-relaxed mb-2">
          The Department of Agriculture & Farmers' Empowerment, Government of Odisha, is dedicated to the growth and development of the agricultural sector in the state. The department formulates policies and implements various schemes to improve the livelihoods of farmers, boost agricultural productivity, and ensure sustainable farming practices.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed mb-2">
          Through modern technology, farmer education programs, and subsidies, the department strives to make Odisha a leading state in agri-based development. It also coordinates with various central government initiatives to ensure holistic support to the farming community.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed">
          The department is committed to empowering farmers, advancing technology, and ensuring sustainable growth for Odisha's agricultural community.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default AboutDepartment; 