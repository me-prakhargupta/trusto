import type { Metadata } from "next";

export default function PrivacyPage() {
    return(
        <div className="px-45 p-20">
            <h1 className="font-extrabold text-4xl mb-15 text-[#028174]">Trusto – Privacy and Policy</h1>
            <h2>Last Updated: <strong>Nov 27, 2025</strong></h2>
            <p className="mt-5">This Privacy Policy explains how Trusto collects, uses, stores, and protects your data.</p>
            <div>
                <h3 className="mt-10 font-bold text-lg">1. Information We Collect</h3>
                <p className="mt-3">We may collect the following types of data:</p>
                <ul className="mt-3 list-inside">
                    <h4 className="mt-2 font-semibold text-base">1.1 Personal Information</h4>
                    <ul className="mt-1 list-disc list-inside pl-5 space-y-1">
                        <li>Name</li>
                        <li>Email Address</li>
                        <li>Phone Number</li>
                        <li>Address (if tasks require location)</li>
                    </ul>
                    <h4 className="mt-2 font-semibold text-base">1.2 Usage Data</h4>
                    <ul className="mt-1 list-disc list-inside pl-5 space-y-1">
                        <li>Login Activity</li>
                        <li>Task Activity</li>
                        <li>Device information (browser, IP, OS)</li>
                    </ul>
                </ul>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">2. How We Use Your Information</h3>
                <p className="mt-3">We use your data to:</p>
                <ul className="mt-1 list-disc list-inside">
                    <li className="mt-2">Provide and improve Trusto services</li>
                    <li className="mt-2">Create user accounts</li>
                    <li className="mt-2">Assign or track tasks</li>
                    <li className="mt-2">Send notifications and updates</li>
                    <li className="mt-2">Ensure platform safety and fraud prevention</li>
                    <li className="mt-2">Offer customer support</li>
                </ul>
                <p className="mt-2">We do not sell your personal data.</p>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">3. Data Sharing</h3>
                <p className="mt-3">We may share certain necessary data with:</p>
                <ul className="mt-1 list-disc list-inside">
                    <li className="mt-2">Task helpers/service providers (only relevant info)</li>
                    <li className="mt-2">Legal authorities (only if required by law)</li>
                    <li className="mt-2">Third-party partners (authentication, analytics, hosting)</li>
                </ul>
                <p className="mt-2">All partners follow strict data-protection obligations.</p>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">4. Data Security</h3>
                <p className="mt-3">We use industry-standard measures to protect your data:</p>
                <ul className="mt-1 list-disc list-inside">
                    <li className="mt-2">Encryption</li>
                    <li className="mt-2">Secure servers</li>
                    <li className="mt-2">Access controls</li>                </ul>
                <p className="mt-2">However, no system is 100% secure. Users should protect their login credentials.</p>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">5. Cookies & Tracking</h3>
                <p className="mt-3">Trusto may use cookies for:</p>
                <ul className="mt-1 list-disc list-inside">
                    <li className="mt-2">Login sessions</li>
                    <li className="mt-2">User preference saving</li>
                    <li className="mt-2">Analytics</li>
                </ul>
                <p className="mt-3">You can turn off cookies, but some features may not work properly.</p>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">6. Your Rights</h3>
                <p className="mt-3">You can:</p>
                <ul className="mt-1 list-disc list-inside">
                    <li className="mt-2">Access your data</li>
                    <li className="mt-2">Request corrections</li>
                    <li className="mt-2">Delete your account</li>
                    <li className="mt-2">Withdraw consent for marketing communications</li>
                    <p className="mt-2">Email us at <a className="text-[#028174]" href="#">support@trusto.in</a> for any requests.</p>
                </ul>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">7. Data Retention</h3>
                <p className="mt-3">We retain data only as long as necessary for:</p>
                <ul className="mt-1 list-disc list-inside">
                    <li className="mt-2">Service usage</li>
                    <li className="mt-2">Legal compliance</li>
                    <li className="mt-2">User safety</li>
                </ul>
                <p className="mt-3">Inactive accounts may be deleted after a set period.</p>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">8. Children’s Privacy</h3>
                <p className="mt-3">Trusto is not intended for minors under 13 without supervision. We do not knowingly collect data from them.</p>
            </div>
            <div>
                <h3 className="mt-10 font-bold text-lg">9. Changes to Privacy Policy</h3>
                <p className="mt-3">We may update this document from time to time. We will notify users of important changes.</p>
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
    title: "Privacy Policy — Trusto",
};