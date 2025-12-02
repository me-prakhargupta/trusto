"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import DashboardPage from "./dashboard/page";
export default function ClientLayout({
    children,
} : {
    children: React.ReactNode;
}) {

    const pathname = usePathname();

    const authRoutes = ["/dashboard", "/login", "/signup"];
    const hideLayout = authRoutes.includes(pathname);

    return(
        <>
            {!hideLayout && <Navbar />}
            {children}
            {!hideLayout && <Footer />}
        </>
    );
};