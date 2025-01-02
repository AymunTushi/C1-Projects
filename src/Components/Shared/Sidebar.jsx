import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({activemenu,setActiveMenu}) => {
  return (
    <div>
      <div className="vertical-menu">
  <div data-simplebar className="h-100">
    {/*- Sidemenu */}
    <div id="sidebar-menu">
      {/* Left Menu Start */}
      <ul className="metismenu list-unstyled" id="side-menu">
        <li className="menu-title" key="t-menu">Menu</li>
        <li className={activemenu=="Dashboard" ? "mm-active" : ""}>
          <Link to="/" onClick={()=>setActiveMenu("Dashboard")} className="waves-effect">
            <i className="bx bx-home-circle" />
            <span key="t-dashboards">Dashboard</span>
          </Link>
          </li>
          
        <li className={activemenu=="Services" ? "mm-active" : ""}>
          <Link to="/services" onClick={()=>setActiveMenu(activemenu=="Services" ? "": "Services")} className=" waves-effect">
            <i className="bx bx-store" />
            <span key="t-ecommerce">Services</span>
          </Link>
          
        </li>
       
       
        <li className={activemenu=="Ticket" ? "mm-active" : ""}>
          <Link to="/ticket" onClick={()=>setActiveMenu("Ticket")} className="waves-effect">
            <i className="bx bx-receipt" />
            <span key="t-invoices">Ticket</span>
          </Link>
          
        </li>
        <li className={activemenu=="Billing" ? "mm-active" : ""}>
          <Link to="/billing" onClick={()=>setActiveMenu("Billing")} className=" waves-effect">
            <i className="bx bx-briefcase-alt-2" />
            <span key="t-projects">Billing</span>
          </Link>
          
        </li>
        <li className={activemenu=="Notification" ? "mm-active" : ""}>
          <Link to="/notification" onClick={()=>setActiveMenu("Notification")} className="waves-effect">
            <i className="bx bx-task" />
            <span key="t-tasks">Notification</span>
          </Link>
         
        </li>
        <li className={activemenu=="Notice" ? "mm-active" : ""}>
          <Link to="/notice" onClick={()=>setActiveMenu("Notice")} className="waves-effect">
            <i className="bx bx-detail" />
            <span key="t-blog">Notice</span>
          </Link>
          
        </li>
        <li className={activemenu=="Assign Contact" ? "mm-active" : ""}>
          <Link to="/assign-contact" onClick={()=>setActiveMenu("Assign Contact")} className="waves-effect">
            <i className="bx bxs-user-detail" />
            <span key="t-contacts">Assign Contact</span>
          </Link>
          
        </li>

        <li className={activemenu=="Technical Information" ? "mm-active" : ""}>
          <Link to="/technical-info" onClick={()=>setActiveMenu("Technical Information")} className="waves-effect">
            <i className="bx bxs-user-detail" />
            <span key="t-contacts">Technical Information</span>
          </Link>
          
        </li>
       
      </ul>
    </div>
    {/* Sidebar */}
  </div>
</div>
    </div>
  )
}

export default Sidebar
