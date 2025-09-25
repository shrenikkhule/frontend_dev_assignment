import { WorkerType } from "@/types/workers";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaStar } from "react-icons/fa";

interface WorkerCardProps {
  worker: WorkerType;
  variants?: Variants;
}

export default function WorkerCard({ worker, variants }: WorkerCardProps) {
  const rating = (Math.random() * (5 - 4) + 4).toFixed(1);

  return (
    <motion.div
      variants={variants}
      className="bg-white rounded-xl h-full flex flex-col group transition-all duration-300
                 border border-gray-200
                 hover:shadow-xl hover:-translate-y-2 hover:border-indigo-500"
    >
      {/* Image Container with Hover Zoom Effect */}
      <div className="w-full h-48 relative overflow-hidden rounded-t-xl">
        <Image
          src={worker.image}
          alt={worker.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-bold text-gray-800">{worker.name}</h2>
            <p className="text-indigo-600 font-semibold text-sm mt-1">{worker.service}</p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-1 text-yellow-500 bg-yellow-100 px-2 py-1 rounded-md text-xs font-bold">
            <FaStar />
            <span>{rating}</span>
          </div>
        </div>
        
        {/* Spacer to push content below to the bottom */}
        <div className="flex-grow"></div> 
        
        {/* Price and Action Button */}
        <div className="mt-4 flex justify-between items-center">
          <p className="text-xl font-bold text-gray-900">
            ₹{worker.pricePerDay}
            <span className="text-sm font-normal text-gray-500"> / day</span>
          </p>
          <a
            href="#" // In a real app, this would be href={`/workers/${worker.id}`}
            className="bg-indigo-100 text-indigo-700 font-semibold px-4 py-2 rounded-lg text-sm
                       transition-all duration-300
                       group-hover:bg-indigo-600 group-hover:text-white"
          >
            View Profile
          </a>
        </div>
      </div>
    </motion.div>
  );
}