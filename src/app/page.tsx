"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaTools,
  FaBolt,
  FaPaintRoller,
  FaBroom,
  FaWrench,
  FaUserShield,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { WorkerType } from "@/types/workers";
import Image from "next/image";
export default function HomePage() {
  const [workers, setWorkers] = useState<WorkerType[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await import("../../workers.json");
      setWorkers(response.default.slice(0, 8)); // show first 8 workers
    };
    loadData();
  }, []);
  return (
    <main className="bg-white text-gray-800">
      {/* 1. Hero Section: Unique, Interactive, and Animated */}
      <section className="relative w-full bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.3 },
              },
            }}
            className="text-center md:text-left z-10"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
            >
              Build, Fix, Create.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                Your Vision, Our Experts.
              </span>
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-gray-300 mb-8"
            >
              Connect with top-rated plumbers, electricians, and artisans. This
              platform is a showcase of modern, performant, and beautiful
              frontend development.
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="flex justify-center md:justify-start gap-4"
            >
              <Link
                href="/our-workers"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Find a Pro
              </Link>
              <Link
                href="/about"
                className="bg-transparent border-2 border-gray-500 hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                How It Works
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Floating Cards */}
          <div className="relative h-64 md:h-full hidden md:block">
            <Link href="/our-workers">
              <FloatingCard
                icon={<FaTools />}
                text="Plumber"
                className="top-1/4 left-10"
                duration={10}
              />
              <FloatingCard
                icon={<FaBolt />}
                text="Electrician"
                className="top-10 right-10"
                duration={12}
                delay={-2}
              />
              <FloatingCard
                icon={<FaPaintRoller />}
                text="Painter"
                className="bottom-1/4 right-20"
                duration={11}
                delay={-5}
              />
              <FloatingCard
                icon={<FaBroom />}
                text="Cleaner"
                className="bottom-10 left-20"
                duration={13}
                delay={-3}
              />
              <FloatingCard
                icon={<FaWrench />}
                text="Mechanic"
                className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                duration={9}
                delay={-4}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Categories Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">
            Popular Service Categories
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Choose a category to find the right professional for your job.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <CategoryCard icon={<FaTools />} title="Plumbers" />
            <CategoryCard icon={<FaBolt />} title="Electricians" />
            <CategoryCard icon={<FaPaintRoller />} title="Painters" />
            <CategoryCard icon={<FaUserShield />} title="All Services" />
          </div>
        </div>
      </section>
      {/*  */}
      <section className="px-6 py-10">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Our Professionals
          </h2>
          <Link href="/our-workers">
            <button className="text-indigo-600 font-semibold hover:text-indigo-800 transition cursor-pointer">
              View All →
            </button>
          </Link>
        </div>

        {/* 🔹 Horizontal Scroll Cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {workers.map((worker) => (
            <div
              key={worker.id}
              className="min-w-[260px] bg-white rounded-xl shadow-md border border-gray-200 
                   hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-40 relative">
                <Image
                  src={worker.image}
                  alt={worker.name}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900">{worker.name}</h3>
                <p className="text-indigo-600 text-sm font-medium">
                  {worker.service}
                </p>
                <p className="mt-2 text-gray-700 font-semibold">
                  ₹{worker.pricePerDay}{" "}
                  <span className="text-sm text-gray-500">/day</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*  */}
      {/* 3. Why Choose Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Quality and Trust, Guaranteed.
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              This platform is not just an assignment; it's a demonstration of
              modern frontend practices, focusing on performance, clean
              architecture, and a delightful user experience.
            </p>
            <ul className="space-y-4">
              <FeatureItem
                title="Verified Professionals"
                description="Every worker is vetted to ensure quality and safety."
              />
              <FeatureItem
                title="Seamless Experience"
                description="A responsive, fast, and accessible interface on any device."
              />
              <FeatureItem
                title="Performance Optimized"
                description="Built with Next.js for server-side rendering and fast load times."
              />
            </ul>
          </div>
          <motion.div
            className="rounded-lg overflow-hidden shadow-2xl"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
              alt="A team collaborating with sticky notes"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// Reusable Floating Card Component for the Hero Section
const FloatingCard = ({
  icon,
  text,
  className,
  duration,
  delay = 0,
}: {
  icon: React.ReactNode;
  text: string;
  className: string;
  duration: number;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: ["0%", "8%", "0%"],
      }}
      transition={{
        opacity: { duration: 0.5, delay: 0.5 },
        scale: { duration: 0.5, delay: 0.5 },
        y: {
          duration: duration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: delay,
        },
      }}
      whileHover={{
        scale: 1.1,
        y: 0,
        zIndex: 10,
        transition: { duration: 0.2 },
      }}
      className={`absolute flex items-center gap-3 p-3 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 ${className}`}
    >
      <div className="text-indigo-300 text-2xl">{icon}</div>
      <span className="font-semibold text-white">{text}</span>
    </motion.div>
  );
};

// Reusable Category Card Component
const CategoryCard = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0px 15px 30px -10px rgba(0, 0, 0, 0.1)",
      }}
      className="bg-white p-8 rounded-xl shadow-md text-center cursor-pointer border border-gray-100"
    >
      <div className="text-indigo-600 text-5xl mb-4 inline-block">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
    </motion.div>
  );
};

// Reusable Feature Item Component
const FeatureItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-600 font-bold">
          ✓
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  );
};
