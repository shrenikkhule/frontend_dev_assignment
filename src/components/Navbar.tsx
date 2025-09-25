"use client";

import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaCalendarCheck,
  FaLaptopHouse,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div
      className="fixed top-0 left-0 w-full text-white shadow-md z-50 flex flex-col"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 120%, rgba(62, 61, 117), rgba(18, 18, 38))",
      }}
    >
      <header className="sticky top-0 z-30 px-4 py-2 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            <Link href="/" className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-400" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                Solve Ease
              </span>
            </Link>
          </h1>
        </div>

        {/* Center: Navigation Buttons */}
        <div className="hidden md:flex space-x-6">
          <Link href="/find-players">
            <span className="hover:text-green-300 font-medium flex items-center gap-1 transition">
              <FaUsers className="text-base text-green-400" />
              <span>Home</span>
            </span>
          </Link>
          <Link href="/book-venues">
            <span className="hover:text-yellow-300 font-medium flex items-center gap-1 transition">
              <FaCalendarCheck className="text-base text-yellow-400" />
              <span>Our Workers</span>
            </span>
          </Link>
          <Link href="/trainer">
            <span className="hover:text-orange-300 font-medium flex items-center gap-1 transition">
              <FaLaptopHouse className="text-base text-orange-400" />
              <span>About Us</span>
            </span>
          </Link>
        </div>

        {/* Right: Login Button (static) */}
        <Link href="/login">
          <div className="p-4 flex items-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-6 h-6 rounded-full mr-2"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhjk7qpl0JIoUsadWQz2lyutltpEKFacR_bQ&s"
                className="rounded-2xl"
                alt="login"
              />
            </motion.div>
            <span className="text-lg">Login to Solve Ease</span>
          </div>
        </Link>
      </header>
    </div>
  );
}
