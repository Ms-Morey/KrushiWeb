import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const policies = [
  { title: 'Odisha Agriculture Policy 2013', desc: 'Aims to increase farmers income and promote sustainable agriculture.' },
  { title: 'National Agriculture Policy', desc: 'Focuses on growth, equity, and sustainability in agriculture.' },
  { title: 'State Organic Farming Policy', desc: 'Promotes organic farming practices in Odisha.' },
];

const Policies = () => (
  <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
    <Header />
    <NavBar />
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg border border-[#e0e0e0] p-8">
        <h1 className="text-3xl font-bold mb-4 text-[#216db9]">Policies</h1>
        <ul className="space-y-6">
          {policies.map((policy, idx) => (
            <li key={idx} className="border-b border-[#e0e0e0] pb-4">
              <h2 className="text-xl font-bold text-[#216db9] mb-1">{policy.title}</h2>
              <p className="text-gray-800">{policy.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
    <Footer />
  </div>
);

export default Policies; 