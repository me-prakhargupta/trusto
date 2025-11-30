import Link from "next/link";
import type { Metadata } from "next";

export default function Page() {
    return(
        <div className="px-45 py-10 max-w mx-auto bg-white mb-45">
            <div>
                <h1 className="text-center text-[#028174] text-4xl font-extrabold mt-12 mb-10">Trusto — Safety Guidelines for Users</h1>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 hover:cursor-pointer mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-5">Verify Tasker Identity</h3>
                <ul className="list-disc list-outside pl-5 space-y-1">
                    <li className="text-gray-600 text-base">Always check the <b>Tasker’s profile</b>, <b>ID verification badge</b>, and <b>ratings/reviews</b> before accepting service.</li>
                    <li className="text-gray-600 text-base">Only communicate with verified Taskers through the official Trusto platform.</li>
                    <li className="text-gray-600 text-base">Avoid engaging with anyone claiming to be from Trusto outside the app.</li>
                </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 hover:cursor-pointer mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-5">Never Share Sensitive Personal Information</h3>
                <ul className="list-disc list-outside pl-5 space-y-1">
                    <li className="text-gray-600 text-base">Do not share bank account details, UPI PIN, OTPs, passwords, Aadhaar numbers, or personal documents unless the task explicitly requires document submission within the secure Trusto interface.</li>
                    <li className="text-gray-600 text-base">Trusto representatives will never ask for <b>OTPs or passwords</b>.</li>
                </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 hover:cursor-pointer mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-5">Use In-App Chat and Calls Only</h3>
                <ul className="list-disc list-outside pl-5 space-y-1">
                    <li className="text-gray-600 text-base">Keep all communication <b>within the Trusto</b> app for transparency and safety.</li>
                    <li className="text-gray-600 text-base">Avoid sharing private contact numbers or addresses before confirming a task.</li>
                </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 hover:cursor-pointer mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-5">Ensure Your Environment Is Safe</h3>
                <ul className="list-disc list-outside pl-5 space-y-1">
                    <li className="text-gray-600 text-base">When meeting a Tasker in person, choose a <b>well-lit</b>, <b>secure location</b>.</li>
                    <li className="text-gray-600 text-base">If you are a senior citizen, consider having a family member nearby during in-person tasks.</li>
                    <li className="text-gray-600 text-base">Never allow unknown Taskers to enter your home without confirming their identity.</li>
                </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 hover:cursor-pointer mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-5">Review Task Details Clearly</h3>
                <ul className="list-disc list-outside pl-5 space-y-1">
                    <li className="text-gray-600 text-base">Double-check the <b>task description</b>, <b>timings</b>, <b>fees</b>, and <b>special requirements</b> before confirming.</li>
                    <li className="text-gray-600 text-base">If anything seems unclear or suspicious, contact Trusto support immediately.</li>
                </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 hover:cursor-pointer mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-5">Avoid Advance Cash Payments</h3>
                <ul className="list-disc list-outside pl-5 space-y-1">
                    <li className="text-gray-600 text-base">Prefer online payments through <b>Trusto</b>.</li>
                    <li className="text-gray-600 text-base">Make cash payments <b>only after task completion</b>, and never pay anything upfront unless clearly stated on the platform.</li>
                </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 hover:cursor-pointer mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-5">Protect Your Home & Belongings</h3>
                <ul className="list-disc list-outside pl-5 space-y-1">
                    <li className="text-gray-600 text-base">For home-related tasks (plumbing, repairs, errands), keep valuables locked away.</li>
                    <li className="text-gray-600 text-base">Do not leave a Tasker unsupervised in your home.</li>
                </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 hover:cursor-pointer mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-5">Follow Local Laws & Regulations</h3>
                <ul className="list-disc list-outside pl-5 space-y-1">
                    <li className="text-gray-600 text-base">Ensure that your requested task complies with <b>Indian legal norms</b>.</li>
                    <li className="text-gray-600 text-base">Illegal activities or tasks involving restricted documents are <b>strictly prohibited</b>.</li>
                </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl border rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 hover:cursor-pointer mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-5">Trust Your Instincts</h3>
                <ul className="list-disc list-outside pl-5 space-y-1">
                    <li className="text-gray-600 text-base">If something feels off — cancel the task.</li>
                    <li className="text-gray-600 text-base">Your safety comes first, and Trusto offers support for all safety-related concerns.</li>
                </ul>
            </div>
            <div className="mt-40">
                <h1 className="text-center text-[#028174] text-4xl font-extrabold mt-12 mb-10">If something feels unusual, pause and contact Trusto Support. Your security matters to us.</h1>
                <Link href="/report" className="w-44 mt-8 text-white bg-[#0AB68B] hover:bg-[#028174]  px-6 py-3 rounded-lg font-medium mx-auto block transition-all shadow-sm hover:shadow">Report a Concern</Link>
            </div>
        </div>
    );
};

export const metadata: Metadata = {
  title: "Safety Guidelines — Trusto",
  description: "",
}