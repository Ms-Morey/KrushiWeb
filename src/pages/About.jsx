import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
      <Header />
      <NavBar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-900 mb-6">About the Department</h1>
        <p className="mb-4 text-lg text-gray-800">The Department of Agriculture & Farmers' Empowerment, Government of Odisha, is dedicated to the growth and development of the agricultural sector in the state. The department formulates policies and implements various schemes to improve the livelihoods of farmers, boost agricultural productivity, and ensure sustainable farming practices.</p>
        <p className="mb-4 text-lg text-gray-800">Through modern technology, farmer education programs, and subsidies, the department strives to make Odisha a leading state in agri-based development. It also coordinates with various central government initiatives to ensure holistic support to the farming community.</p>
        <p className="mb-4 text-lg text-gray-800">The department is committed to empowering farmers, advancing technology, and ensuring sustainable growth for Odisha's agricultural community.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About; 