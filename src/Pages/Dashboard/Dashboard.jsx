import React, { useState } from 'react'
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

const Dashboard = () => {
  const[activemenu, setActiveMenu]=useState("Dashboard");
  const[sidebar, setSidebar]=useState(true);
  return (
    <div className={sidebar==true? "layout-wrapper" : "layout-wrapper sidebar-enable vertical-collpsed"}>
    <Header setSidebar={setSidebar} sidebar={sidebar}/>
    <Sidebar activemenu={activemenu} setActiveMenu={setActiveMenu}/>
</div>

  )
}

export default Dashboard
