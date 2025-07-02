import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import a from '../assets/a.png';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import d from '../assets/d.jpg';
import e from '../assets/e.jpg';
import f from '../assets/f.jpg';
import g from '../assets/g.jpg';

const images = [a, b, c, d, e, f, g];

const MediaGallery = () => (
  <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
    <Header />
    <NavBar />
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg border border-[#e0e0e0] p-8">
        <h1 className="text-3xl font-bold mb-6 text-[#216db9]">Media Gallery</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow border border-[#e0e0e0] bg-[#f5f8fd]">
              <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-40 object-cover object-center" />
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default MediaGallery; 