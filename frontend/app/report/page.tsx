"use client";

import { useState } from "react";

export default function ReportIssuePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-[#028174]">Report an Issue</h1>
            <p className="mt-3 text-gray-600">If you experienced a problem, felt unsafe, or noticed suspicious activity, please report it here. We take every report seriously.</p>
        </div>
        <div className="mt-10 max-w-2xl mx-auto bg-white shadow-sm rounded-2xl p-8">
        {submitted ? (<div className="text-center py-10">
            <h2 className="text-2xl font-semibold text-[#028174]">Thank You!</h2>
            <p className="text-gray-600 mt-2">Your issue has been submitted. Our support team will review it shortly.</p>
          </div>) : (<form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                What type of issue are you facing?
              </label>
              <select required className="w-full p-3 bg-gray-100 border rounded-lg outline-none">
                <option value="">Select an issue</option>
                <option>Tasker-related issue</option>
                <option>Safety concern</option>
                <option>Payment problem</option>
                <option>App/Website issue</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Describe the issue</label>
              <textarea required rows={5} className="w-full p-3 bg-gray-100 border rounded-lg outline-none" placeholder="Please explain what happened..."/>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Email</label>
              <input type="email" className="w-full p-3 bg-gray-100 border rounded-lg outline-none" placeholder="example@gmail.com"/>
              <p className="text-gray-500 text-sm mt-1">We’ll contact you if more details are needed.</p>
            </div>
            <button type="submit" className="w-full bg-[#0AB68B] text-white py-3 rounded-lg hover:bg-[#028174] transition font-medium">Submit Issue</button>
          </form>)}
      </div>

      <div className="max-w-2xl mx-auto text-center mt-10">
        <p className="text-gray-600">If this is a serious safety concern, we encourage you to report it immediately. Your safety is our top priority.</p>
      </div>
    </div>
  );
}
