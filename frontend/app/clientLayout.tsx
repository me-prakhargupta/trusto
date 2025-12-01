"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
export default function ClientLayout({
    children,
} : {
    children: React.ReactNode;
}) {

    const pathname = usePathname();

    const authRoutes = ["/login", "/signup"];
    const hideLayout = authRoutes.includes(pathname);

    return(
        <>
            {!hideLayout && <Navbar />}
            {children}
            {!hideLayout && <Footer />}
        </>
    );
};