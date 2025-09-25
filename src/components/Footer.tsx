"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Animated blurred background orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl animate-float1"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl animate-float2"></div>
        <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-cyan-500 rounded-full filter blur-3xl animate-float3"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="group">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition duration-500">
                <span className="text-xl font-bold">S</span>
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Solve Ease
              </h2>
            </div>
            <p className="text-gray-300 mb-6">
              Find the Right Spot, Meet Your Match, Play Your Game.
            </p>

            {/* Static Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.778-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.261c-1.242 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.5.587-2.34.685.84-.504 1.48-1.31 1.78-2.27-.78.465-1.66.81-2.59.995A4.18 4.18 0 0015.5 4c-2.3 0-4.13 1.84-4.13 4.117 0 .323.037.64.105.942C7.69 8.9 4.07 7.052 1.64 4.153c-.356.61-.56 1.31-.56 2.08 0 1.44.74 2.72 1.88 3.46-.69-.022-1.33-.21-1.89-.52v.052c0 2 1.43 3.67 3.3 4.05-.349.095-.715.146-1.1.146-.265 0-.524-.026-.77-.074.523 1.63 2.04 2.82 3.84 2.85A8.37 8.37 0 012 19.544a11.8 11.8 0 006.29 1.84c7.547 0 11.675-6.252 11.675-11.673 0-.177-.004-.355-.012-.53A8.2 8.2 0 0022.46 6z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-white text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/find-players"
                  className="hover:text-white text-gray-300"
                >
                  Our Workers
                </Link>
              </li>
              <li>
                <Link
                  href="/trainer"
                  className="hover:text-white text-gray-300"
                >
                  Trainer
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white text-gray-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <p className="text-sm text-gray-300">Email</p>
                <a
                  href="mailto:tecsolixteam@hotmail.com"
                  className="text-white hover:text-blue-400"
                >
                  solveease@hotmail.com
                </a>
              </li>
              <li>
                <p className="text-sm text-gray-300">Phone</p>
                <a
                  href="tel:+244941540352"
                  className="text-white hover:text-blue-400"
                >
                  +244 941 540 352
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe for the latest updates.
            </p>
            <form>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-white"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-1 transition"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TecSolix. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float1 { 0%,100%{transform:translate(0,0);} 50%{transform:translate(20px,20px);} }
        @keyframes float2 { 0%,100%{transform:translate(0,0);} 50%{transform:translate(-15px,15px);} }
        @keyframes float3 { 0%,100%{transform:translate(0,0);} 50%{transform:translate(0,-20px);} }

        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
      `}</style>
    </footer>
  );
}
