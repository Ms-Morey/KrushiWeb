import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const notifications = [
  { title: 'Notice: KALIA Scheme Application Deadline', date: '2024-07-01' },
  { title: 'Weather Advisory for Kharif Season', date: '2024-06-28' },
  { title: 'New Subsidy Rates Announced', date: '2024-06-20' },
  { title: 'Training Program for Farmers', date: '2024-06-15' },
];

const NotificationsNotification = () => (
  <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
    <Header />
    <NavBar />
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg border border-[#e0e0e0] p-8">
        <h1 className="text-3xl font-bold mb-4 text-[#216db9]">Notifications</h1>
        <ul className="space-y-4">
          {notifications.map((note, idx) => (
            <li key={idx} className="border-b border-[#e0e0e0] pb-3">
              <span className="font-semibold text-[#216db9]">{note.title}</span>
              <span className="ml-2 text-gray-600">({new Date(note.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })})</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotificationsNotification; 