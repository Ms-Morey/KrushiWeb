import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const acts = [
  { title: 'Odisha Agriculture Produce Markets Act', year: 1956 },
  { title: 'Odisha Irrigation Act', year: 1959 },
  { title: 'Odisha Land Reforms Act', year: 1960 },
  { title: 'Odisha Agricultural Credit Operations Act', year: 1974 },
  { title: 'Odisha Farmers Welfare Fund Act', year: 2015 },
];

const NotificationsActs = () => (
  <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
    <Header />
    <NavBar />
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg border border-[#e0e0e0] p-8">
        <h1 className="text-3xl font-bold mb-4 text-[#216db9]">Acts & Rules</h1>
        <ul className="space-y-4">
          {acts.map((act, idx) => (
            <li key={idx} className="border-b border-[#e0e0e0] pb-3">
              <span className="font-semibold text-[#216db9]">{act.title}</span>
              <span className="ml-2 text-gray-600">({act.year})</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotificationsActs; 