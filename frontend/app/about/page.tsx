import Link from "next/link";
import type { Metadata } from "next";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
        <section className="bg-white mt-10 mb-10 py-20 text-center">
            <h1 className="text-4xl font-extrabold text-[#028174]">About Trusto</h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Trusto is a modern task-handling platform designed for senior citizens and busy working professionals across India. We make everyday tasks simple, safe, and reliable.
            </p>
        </section>
        <section className="py-16 mt-10 mb-10 max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#028174]">Who We Are</h2>
            <p className="mt-3 text-gray-700 leading-7">Trusto connects you with trained, verified Taskers who help with services, errands, and day-to-day tasks. Our platform is built on trust, transparency, and the promise of dependable support — whenever you need it.</p>
        </section>
        <section className="mt-10 mb-10 py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-[#028174]">How Trusto Works</h2>
                <ul className="mt-5 space-y-4 list-disc list-outside pl-5 text-gray-700 leading-7">
                    <li><strong>Create a task</strong> – Tell us what you need help with.</li>
                    <li><strong>Match with a Verified Tasker</strong> – We assign a trained, identity-verified helper.</li>
                    <li><strong>Stay connected</strong> – Chat or call securely through the app.</li>
                    <li><strong>Task completion</strong> – Review the Tasker and make secure payments.</li>
                    <li><strong>Always supported</strong> – Our team is available if you need help.</li>
                </ul>
            </div>
        </section>
        <section className="mt-10 mb-10 py-16 max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#028174]">Our Mission</h2>
            <p className="mt-3 text-gray-700 leading-7">Trusto exists to make life easier and safer for people who need reliable support — especially senior citizens and working individuals with busy schedules. Our mission is to build a platform where trust, safety, and care come first.</p>
        </section>
        <section className="mt-10 mb-10 py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-[#028174]">Safety & Trust</h2>
                <p className="mt-3 text-gray-700 leading-7">Your safety is at the heart of Trusto. Every Tasker is identity-verified background-checked, and monitored for quality. We protect your privacy, secure your payments, and provide dedicated support — ensuring peace of mind across every task.
                </p>
                <Link href="/safety" className="inline-block mt-6 px-6 py-3 text-white transition bg-[#0AB68B] hover:bg-[#028174] rounded-lg font-medium mx-auto block transition-all shadow-sm hover:shadow">Read Safety Guidelines</Link>
            </div>
      </section>
      <section className="py-16">
            <div className="max-w-3xl mx-auto text-center px-4 py-10">
                <h3 className="text-xl font-bold text-[#028174]">Facing a Problem? We're Here to Help.</h3>
                <p className="mt-2 text-gray-600">Tell us what went wrong so we can fix it quickly.</p>
                <Link href="/report" className="inline-block mt-6 px-6 py-3 text-white transition bg-[#0AB68B] hover:bg-[#028174] rounded-lg font-medium mx-auto block transition-all shadow-sm hover:shadow">Report an Issue</Link>
            </div>
      </section>
    </div>
  );
};

export const metadata: Metadata = {
    title: "About — Trusto",
    description: "",
}