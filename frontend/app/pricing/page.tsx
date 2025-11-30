"use client";
import { useState } from "react";

export default function PricingPage() {
    const[selected, setSelected] = useState(true);

    const handleSelect = (e: any) => {
        e.prevenDefault();
        setSelected(false);
    };

  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-[#028174]">Pricing</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Simple, transparent pricing designed for senior citizens and working professionals. Pay only for what you need — no hidden charges.</p>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white border border-[#028174] rounded-2xl p-8 shadow-sm hover:shadow-md transition hover:cursor-pointer hover:scale-102 transition duration-300">
                <h3 className="text-xl font-semibold text-[#028174]">Basic</h3>
                <p className="text-gray-500 mt-1">For simple, one-time tasks</p>
                <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900">₹99</span>
                    <span className="text-gray-500"> / task</span>
                </div>
                <ul className="mt-6 space-y-2 text-gray-700 text-left list-disc list-inside">
                    <li>Verified Taskers</li>
                    <li>Basic Support</li>
                    <li>In-app chat</li>
                </ul>
                <button className="mt-6 w-full py-3 bg-[#0AB68B] text-white rounded-lg hover:bg-[#028174] transition hover:cursor-pointer">Get Started</button>
            </div>

            <div className="bg-white border border-[#028174] rounded-2xl p-8 shadow-sm hover:shadow-md hover:cursor-pointer hover:scale-102 transition duration-300">
                <h3 className="text-xl font-semibold  text-[#028174]">Standard</h3>
                <p className="text-gray-500 mt-1">For recurring tasks & frequent help</p>
                <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900">₹249</span>
                    <span className="opacity-80 text-gray-500"> / month</span>
                </div>
                <ul className="mt-6 space-y-2 text-gray-700 text-left list-disc list-inside">
                    <li>Priority Taskers</li>
                    <li>Fast Support</li>
                    <li>Unlimited task requests</li>
                    <li>Secure payments</li>
                </ul>
                <button className="mt-6 w-full py-3 bg-[#0AB68B] text-white font-medium rounded-lg hover:bg-[#028174] transition hover:cursor-pointer">Choose Plan</button>
            </div>

            <div className="bg-white border border-[#028174] rounded-2xl p-8 shadow-sm hover:shadow-md hover:cursor-pointer hover:scale-102 transition duration-300">
                <h3 className="text-xl font-semibold  text-[#028174]">Premium</h3>
                <p className="text-gray-500 mt-1">For senior citizens needing daily help</p>
                <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900">₹499</span>
                    <span className="text-gray-500"> / month</span>
                </div>
                <ul className="mt-6 space-y-2 text-gray-700 text-left list-disc list-inside">
                    <li>Dedicated Task Manager</li>
                    <li>24/7 Premium Support</li>
                    <li>Instant Task Replacement</li>
                    <li>Advanced Safety Checks</li>
                </ul>
                <button className="mt-6 w-full py-3 bg-[#0AB68B] text-white rounded-lg hover:bg-[#028174] transition hover:cursor-pointer">Go Premium</button>
            </div>
        </div>
        <div>
            {selected ? (<div>

            </div>) : <></>}
        </div>
      </div>
    </section>
  );
};