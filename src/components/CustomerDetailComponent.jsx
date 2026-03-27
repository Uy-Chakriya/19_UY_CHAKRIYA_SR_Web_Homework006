import React from "react";
import { User, Calendar, CreditCard, ChevronLeft } from "lucide-react";
export default function CustomerDetailComponent() {
  const customer = {
    name: "Kokp Daro",
    birthdate: "2000-03-21",
    totalSpent: 75,
    accountId: "e74455a8-e0c9-49ac-8960-c9b965555c79",
  };

  return (
    <div className="min-h-screen w-[1200px] ml-10 mt-5 p-5 flex items-center justify-center ">
      <div className="w-[800px] h-[400px] bg-white rounded-[40px] shadow-2xl flex overflow-hidden border border-gray-100">
        <div className=" flex flex-col items-center justify-center w-[220px] bg-[#f8fafc]border-r border-gray-100">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 border-4 border-white">
            <div className="w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center">
              <User size={64} className="text-gray-400" />
            </div>
          </div>
          <h2 className="text-2xl font-black text-[#0f172a]">
            {customer.name}
          </h2>
        </div>

        <div className=" p-12 relative">
          <button className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-blue-400 uppercase mb-8 hover:text-blue-600 transition-colors"></button>

          <div className="grid grid-cols-2 gap-y-8 gap-x-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2">
                Full Name
              </p>
              <div className="flex items-center gap-2">
                <User size={18} className="text-orange-400" />
                <span className="font-bold text-[#0f172a] text-lg">
                  {customer.name}
                </span>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-2">
                Total Spent
              </p>
              <div className="flex items-center gap-2">
                <div className="bg-emerald-100 p-1 rounded">
                  <CreditCard size={18} className="text-emerald-500" />
                </div>
                <span className="font-black text-[#0f172a] text-2xl">
                  ${customer.totalSpent}
                </span>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-2">
                Birthdate
              </p>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-orange-400" />
                <span className="font-bold text-[#0f172a] text-lg">
                  {customer.birthdate}
                </span>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-2">
                Account ID
              </p>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-[11px] text-slate-400">
                  {customer.accountId}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            <button className="flex-1 py-4 bg-[#0f172a] text-white font-bold rounded-xl ">
              Edit Profile
            </button>
            <button className="flex-1 py-4 bg-red-50 text-red-500 font-bold rounded-xl border ">
              Delete This User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
