import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const schemes = [
  { name: 'KALIA Scheme', desc: 'Financial assistance to small and marginal farmers.' },
  { name: 'Biju Krushak Kalyan Yojana (BKKY)', desc: 'Health insurance for farmers.' },
  { name: 'Odisha Millet Mission', desc: 'Promoting millet cultivation and consumption.' },
  { name: 'Input Subsidy Scheme', desc: 'Subsidy for seeds, fertilizers, and other inputs.' },
];

const SchemesState = () => (
  <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
    <Header />
    <NavBar />
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg border border-[#e0e0e0] p-8">
        <h1 className="text-3xl font-bold mb-4 text-[#216db9]">State Sector Schemes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schemes.map((scheme, idx) => (
            <div key={idx} className="bg-[#f5f8fd] rounded-lg p-6 border border-[#e0e0e0]">
              <h2 className="text-xl font-bold text-[#216db9] mb-2">{scheme.name}</h2>
              <p className="text-gray-800">{scheme.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default SchemesState; 