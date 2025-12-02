"use client";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
    activeTab: string,
    setActiveTab: (value : string) => void;
}

export default function SideBar({activeTab, setActiveTab} : SidebarProps) {
    return(
        <div className="flex">
            <div>
                <aside className="w-60 bg-white border-gray-100 shadow rounded min-h-screen px-10 py-7">
                    <div className=""><Link href="/"><Image className="mt-1" src="/brand-logo.png" alt="Trusto" width={200} height={200}/></Link></div>
                    <header className="mt-10 hover:cursor-pointer">
                        <div className="text-sm font-bold text-gray-400 mb-2">Menu</div>

                        <span onClick={() => setActiveTab("dashboard")} className="flex h-10 w-35 items-center rounded-4xl hover:cursor-pointer">
                            <i className={`fa-solid fa-square-poll-vertical text-lg ${activeTab === "dashboard" ? "text-[#028174] font-bold" : "text-gray-700"}`}></i>
                            <p className={`px-2 py-1 ${activeTab === "dashboard" ? "text-[#028174] font-bold" : "text-gray-500"}`}>Dashboard</p>
                        </span>

                        <span onClick={() => setActiveTab("services")} className="flex h-10 w-35 items-center rounded-4xl hover:cursor-pointer">
                            <i className={`fa-solid fa-scroll text-lg ${activeTab === "services" ? "text-[#028174] font-bold" : "text-gray-700"}`}></i>
                            <p className={`px-2 py-1 ${activeTab === "services" ? "text-[#028174] font-bold" : "text-gray-500"}`}>Services</p>
                        </span>

                        <span onClick={() => setActiveTab("calendar")} className="flex h-10 w-35 items-center rounded-4xl hover:cursor-pointer">
                            <i className={`fa-solid fa-calendar-days text-lg ${activeTab === "calendar" ? "text-[#028174] font-bold" : "text-gray-700"}`}></i>
                            <p className={`px-2 py-1 ${activeTab === "calendar" ? "text-[#028174] font-bold" : "text-gray-500"}`}>Calendar</p>
                        </span>
                    </header>
                    <main className="mt-10 hover:cursor-pointer">
                        <div className="text-sm font-bold text-gray-400 mb-2">General</div>

                        <span onClick={() => setActiveTab("settings")} className="flex h-10 w-35 items-center rounded-4xl hover:cursor-pointer">
                            <i className={`fa-solid  fa-gear text-lg ${activeTab === "settings" ? "text-[#028174] font-bold" : "text-gray-700"}`}></i>
                            <p className={`px-2 py-1 ${activeTab === "settings" ? "text-[#028174] font-bold" :"text-gray-500"}`}>Settings</p>
                        </span>

                        <span onClick={() => setActiveTab("help")} className="flex h-10 w-35 items-center rounded-4xl hover:cursor-pointer">
                            <i className={`fa-solid fa-circle-info text-lg ${activeTab === "help" ? "text-[#028174] font-bold" : "text-gray-700"}`}></i>
                            <p className={`px-2 py-1 ${activeTab === "help" ? "text-[#028174] font-bold" : "text-gray-500"}`}>Help</p>
                        </span>

                        <span className="flex h-10 w-35 items-center rounded-4xl hover:cursor-pointer">
                            <i className="fa-solid fa-right-from-bracket text-gray-700 text-lg"></i>
                            <p className="px-2 text-gray-500 py-1 ">Log out</p>
                        </span>
                    </main>
                </aside>
            </div>
        </div>
    );
};