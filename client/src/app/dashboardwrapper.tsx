"use client"

import React, { useEffect } from 'react'
import Navbar from "@/app/(components)/Navbar";
import Sidebar from '@/app/(components)/Sidebar';
import StoreProvider, { useAppSelector } from './redux'

// type Props = {}

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    );

    const isDarkMode = useAppSelector(
        (state) => state.global.isDarkMode
    )

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.add("light");
        }
    });

    return (
        <div className={`${isDarkMode ? "dark" : "light"} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
            <Sidebar />
            <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"}`}>
                <Navbar />
                {children}
            </main>
        </div>
    )
}

const Dashboardwrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        // <div className='light flex bg-gray-50 text-gray-900 w-full min-h-screen'>
        //     <Sidebar />
        //     <main className='flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24'>
        //         <Navbar />
        //         {children}
        //     </main>
        // </div> 
        <StoreProvider>
            <DashboardLayout>{children}</DashboardLayout>
        </StoreProvider>
    )
}

export default Dashboardwrapper