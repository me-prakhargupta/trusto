import type { Metadata } from "next";

export default function TermsPage() {
    return(
        <div className="px-45 p-20">
            <h1 className="font-extrabold text-4xl mb-15 text-[#028174]">Trusto – Terms & Conditions</h1>
            <h2>Last Updated: <strong>Nov 27, 2025</strong></h2>
            <p className="mt-5">Welcome to Trusto. By using our platform, you agree to the following terms. Please read them carefully.</p>
            <div>
                <h3 className="mt-10 font-bold text-lg">1. Introduction</h3>
                <ul className="mt-3">
                    <li className="mt-2">Trusto (“Company”, “we”, “our”, “us”) provides a digital platform that connects users with trusted task-handling services, primarily aimed at senior citizens and working professionals in India.</li>
                    <li className="mt-2">By accessing or using Trusto, you (“User”, “you”) agree to these Terms & Conditions.</li>
                </ul>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">2. Eligibility</h3>
                <p className="mt-3">You must have:</p>
                <ul className="mt-1 list-disc list-inside">
                    <li className="mt-2">At least 18 years old, or</li>
                    <li className="mt-2">Using the service under the guidance of a parent/guardian (for minors requesting tasks for seniors).</li>
                </ul>
                <p className="mt-2">You must provide accurate and complete information during signup.</p>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">3. Service Provided</h3>
                <p className="mt-3">Trusto allows users to:</p>
                <ul className="mt-1 list-disc list-inside">
                    <li className="mt-2">Create and manage tasks</li>
                    <li className="mt-2">Connect with trusted helpers/service providers (if applicable)</li>
                    <li className="mt-2">Track the status of tasks</li>
                    <li className="mt-2">Communicate with support</li>
                </ul>
                <p className="mt-2">Trusto may evolve and add new features over time.</p>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">4. User Responsibility</h3>
                <p className="mt-3">By using Trusto, you agree to:</p>
                <ul className="mt-1 list-disc list-inside">
                    <li className="mt-2">Use the platform legally and respectfully.</li>
                    <li className="mt-2">Not misuse, hack, reverse-engineer, or disrupt the service.</li>
                    <li className="mt-2">Provide accurate task information.</li>
                    <li className="mt-2">Not upload harmful, abusive, or misleading content.</li>
                </ul>
                <p className="mt-2">Users are responsible for maintaining the confidentiality of their account credentials.</p>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">5. Payments (If applicable)</h3>
                <p className="mt-3">If Trusto enables online payments in the future:</p>
                <ul className="mt-1 list-disc list-inside">
                    <li className="mt-2">All payments will be processed via secure third-party payment gateways.</li>
                    <li className="mt-2">Trusto is not responsible for bank-side delays or gateway errors.</li>
                    <li className="mt-2">No refunds unless explicitly stated in future policies.</li>
                </ul>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">6. Communication</h3>
                <p className="mt-3">By signing up, you allow Trusto to send:</p>
                <ul className="mt-1 list-disc list-inside">
                    <li className="mt-2">Important service notifications</li>
                    <li className="mt-2">Task updates</li>
                    <li className="mt-2">Security Alerts</li>
                    <p className="mt-2">We will never spam or sell your communication data.</p>
                </ul>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">7. Limitations & Disclaimers</h3>
                <p className="mt-3">By signing up, you allow Trusto to send:</p>
                <ul className="mt-1 list-disc list-inside">
                    <li className="mt-2">Trusto is a facilitator/platform, not an employer of helpers (if service providers are introduced).</li>
                    <li className="mt-2">We do not guarantee completion of tasks beyond reasonable control.</li>
                    <li className="mt-2">We are not liable for any indirect, incidental, or consequential damages arising from the use of the platform.</li>
                </ul>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">8. Account Suspension & Termination</h3>
                <p className="mt-3">We reserve the right to suspend or terminate accounts if users:</p>
                <ul className="mt-1 list-disc list-inside">
                    <li className="mt-2">Violate Terms</li>
                    <li className="mt-2">Misuse Services</li>
                    <li className="mt-2">Engage in fraudulent/abusive activities</li>
                </ul>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">9. Intellectual Property</h3>
                <p className="mt-3">All Trusto branding, logo, UI, and platform content are owned by Trusto. You may not copy, modify, or reuse any content without permission.</p>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">10. Contact</h3>
                <p className="mt-3">For Queries:</p>
                <a href="" className="text-[#028174]">support@trusto.in</a>
                <p className="mt-2">India</p>
            </div>
        </div>
    );
};

export const metadata : Metadata = {
    title:"Terms - Trusto",
    description: "",
};