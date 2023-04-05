import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";


import Topbar from "../scenes/global/Topbar";
import SidebarSeller from "../scenes/global/SidebarSeller";

import { tokens } from "../theme";

import AdminSubDashboard from './AdminSubDashboard';

import { useMode } from "../theme";

import './AdminDashboard.css'

const Dashboard = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
   
    if (token) {
      console.log("user valid")
    } else {
      navigate("*")
    }
  }

  useEffect(() => {
    userValid();
  }, [])
  return (
    
    <>
   
     <div className='dashboard-container'>
     <SidebarSeller isSidebar={isSidebar} />

          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <AdminSubDashboard/>
            </main>
            </div>
 
 </>
  )
}

export default Dashboard