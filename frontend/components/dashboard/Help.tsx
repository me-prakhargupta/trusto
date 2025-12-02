import Link from "next/link";

export default function Help() {
    return(
        <div className="px-10 py-4 flex justify-center border rounded w-[calc(90vw-180px)] mb-5 ml-5 bg-white border-white shadow rounded">
            <div>
                <div className="text-center py-5">
                    <p className="text-gray-600 max-w-xl mx-auto">Need help or have a question? The Trusto support team is here for you. We respond quickly and ensure your issue is handled with care.</p>
                </div>
                <div className="max-w-3xl mx-auto bg-white px-10 py-10 mt-2 space-y-8">
                    <div>
                        <h2 className="text-xl font-semibold text-[#028174]">Email Support</h2>
                        <p className="text-gray-600 mt-1">Write to us anytime at:</p>
                        <a href="mailto:support@trusto.in" target="_blank"className="text-[#028174] font-medium underline">support@trusto.in</a>
                        <p className="text-gray-500 text-sm mt-1">We usually respond within 24 hours.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-[#028174]">Support Hours</h2>
                        <p className="text-gray-600 mt-1">Available every day from <strong>9:00 AM – 9:00 PM (IST)</strong>.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-[#028174]">Report a Safety Issue</h2>
                        <p className="text-gray-600 mt-1">If you notice suspicious or unsafe activity, please report it immediately.</p>
                        <Link href="/report" className="inline-block mt-3 px-5 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">Report an Issue</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};