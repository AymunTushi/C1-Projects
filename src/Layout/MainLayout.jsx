import React, { useState } from 'react'
import Header from '../Components/Shared/Header';
import Sidebar from '../Components/Shared/Sidebar';
import Footer from '../Components/Shared/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    const[activemenu, setActiveMenu]=useState("Dashboard");
      const[sidebar, setSidebar]=useState(true);
  return (
    <div className={`layout-wrapper ${sidebar ? "" : "sidebar-enable vertical-collpsed"}`}>
    <Header setSidebar={setSidebar} sidebar={sidebar}/>
    <Sidebar activemenu={activemenu} setActiveMenu={setActiveMenu}/>
    
   <Outlet/>
        
    <Footer/>
</div>
  )
}

export default MainLayout
