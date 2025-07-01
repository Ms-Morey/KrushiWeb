import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ContactUs = () => (
  <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
    <Header />
    <NavBar />
    <section className="innerpage-wrapper py-8 flex-1">
      <div id="main-wrapper" className="layout-main-wrapper layout-container clearfix">
        <div className="container mx-auto px-4">
          <div id="skipCont"></div>
          <div id="main" className="layout-main">
            <div className="container p-0">
              <main id="content" className="column main-content" role="main">
                <section className="section">
                  <a id="main-content" tabIndex="-1"></a>
                  <div id="block-swfone-page-title" className="block-page-title-block mb-6">
                    <h1 className="text-3xl font-bold text-[#216db9]">Contact Us</h1>
                  </div>
                  <div>
                    <div className="content">
                      <div className="contact-us-page flex flex-col lg:flex-row gap-8">
                        {/* Contact Details Left */}
                        <div className="contact-us-content flex-1 order-1">
                          <ul className="contuctuspage bg-white rounded-xl shadow-lg border border-[#e0e0e0] p-8 text-lg text-gray-800">
                            <li className="pb-2"><strong>Address:</strong> Department of Agriculture and Farmers' Empowerment, Krushi Bhavan, Bhubaneswar, Odisha, India, Pin-Code: 751001</li>
                            <li className="pt-2 border-t border-gray-300"><strong>Phone:</strong> 0674-2391325</li>
                            <li className="pt-2 border-t border-gray-300"><strong>Krushi Samrudhi Help Line No.:</strong> 155333 (for any help/query related to Agriculture / Govt. Schemes of Agriculture)</li>
                            <li className="pt-2 border-t border-gray-300"><strong>E-mail:</strong> agrsec.or@od.gov.in</li>
                            <li className="pt-2 border-t border-gray-300">Dr. S. P. Parida,<br />
                              Joint Director (Statistics) - cum - Nodal Officer of Website,<br />
                              Phone No. - 06742391124,<br />
                              E-mail - spparida8@gmail.com
                            </li>
                          </ul>
                        </div>
                        {/* Feedback Form Right */}
                        <div className="flex-1 order-2">
                          <form className="bg-white rounded-xl shadow-lg border border-[#e0e0e0] p-8 flex flex-col gap-4">
                            <h2 className="text-2xl font-bold text-[#216db9] mb-2">Feedback / Query</h2>
                            <input type="text" placeholder="Your Name" className="border rounded px-3 py-2" />
                            <input type="email" placeholder="Your Email" className="border rounded px-3 py-2" />
                            <textarea placeholder="Your Message" className="border rounded px-3 py-2" rows={4}></textarea>
                            <button type="submit" className="bg-[#216db9] text-white px-4 py-2 rounded hover:bg-[#165a96] font-semibold">Send</button>
                          </form>
                        </div>
                      </div>
                      {/* Map below both on large screens, below form on mobile */}
                      <div className="map flex items-center justify-center mt-8">
                        <iframe
                          title="Krushi Bhavan Map"
                          allowFullScreen
                          height="350"
                          loading="lazy"
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14970.486178799034!2d85.8280378!3d20.2745246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ffe22b3bebac455!2sKrushi%20Bhavan!5e0!3m2!1sen!2sin!4v1632222730669!5m2!1sen!2sin"
                          style={{ border: 0, width: '100%', minWidth: '300px', maxWidth: '900px' }}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ContactUs; 