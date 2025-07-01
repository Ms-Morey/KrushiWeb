import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Notifications = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
      {/* <Header />
      <NavBar /> */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-900 mb-6">Notifications</h1>
        <ul className="list-disc pl-6 text-gray-800 space-y-2">
          <li>Act & Rules: Latest acts and rules related to agriculture in Odisha.</li>
          <li>Circulars & Office Orders: Important circulars and office orders for farmers and officials.</li>
          <li>Memorandum: Official memorandums issued by the department.</li>
          <li>Notification: Recent notifications regarding schemes and policies.</li>
          <li>Resolution: Resolutions passed for the benefit of the agricultural community.</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Notifications; 