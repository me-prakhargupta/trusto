import Image from "next/image";
import Calendar from "./Calendar";
import Setting from "./Settings";
import Help from "./Help";
import DashboardHeader from "@/components/dashboard/Header";


export default function Dashboard({ activeTab }: { activeTab: string }) {
    return(
        <div className="flex-1 w-full">
            <DashboardHeader/>
            {activeTab === "calendar" && <Calendar/>}
            {activeTab === "settings" && <Setting/>}
            {activeTab === "help" && <Help/>}
        </div>
    );
};