import Image from "next/image";
import Dash from "./Dash";
import Service from "./Service";
import Calendar from "./Calendar";
import Setting from "./Settings";
import Help from "./Help";
import DashboardHeader from "@/components/dashboard/Header";


export default function Dashboard({ activeTab }: { activeTab: string }) {
    return(
        <div className="flex-1 w-full">
            <DashboardHeader/>
            {activeTab === "dashboard" && <Dash/>}
            {activeTab === "services" && <Service/>}
            {activeTab === "calendar" && <Calendar/>}
            {activeTab === "settings" && <Setting/>}
            {activeTab === "help" && <Help/>}
        </div>
    );
};