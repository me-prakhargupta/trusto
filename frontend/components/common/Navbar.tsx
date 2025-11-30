"use client"

import Link from "next/link";

export default function Navbar() {
    return(
        <div className="px-45 py-3 flex item-center justify-between  border-b-[0.5px] border-[#028174] bg-white">

            <div className="logo font-bold flex item-center text-black py-1.5">
                <Link href="/">Trusto</Link>
            </div>

            <div className="nav flex item-center gap-10">
                <Link href="/services" className="text-gray-600 hover:text-[#028174] py-1.5 px-3">Services</Link>
                <Link href="/pricing" className="text-gray-600 hover:text-[#028174] py-1.5 px-3">Pricing</Link>
                <Link href="/about" className="text-gray-600 hover:text-[#028174] py-1.5 px-3">About</Link>
                <Link href="/contact" className="text-gray-600 hover:text-[#028174] py-1.5 px-3">Contact</Link>

                <Link href="/signup" className="bg-[#0AB68B] text-white hover:bg-[#028174] font-medium py-1.5 px-4 rounded-lg hover:cursor-pointer transition-all shadow-sm hover:shadow">Signup</Link>
            </div>
        </div>
    );
};