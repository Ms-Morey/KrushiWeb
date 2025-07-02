import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Schemes = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
      <Header />
      <NavBar />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-900 mb-6">Schemes</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-2">KALIA Scheme</h2>
          <p className="mb-4 text-gray-800">Krushak Assistance for Livelihood and Income Augmentation (KALIA) is a flagship scheme of the Government of Odisha to accelerate agricultural prosperity and reduce poverty in the State. The scheme provides financial assistance to small and marginal farmers, landless agricultural households, and vulnerable agricultural families.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-2">PM-KISAN</h2>
          <p className="mb-4 text-gray-800">Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Sector Scheme with 100% funding from the Government of India. Under the scheme, income support of Rs.6000/- per year is provided to all farmer families across the country in three equal installments.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-green-800 mb-2">Crop Insurance</h2>
          <p className="mb-4 text-gray-800">The Government of Odisha implements various crop insurance schemes to provide financial support to farmers in the event of crop failure due to natural calamities, pests, and diseases.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schemes; 