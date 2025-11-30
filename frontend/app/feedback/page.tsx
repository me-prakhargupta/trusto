"use client";

import { useState } from "react";

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-[#028174]">We Value Your Feedback</h1>
            <p className="mt-3 text-sm text-gray-600">Help us improve your experience by sharing your thoughts.</p>
        </div>
        <div className="mt-10 max-w-2xl mx-auto bg-white shadow-sm rounded-2xl p-8">
        {submitted ? (<div className="text-center py-10">
            <h2 className="text-2xl font-semibold text-[#028174]">Thank You!</h2>
            <p className="text-gray-600 mt-2">Your review has been submitted. Have a nice day!</p>
          </div>) : (<form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input required type="text" className="w-full p-3 bg-gray-100 border rounded-lg outline-none" placeholder="Enter your name"/>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Describe the issue</label>
              <textarea required rows={5} className="w-full p-3 bg-gray-100 border rounded-lg outline-none" placeholder="Please explain what happened..."/>
            </div>
            <button type="submit" className="w-full bg-[#0AB68B] text-white py-3 rounded-lg hover:bg-[#028174] transition font-medium">Submit</button>
          </form>)}
      </div>

      <div className="max-w-2xl mx-auto text-center mt-10">
        <p className="text-gray-600">If this is a serious safety concern, we encourage you to report it immediately. Your safety is our top priority.</p>
      </div>
    </div>
  );
}
