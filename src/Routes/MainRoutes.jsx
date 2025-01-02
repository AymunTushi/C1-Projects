import React from 'react'

import Dashboard from '../Pages/Dashboard/Dashboard'
import Services from '../Pages/Services'
import Ticket from '../Pages/Ticket'
import Billing from '../Pages/Billing'
import Notification from '../Pages/Notification'
import Notice from '../Pages/Notice'
import AssignContact from '../Pages/AssignContact'
import TechnicalInfo from '../Pages/TechnicalInfo'
import MainLayout from '../Layout/MainLayout'


export const routes=[
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {path: "/", element: <Dashboard/>},
      {path: "/services", element: <Services/>},
      {path: "/ticket", element: <Ticket/>},
      {path: "/billing", element: <Billing/>},
      {path: "/notification", element: <Notification/>},
      {path: "/notice", element: <Notice/>},
      {path: "/assign-contact", element: <AssignContact/>},
      {path: "/technical-info", element: <TechnicalInfo/>},
      
    ]
  }
]