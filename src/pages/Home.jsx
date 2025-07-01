import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import BannerCarousel from '../components/BannerCarousel';
import Footer from '../components/Footer';

const notifications = [
  { text: "Odisha government launches new scheme for farmers' welfare.", date: "2024-07-01" },
  { text: "Training program for sustainable agriculture announced.", date: "2024-06-28" },
  { text: "Weather advisory for the upcoming Kharif season released.", date: "2024-06-25" },
  { text: "Important: Submit your crop insurance applications by July 15.", date: "2024-06-20" },
  { text: "New fertilizer subsidy rates effective from August 1.", date: "2024-06-15" },
  { text: "Krushi Bhawan to host Agri-Tech Expo on August 10.", date: "2024-06-10" },
  { text: "Soil Health Card distribution drive starts July 5.", date: "2024-06-05" },
];

// Animated NEW badge
const NewBadge = () => {
  const [isRed, setIsRed] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setIsRed((r) => !r), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span
      className={`text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wider animate-pulse select-none shadow-sm`}
      style={{
        background: isRed ? '#e53935' : '#1976d2',
        color: '#fff',
        transition: 'background 0.5s',
        marginRight: 8,
        minWidth: 36,
        display: 'inline-block',
        textAlign: 'center',
        boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
        letterSpacing: '0.08em',
      }}
    >
      NEW
    </span>
  );
};

const NOTIF_ITEM_HEIGHT = 56; // px
const NOTIF_HEADER_HEIGHT = 44; // px
const NOTIF_VISIBLE_COUNT = 4.5;

const Home = () => {
  const bannerRef = useRef(null);
  const [notifHeight, setNotifHeight] = useState(NOTIF_HEADER_HEIGHT + NOTIF_ITEM_HEIGHT * NOTIF_VISIBLE_COUNT);

  useEffect(() => {
    function updateHeight() {
      if (bannerRef.current) {
        // Keep the notification panel height at least enough for 3 items + header, but not more than banner
        const minHeight = NOTIF_HEADER_HEIGHT + NOTIF_ITEM_HEIGHT * NOTIF_VISIBLE_COUNT;
        setNotifHeight(Math.max(minHeight, bannerRef.current.offsetHeight));
      }
    }
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
      <Header />
      <NavBar />
      {/* Banner and Notifications Row */}
      <div className="w-full max-w-7xl mx-auto px-4 mt-4 flex flex-col md:flex-row gap-6">
        {/* Banner Carousel */}
        <div className="flex-1 min-w-0" ref={bannerRef}>
          <BannerCarousel />
        </div>
        {/* Latest Notifications - pixel-perfect */}
        <aside
          className="w-full md:w-[340px] bg-white rounded shadow h-fit border border-[#e0e0e0] flex flex-col"
          style={{ borderLeft: '6px solid #216db9', height: notifHeight }}
        >
          <div className="rounded-t px-4 py-2 flex items-center" style={{ minHeight: `${NOTIF_HEADER_HEIGHT}px`, background: '#216db9' }}>
            <h2 className="text-base font-bold text-white tracking-wide m-0" style={{letterSpacing: '0.04em'}}>Latest Notifications</h2>
          </div>
          <ul
            className="divide-y divide-[#e0e0e0] overflow-y-auto custom-scrollbar"
            style={{ flex: 1, minHeight: 0, maxHeight: NOTIF_ITEM_HEIGHT * NOTIF_VISIBLE_COUNT }}
          >
            {notifications.map((note, idx) => (
              <li key={idx} className="flex items-start gap-3 px-4 py-3" style={{ minHeight: `${NOTIF_ITEM_HEIGHT}px` }}>
                <NewBadge />
                <div className="flex-1">
                  <span className="block text-[15px] text-[#222] leading-snug font-medium" style={{letterSpacing: '0.01em'}}>{note.text}</span>
                  <span className="block text-xs text-[#888] mt-1" style={{ fontSize: '12px', letterSpacing: '0.01em' }}>
                    {new Date(note.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      {/* Main Content Sections - pixel-perfect */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Department Card */}
        <section className="md:col-span-2 bg-white rounded-xl shadow-lg border border-[#e0e0e0] p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-[#216db9]">About the Department</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-2">
            The Department of Agriculture & Farmers' Empowerment, Government of Odisha, is dedicated to the growth and development of the agricultural sector in the state. The department formulates policies and implements various schemes to improve the livelihoods of farmers, boost agricultural productivity, and ensure sustainable farming practices.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Through modern technology, farmer education programs, and subsidies, the department strives to make Odisha a leading state in agri-based development. It also coordinates with various central government initiatives to ensure holistic support to the farming community.
          </p>
        </section>
        {/* Quick Links */}
        <aside className="bg-white rounded-xl shadow-lg border border-[#e0e0e0] p-6 flex flex-col gap-4 h-fit">
          <h2 className="text-lg font-bold text-[#216db9] mb-3">Quick Links</h2>
          <div className="flex flex-col gap-3">
            <a href="#" className="bg-[#216db9] text-white px-4 py-2 rounded shadow hover:bg-[#165a96] text-center font-semibold transition">Fertilizer Subsidy</a>
            <a href="#" className="bg-[#216db9] text-white px-4 py-2 rounded shadow hover:bg-[#165a96] text-center font-semibold transition">Soil Health Card</a>
            <a href="#" className="bg-[#216db9] text-white px-4 py-2 rounded shadow hover:bg-[#165a96] text-center font-semibold transition">Market Prices</a>
            <a href="#" className="bg-[#216db9] text-white px-4 py-2 rounded shadow hover:bg-[#165a96] text-center font-semibold transition">Weather Advisory</a>
          </div>
        </aside>
        {/* Schemes Grid */}
        <section className="md:col-span-3 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-[#216db9]">Schemes Implemented</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow border border-[#e0e0e0] p-6 flex flex-col items-center text-center">
              <span className="text-[#216db9] text-3xl font-bold mb-2">KALIA</span>
              <p className="text-gray-700 text-base mb-2">Financial assistance to small and marginal farmers.</p>
              <a href="#" className="text-[#216db9] font-semibold hover:underline">Read More</a>
            </div>
            <div className="bg-white rounded-xl shadow border border-[#e0e0e0] p-6 flex flex-col items-center text-center">
              <span className="text-[#216db9] text-3xl font-bold mb-2">PM-KISAN</span>
              <p className="text-gray-700 text-base mb-2">Direct income support to eligible farmer families.</p>
              <a href="#" className="text-[#216db9] font-semibold hover:underline">Read More</a>
            </div>
            <div className="bg-white rounded-xl shadow border border-[#e0e0e0] p-6 flex flex-col items-center text-center">
              <span className="text-[#216db9] text-3xl font-bold mb-2">Crop Insurance</span>
              <p className="text-gray-700 text-base mb-2">Insurance coverage and financial support for crop loss.</p>
              <a href="#" className="text-[#216db9] font-semibold hover:underline">Read More</a>
            </div>
            <div className="bg-white rounded-xl shadow border border-[#e0e0e0] p-6 flex flex-col items-center text-center">
              <span className="text-[#216db9] text-3xl font-bold mb-2">Soil Health Card</span>
              <p className="text-gray-700 text-base mb-2">Promoting soil testing and balanced fertilization.</p>
              <a href="#" className="text-[#216db9] font-semibold hover:underline">Read More</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 7px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e0e0e0;
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #e0e0e0 transparent;
        }
      `}</style>
    </div>
  );
};

export default Home; 