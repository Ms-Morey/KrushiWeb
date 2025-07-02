import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
      <Header />
      <NavBar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-900 mb-6">Contact Us</h1>
        <div className="mb-4 text-lg text-gray-800">
          <p>Department of Agriculture & Farmers' Empowerment</p>
          <p>Government of Odisha</p>
          <p>Krushi Bhawan, Keshari Nagar, Bhubaneswar, Odisha - 751001</p>
          <p>Phone: 0674-2391325</p>
          <p>Email: agrsec.od@nic.in</p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-green-800 mb-2">Feedback / Query</h2>
          <form className="bg-white rounded shadow p-6 flex flex-col gap-4 max-w-lg">
            <input type="text" placeholder="Your Name" className="border rounded px-3 py-2" />
            <input type="email" placeholder="Your Email" className="border rounded px-3 py-2" />
            <textarea placeholder="Your Message" className="border rounded px-3 py-2" rows={4}></textarea>
            <button type="submit" className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800">Send</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact; 