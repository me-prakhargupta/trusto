"use client";

import { useState } from "react";
import DashboardSideBar from "@/components/dashboard/SideBar";
import DashboardMain from "@/components/dashboard/Main";


export default function DashboardPage() {
    const[activeTab, setActiveTab] = useState<string>("dashboard");

    return(
        <div className="p-5 flex bg-gray-100">
            <DashboardSideBar activeTab={activeTab} setActiveTab={setActiveTab}/>
            <DashboardMain activeTab={activeTab}/>
        </div>
    );
};