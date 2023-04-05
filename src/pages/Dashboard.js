import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";


import Topbar from "../scenes/global/Topbar";
import SidebarSeller from "../scenes/global/SidebarSeller";

import { tokens } from "../theme";

import AdminSubDashboard from './AdminSubDashboard';




import Bar from "../scenes/bar";
import Form from "../scenes/form";

import FAQ from "../scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";

import './AdminDashboard.css'

const Dashboard = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  
const colors = tokens(theme.palette.mode);
  

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
    {/* <Topbar setIsSidebar={setIsSidebar} /> 
    <div className='dashboard-container'>
     <SidebarSeller isSidebar={isSidebar} />
     </div> */}
     <div className='dashboard-container'>
     <SidebarSeller isSidebar={isSidebar} />

          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <AdminSubDashboard/>
            </main>
            </div>
            
     {/* <div className='Row-1'>
     <Box m="20px">
     
     <Box display="flex" justifyContent="space-between" alignItems="center">
       <Header title="DASHBOARD" subtitle="Welcome to Seller dashboard" />
           
     <Box>
     <Button
       sx={{
         backgroundColor: colors.blueAccent[700],
         color: colors.grey[100],
         fontSize: "14px",
         fontWeight: "bold",
         padding: "10px 20px",
       }}
     >
       <DownloadOutlinedIcon sx={{ mr: "10px" }} />
       Download Reports
     </Button>
   </Box>
 </Box>
 

 <div>
 <Box
   display="grid"
   gridTemplateColumns="repeat(12, 1fr)"
   gridAutoRows="140px"
   gap="20px"
 >
   
   <Box
     gridColumn="span 3"
     backgroundColor={colors.primary[400]}
     display="flex"
     alignItems="center"
     justifyContent="center"
   >
     <StatBox
       title="12,361"
       subtitle="Product Sale"
       progress="0.75"
       increase="+10%"
       icon={
         <EmailIcon
           sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
         />
       }
     />
   </Box>
   <Box
     gridColumn="span 3"
     backgroundColor={colors.primary[400]}
     display="flex"
     alignItems="center"
     justifyContent="center"
   >
     <StatBox
       title="431,225"
       subtitle="Money Obtained"
       progress="0.50"
       increase="+21%"
       icon={
         <PointOfSaleIcon
           sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
         />
       }
     />
   </Box>
   <Box
     gridColumn="span 3"
     backgroundColor={colors.primary[400]}
     display="flex"
     alignItems="center"
     justifyContent="center"
   >
     <StatBox
       title="32,441"
       subtitle="New Products"
       progress="0.30"
       increase="+5%"
       icon={
         <PersonAddIcon
           sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
         />
       }
     />
   </Box>
   <Box
     gridColumn="span 3"
     backgroundColor={colors.primary[400]}
     display="flex"
     alignItems="center"
     justifyContent="center"
   >
     <StatBox
       title="1,325,134"
       subtitle="Traffic Received"
       progress="0.80"
       increase="+43%"
       icon={
         <TrafficIcon
           sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
         />
       }
     />
   </Box>
   </Box>
 

 </div>
 </Box>
 </div> */}
 
 </>
  )
}

export default Dashboard