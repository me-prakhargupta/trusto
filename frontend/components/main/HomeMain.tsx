import Link from "next/link";

export default function HomeMain() {
    return(
        <div className="px-45 py-10 max-w mx-auto bg-white">
            <div>
                <h1 className="text-center text-[#028174] text-4xl font-extrabold mt-12">See how Trusto can simplify your tasks.</h1>
                <p className="mt-4 w-100 mx-auto text-center text-lg text-gray-600">Your peace of mind is our priority. Let us handle the complex work for you.</p>
            </div>

            <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.03] transition-all duration-300 hover:cursor-pointer hover:bg-[#FFE3B3]">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Document Support</h3>
                    <p className="text-gray-600 text-sm">Quick help with paperwork, applications, and official documents — done correctly and on time.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.03] transition-all duration-300 hover:cursor-pointer hover:bg-[#FFE3B3]">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Advisory</h3>
                    <p className="text-gray-600 text-sm">
                        Simple legal guidance for everyday needs — explained clearly, without legal jargon.
                    </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.03] transition-all duration-300 hover:cursor-pointer hover:bg-[#FFE3B3]">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Property Verification</h3>
                    <p className="text-gray-600 text-sm">Verify property documents and legal records so you can make confident decisions.</p>
                </div>
                </div>

                <div>
                    <p className="mt-10 mx-auto text-center text-gray-600">Not sure which service you need? Talk to our experts for free.</p>
                    <Link href="/contact" className="w-35 mt-8 text-white bg-[#0AB68B] hover:bg-[#028174]  px-6 py-3 rounded-lg font-medium mx-auto block transition-all shadow-sm hover:shadow">Get in touch</Link>
                </div>
        </div>
    );
};