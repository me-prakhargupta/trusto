"use client";

import { useState } from "react";

export default function SideBar() {
    const[selectDashboard, setSelectDashboard] = useState(false);
    const handleSelectDashboard = () => {
        setSelectDashboard(true);
        setSelectTask(false);
        setSelectedCalendar(false);
        setSetting(false);
        setHelp(false);
    }

    const[selectTask, setSelectTask] = useState(false);
    const handleSelectTask = () => {
        setSelectTask(true);
        setSelectDashboard(false);
        setSelectedCalendar(false);
        setSetting(false);
        setHelp(false);
    }

    const[selectCalendar, setSelectedCalendar] = useState(false);
    const handleSelectCalendar = () => {
        setSelectedCalendar(true);
        setSelectDashboard(false);
        setSelectTask(false);
        setSetting(false);
        setHelp(false);
    }

    const[selectSetting, setSetting] = useState(false);
    const handleSetting = () => {
        setSetting(true);
        setSelectedCalendar(false);
        setSelectDashboard(false);
        setSelectTask(false);
        setHelp(false);
    }

    const[selectHelp, setHelp] = useState(false);
    const handleHelp = () => {
        setHelp(true);
        setSetting(false);
        setSelectedCalendar(false);
        setSelectDashboard(false);
        setSelectTask(false);
    }
    return(
        <div className="flex">
            <div>
                <aside className="w-60 bg-gray-100 border-gray-100 shadow rounded min-h-screen px-10 py-7">
                    <div>Trusto</div>
                    <header className="mt-10 hover:cursor-pointer">
                        <div className="text-sm font-bold text-gray-400 mb-2">Menu</div>

                        <span onClick={handleSelectDashboard} className="flex h-10 w-35 items-center rounded-4xl hover:cursor-pointer">
                            <i className={selectDashboard?"fa-solid fa-square-poll-vertical text-lg text-[#028174] font-bold":"fa-solid text-gray-700 fa-square-poll-vertical text-lg"}></i>
                            <p className={selectDashboard? "px-2 py-1 text-[#028174] font-bold" :"px-2 py-1 text-gray-500"}>Dashboard</p>
                        </span>

                        <span onClick={handleSelectTask} className="flex h-10 w-35 items-center rounded-4xl hover:cursor-pointer">
                            <i className={selectTask?"fa-solid fa-scroll text-lg text-[#028174] font-bold":"fa-solid fa-scroll text-lg text-gray-700"}></i>
                            <p className={selectTask? "px-2 py-1 text-[#028174] font-bold" :"px-2 py-1 text-gray-500"}>Tasks</p>
                        </span>

                        <span onClick={handleSelectCalendar} className="flex h-10 w-35 items-center rounded-4xl hover:cursor-pointer">
                            <i className={selectCalendar?"fa-solid fa-calendar-days text-lg text-[#028174] font-bold":"fa-solid fa-calendar-days text-gray-700 text-lg"}></i>
                            <p className={selectCalendar?"px-2 py-1 text-[#028174] font-bold":"px-2 text-gray-500 py-1"}>Calendar</p>
                        </span>
                    </header>
                    <main className="mt-10 hover:cursor-pointer">
                        <div className="text-sm font-bold text-gray-400 mb-2">General</div>

                        <span onClick={handleSetting} className="flex h-10 w-35 items-center rounded-4xl hover:cursor-pointer">
                            <i className={selectSetting?"fa-solid  fa-gear text-lg text-[#028174] font-bold":"fa-solid text-gray-700  fa-gear text-lg"}></i>
                            <p className={selectSetting? "px-2 py-1 text-[#028174] font-bold" :"px-2 py-1 text-gray-500"}>Settings</p>
                        </span>

                        <span onClick={handleHelp} className="flex h-10 w-35 items-center rounded-4xl hover:cursor-pointer">
                            <i className={selectHelp?"fa-solid  fa-circle-info text-lg text-[#028174] font-bold":"fa-solid text-gray-700  fa-circle-info text-lg"}></i>
                            <p className={selectHelp? "px-2 py-1 text-[#028174] font-bold" :"px-2 py-1 text-gray-500"}>Help</p>
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