import React, { useState, useContext } from 'react'
import sublinks from './data'


const AppContent = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocaltion] = useState({});

    const [page, setPage] = useState({ page: '', links: [] })

    console.log(page);
    console.log(location);
    console.log(isSubmenuOpen);


    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    /*
    lấy dữ liệu từ Navbar text = page; coordinates = {center, bottom}
    kiểm tra dữ liệu đầu tiên được tìm thấy === text
    
    */
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page)
        setLocaltion(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }
    return <AppContent.Provider value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSubmenu,
        openSidebar,
        closeSubmenu,
        closeSidebar,
        location,
        page
    }}>
        {children}
    </AppContent.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContent);
}