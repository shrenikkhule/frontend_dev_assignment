"use client";

import { motion } from "framer-motion";
import {
  FaStar,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="py-7 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Promise to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <PromiseCard
              icon={<FaStar />}
              title="Unmatched Quality"
              description="We feature only top-rated, experienced professionals to ensure every job is done to the highest standard."
            />
            <PromiseCard
              icon={<FaShieldAlt />}
              title="Verified & Trusted"
              description="Every worker on our platform is background-checked and verified, so you can hire with complete confidence."
            />
            <PromiseCard
              icon={<FaRocket />}
              title="Fast & Effortless"
              description="Our platform is designed to be fast and intuitive, connecting you with the right pro in just a few clicks."
            />
          </div>
        </div>
      </section>

      {/* 3. "How It Works" Flowchart Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Get Started in 3 Simple Steps
          </h2>
          <div className="relative">
            {/* Dashed line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 border-t-2 border-dashed border-gray-300"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <HowItWorksStep
                step="1"
                title="Search Your Pro"
                description="Browse by category or search for the specific skill you need."
              />
              <HowItWorksStep
                step="2"
                title="View Profiles"
                description="Compare profiles, read reviews, and check qualifications to find your perfect match."
              />
              <HowItWorksStep
                step="3"
                title="Hire with Confidence"
                description="Contact your chosen professional directly through the platform and get the job done."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Call to Action */}
      <section className="py-20 px-6 text-center bg-gray-900 text-white">
        <HiOutlineSparkles className="text-5xl text-yellow-400 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">
          Your Next Project Starts Here.
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-8">
          Stop searching and start doing. Find the skilled professional you need
          today.
        </p>
        <Link
          href="/our-workers"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Find a Worker
        </Link>
      </section>
    </main>
  );
}

// Reusable "Promise" Card Component
const PromiseCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <div className="inline-block text-white text-3xl mb-4 p-4 bg-indigo-600 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

// Reusable "How It Works" Step Component
const HowItWorksStep = ({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="z-10"
    >
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-indigo-600 text-white font-bold text-2xl rounded-full border-4 border-gray-50">
        {step}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};
