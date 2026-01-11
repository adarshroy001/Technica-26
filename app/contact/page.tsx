import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, User2, User2Icon } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="relative bg-[#0a0e0d] min-h-screen">
      <Navbar />

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Contact <span className="text-[#2ecc71]">Us</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Got questions? We're here to help. Reach out to us for any inquiries about TECHNICA 2026.
            </p>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Contact Info */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-[#2ecc71]/30 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Get in Touch
              </h2>

              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <Mail className="text-[#2ecc71] w-5 h-5" />
                  <span className="text-gray-300 break-all">
                    technica@nitjsr.ac.in
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="text-[#2ecc71] w-5 h-5" />
                  <span className="text-gray-300">
                    +91 12345 67890
                  </span>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#2ecc71] w-5 h-5 mt-1" />
                  <span className="text-gray-300">
                    NIT Jamshedpur, Jharkhand, India
                  </span>
                </div>
                <div className="flex items-start space-x-4">
                  <User2Icon className="text-[#2ecc71] w-5 h-5 mt-1" />
                  <span className="text-gray-300">
                    Prakash Sarkar (convenor)
                  </span>
                </div>
              </div>
            </div>

            {/* Map / Image */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-[#2ecc71]/30 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                How to Reach
              </h3>

              <div className="w-full h-56 sm:h-64 md:h-[300px] rounded-lg overflow-hidden border border-[#2ecc71]/50">
                <img
                  src="/nitjsr.png"
                  alt="NIT Jamshedpur Campus Map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
