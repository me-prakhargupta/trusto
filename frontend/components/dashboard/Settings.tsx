import Link from "next/link";

export default function Setting() {
    return(
        <div className="px-10 py-4 flex justify-center border rounded w-[calc(90vw-180px)] mb-5 ml-5 bg-white border-white shadow rounded">

            <div className="px-45 py-31 max-w mx-auto">
                <h1 className="leading-[1.1] text-center text-5xl font-extrabold text-[#028174]">This page is currently</h1>
                <h1 className="leading-[1.1] text-center text-5xl font-extrabold text-[#028174]"><span className="bg-gradient-to-r from-[#028174] to-[#0AB68B] bg-clip-text text-transparent">under-construction</span>.</h1>

                <p className="mt-8 text-center text-gray-600">Our team is growing soon — and we’ll be looking for</p>
                <p className="text-center text-gray-600">people who want to make lives easier.</p>
            
                <Link href="/" className="w-33 mt-8 text-white bg-[#0AB68B] hover:bg-[#028174] px-6 py-3 rounded-lg font-medium mx-auto block transition-all shadow-sm hover:shadow">Visit Trusto</Link>
            </div>
        </div>
    );
};