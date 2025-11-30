import Link from "next/link";

export default function Footer() {
    return(
        <div className="px-45 py-10 flex item-center justify-between  border-t-[0.5px] border-[#028174] bg-white">

            <div className="flex item-center text-sm">
                <Link href="/" className="py-1.5 text-black">Copyright &copy; 2025 Trusto</Link>
            </div>
            
            <div className="flex item-center gap-2 text-sm">
                <Link href="/careers" className="text-gray-600 hover:text-black py-1.5 px-3">Careers</Link>
                <Link href="/safety" className="text-gray-600 hover:text-black py-1.5 px-3">Safety Guidelines</Link>
                <Link href="/terms" className="text-gray-600 hover:text-black py-1.5 px-3">Terms</Link>
                <Link href="/privacy" className="text-gray-600 hover:text-black py-1.5 px-3">Privacy</Link>
                <Link href="/report" className="text-gray-600 hover:text-black py-1.5 px-3">Report</Link>
            </div>
        </div>
    );
};