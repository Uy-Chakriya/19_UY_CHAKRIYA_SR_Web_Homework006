import React, { useState } from "react";
import {
  Heart,
  Share2,
  ChevronLeft,
  ShoppingCart,
  Minus,
  Plus,
} from "lucide-react";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-10">
      <div className="w-[950px] h-[600px] bg-white rounded-[40px] shadow-2xl flex overflow-hidden border border-gray-100">
        <div className="w-[480px] bg-[#f8fafc] relative flex items-center justify-center p-12">
          <div className="absolute top-10 left-10 flex flex-col gap-2">
            <span className="bg-[#0f172a] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
              New Arrival
            </span>
            <span className="bg-blue-50 text-blue-400 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
              Free Shipping
            </span>
          </div>

          <div className="absolute top-10 right-10 flex flex-col gap-3">
            <button className="p-2.5 bg-white rounded-full shadow-sm border border-gray-100 text-gray-400 hover:text-red-500 transition-all">
              <Heart size={20} />
            </button>
            <button className="p-2.5 bg-white rounded-full shadow-sm border border-gray-100 text-gray-400 hover:text-blue-500 transition-all">
              <Share2 size={20} />
            </button>
          </div>

          <div className="relative z-10 drop-shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=450"
              alt="Premium Product"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
