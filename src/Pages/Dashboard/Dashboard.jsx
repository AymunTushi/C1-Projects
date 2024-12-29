import React, { useState } from 'react'
import Header from '../../Components/Shared/Header';
import Sidebar from '../../Components/Shared/Sidebar';
import Footer from '../../Components/Shared/Footer';
import TestDashboard from '../../Components/TestDashboard';

const Dashboard = () => {
  const[activemenu, setActiveMenu]=useState("Dashboard");
  const[sidebar, setSidebar]=useState(true);
  return (
    <div className={`layout-wrapper ${sidebar ? "" : "sidebar-enable vertical-collpsed"}`}>
    <Header setSidebar={setSidebar} sidebar={sidebar}/>
    <Sidebar activemenu={activemenu} setActiveMenu={setActiveMenu}/>
    <TestDashboard/>
    <Footer/>
</div>

  )
}

export default Dashboard
