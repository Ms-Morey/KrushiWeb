import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const schemes = [
  { name: 'Pradhan Mantri Krishi Sinchai Yojana (PMKSY)', desc: 'Improving irrigation and water use efficiency.' },
  { name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)', desc: 'Crop insurance for farmers.' },
  { name: 'Rashtriya Krishi Vikas Yojana (RKVY)', desc: 'Holistic development of agriculture and allied sectors.' },
  { name: 'National Food Security Mission (NFSM)', desc: 'Increase production of rice, wheat, pulses, and coarse cereals.' },
];

const SchemesCentral = () => (
  <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
    <Header />
    <NavBar />
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg border border-[#e0e0e0] p-8">
        <h1 className="text-3xl font-bold mb-4 text-[#216db9]">Centrally Sponsored Schemes</h1>
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

export default SchemesCentral; 