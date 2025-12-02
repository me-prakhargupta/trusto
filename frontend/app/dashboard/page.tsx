import SideBar from "@/components/dashboard/SideBar";
import DashboardMain from "@/components/dashboard/DashboardMain";


export default function DashboardPage() {

    return(
        <div className="p-5 flex">
            <SideBar/>
            <DashboardMain/>
        </div>
    );
};