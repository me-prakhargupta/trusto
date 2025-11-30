import Link from "next/link";
import type { Metadata } from "next";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#028174]">Contact Us</h1>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">Need help or have a question? The Trusto support team is here for you. We respond quickly and ensure your issue is handled with care.</p>
      </div>
      <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-2xl p-8 space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-[#028174]">Email Support</h2>
          <p className="text-gray-600 mt-1">Write to us anytime at:</p>
          <a href="mailto:support@trusto.in" target="_blank"className="text-[#028174] font-medium underline">support@trusto.in</a>
          <p className="text-gray-500 text-sm mt-1">We usually respond within 24 hours.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#028174]">Phone Support</h2>
          <p className="text-gray-600 mt-1">Coming soon — we’ll offer a dedicated helpline for faster assistance.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#028174]">Support Hours</h2>
          <p className="text-gray-600 mt-1">Available every day from <strong>9:00 AM – 9:00 PM (IST)</strong>.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#028174]">Report a Safety Issue</h2>
          <p className="text-gray-600 mt-1">If you notice suspicious or unsafe activity, please report it immediately.</p>
        <Link href="/report" className="inline-block mt-3 px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">Report an Issue</Link>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#028174]">Office Location</h2>
            <p className="text-gray-600 mt-1">Trusto Headquarters (to be updated soon)</p>
        </div>
      </div>
    </div>
  );
};

export const metadata : Metadata = {
  title:"Contact — Trusto",
};