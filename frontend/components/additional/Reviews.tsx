import Link from "next/link";

export default function Reviews() {
    return(
        <div className="mt-25 mb-15 px-45 py-10 max-w mx-auto">
            <div>
                <h1 className="text-center text-[#028174] text-4xl font-extrabold mt-7 mb-20">See what people say about Trusto</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.03] transition-all duration-300 hover:cursor-pointer hover:bg-[#FFE3B3] lg:col-span-2 bg-white text-black p-6 rounded shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Piyush Baghel</h3>
                    <p className="text-gray-600 text-sm">Trusto helped me with complete documentation and utility transfer. Very smooth and reliable service.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.03] transition-all duration-300 hover:cursor-pointer hover:bg-[#FFE3B3] lg:col-span-2 bg-white text-black p-6 rounded shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mridul Goyal</h3>
                    <p className="text-gray-600 text-sm">The team guided me through property verification and paperwork. Highly recommended!</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.03] transition-all duration-300 hover:cursor-pointer hover:bg-[#FFE3B3] lg:col-span-2 bg-white text-black p-6 rounded shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Anurag Singh</h3>
                    <p className="text-gray-600 text-sm">My parents struggle with paperwork. Trusto has been a blessing — everything gets done reliably.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.03] transition-all duration-300 hover:cursor-pointer hover:bg-[#FFE3B3] lg:col-span-2 bg-white text-black p-6 rounded shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Amitabh Mishra</h3>
                    <p className="text-gray-600 text-sm">Excellent assistance during the ownership transfer process. Trusto made everything simple.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.03] transition-all duration-300 hover:cursor-pointer hover:bg-[#FFE3B3] lg:col-span-2 bg-white text-black p-6 rounded shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Vikash Yadav</h3>
                    <p className="text-gray-600 text-sm">Trusto handled my electricity transfer smoothly. I didn’t have to visit any office — saved so much time.</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.03] transition-all duration-300 hover:cursor-pointer hover:bg-[#FFE3B3] lg:col-span-2 bg-white text-black p-6 rounded shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mridul Goyal</h3>
                    <p className="text-gray-600 text-sm">The team guided me through property verification and paperwork. Highly recommended!</p>
                </div>
            </div>
            <div className="mt-15 py-12 text-center">
                <h3 className="text-2xl text-[#028174] font-bold">We Value Your Feedback</h3>
                <p className="text-gray-600 text-sm mt-2 mb-8">Help us improve your experience by sharing your thoughts.</p>
                <Link href="/feedback" className="bg-[#0AB68B] text-white hover:bg-[#028174] font-medium py-3 px-4 rounded-lg hover:cursor-pointer transition-all shadow-sm hover:shadow">Share your views</Link>
            </div>
        </div>
    );
};