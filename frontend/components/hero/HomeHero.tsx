import Link from "next/link";
import InputForm from "../input/InputForm";

export default function HomeHero() {
    return(
        <div className="px-45 py-32 max-w mx-auto bg-white">
            <h1 className="leading-[1.1] text-center text-6xl font-extrabold text-[#028174]">Your trusted way</h1>
            <h1 className="leading-[1.1] text-center text-6xl font-extrabold text-[#028174]">to get things <span className="bg-gradient-to-r from-[#028174] to-[#0AB68B] bg-clip-text text-transparent">done in India</span>.</h1>

            <p className="mt-8 text-center text-gray-600">Trusto takes care of your paperwork and government tasks on</p>
            <p className="text-center text-gray-600">your behalf — safely, legally, and reliably.</p>
            
            <Link href="/login" className="w-42 mt-8 text-white bg-[#0AB68B] hover:bg-[#028174] px-6 py-3 rounded-lg font-medium mx-auto block transition-all shadow-sm hover:shadow">Sign in - it's free</Link>

            <InputForm/>
        </div>
    );
};