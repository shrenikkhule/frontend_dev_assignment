"use client";

import { WorkerType } from "@/types/workers";
import { useState, useEffect } from "react";
import WorkerCard from "@/app/WorkerCard";
import { motion } from "framer-motion";
import { FaSearch, FaExclamationCircle } from "react-icons/fa";

export default function WorkersPage() {
  const [workersData, setWorkersData] = useState<WorkerType[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedService, setSelectedService] = useState("All");

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await import("../../../workers.json");
        setTimeout(() => {
          setWorkersData(response.default);
          setLoading(false);
        }, 200);
      } catch (error) {
        console.error("Failed to load workers:", error);
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Get top 5 services plus "All" for the filter buttons
  const serviceCounts = workersData.reduce((acc, worker) => {
    acc[worker.service] = (acc[worker.service] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topServices = [
    "All",
    ...Object.entries(serviceCounts)
      .sort(([, a], [, b]) => b - a)

      .map(([service]) => service),
  ];

  const filteredWorkers = workersData.filter((worker) => {
    const serviceMatch =
      selectedService === "All" || worker.service === selectedService;
    const searchMatch =
      worker.name.toLowerCase().includes(search.toLowerCase()) ||
      worker.service.toLowerCase().includes(search.toLowerCase());
    return serviceMatch && searchMatch;
  });

  // const containerVariant = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  // };

  // const cardVariant = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0 },
  // };

  if (loading) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-50 text-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-indigo-500"></div>
          <p className="text-2xl font-semibold">Finding Professionals...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-2">
            Meet Our Professionals
          </h1>
          <p className="text-lg text-gray-600">
            Find the right expert for any job, from plumbing to painting.
          </p>
        </motion.div>

        {/* Controls: Search and Horizontal Filter Buttons */}
        <div className="mb-10 space-y-6">
          {/* Search Bar */}
          <div className="relative w-full max-w-2xl mx-auto">
            <FaSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or service..."
              className="w-full bg-white border border-gray-300 text-gray-800 p-3 pl-12 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Horizontal Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-3">
            {topServices.map((service) => (
              <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300
                  ${
                    selectedService === service
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {filteredWorkers.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <FaExclamationCircle className="text-5xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">
              No Professionals Found
            </h3>
            <p className="text-gray-500 mt-2">
              Please try a different search or filter.
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            // variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            {filteredWorkers.map((worker) => (
              <WorkerCard
                key={worker.id}
                worker={worker}
                // variants={cardVariant}
              />
            ))}
          </motion.div>
        )}
      </div>
    </main>
  );
}
