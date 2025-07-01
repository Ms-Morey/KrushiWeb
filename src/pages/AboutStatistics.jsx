import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const stats = [
  { label: 'Total Cultivable Area', value: '64.09 lakh ha' },
  { label: 'Total Cultivated Area', value: '61.50 lakh ha' },
  { label: 'Acidic Soil Area', value: '40.17 lakh ha' },
  { label: 'Salinity Affected Area', value: '4.00 lakh ha' },
  { label: 'Waterlogged Area', value: '3.00 lakh ha' },
  { label: 'Average Rainfall', value: '1452 mm' },
  { label: 'Irrigation Potential (Kharif)', value: '27.63 lakh ha' },
  { label: 'Irrigation Potential (Rabi)', value: '13.31 lakh ha' },
  { label: 'Food Grain Production (2007-08)', value: '92.13 lakh tonnes' },
  { label: 'Main Crop', value: 'Rice' },
];

const AboutStatistics = () => (
  <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
    <Header />
    <NavBar />
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg border border-[#e0e0e0] p-8">
        <h1 className="text-3xl font-bold mb-4 text-[#216db9]">Agriculture Statistics</h1>
        <table className="w-full text-left border-separate border-spacing-y-2">
          <tbody>
            {stats.map((row, idx) => (
              <tr key={idx} className="odd:bg-[#f5f8fd]">
                <td className="py-2 px-4 font-semibold text-[#216db9] w-2/3">{row.label}</td>
                <td className="py-2 px-4 text-gray-800 w-1/3">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
    <Footer />
  </div>
);

export default AboutStatistics; 