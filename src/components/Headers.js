import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate,NavLink } from "react-router-dom";


const Headers = () => {
  const navigate=useNavigate();
  const handleLogout = () => {
		localStorage.removeItem("userdbtoken");
    navigate('/login');

	};
  const token=localStorage.getItem("userdbtoken");
  return (
    <>
      <Navbar bg="dark" variant="dark">
        
       
        <img src={`../../assets/WhatsApp_Image_2023-03-23_at_15.11.05-removebg-preview-removebg-preview (1).png`} style={{width:80}} alt="" />
        <h2 className=' text-light text-decoration' style={{marginRight:80, color:"yellow"}}>BuyBOLd</h2>
        <Container>
         
          
         <h2 style={{color:"white",marginLeft:"160px"}}> Admin Dashboard</h2>
          <Nav className="">
         {token && <button className="bg-white" style={{backgroundColor:'white',width:90,marginRight:15}} onClick={handleLogout}>
					Logout
				</button>}
            <NavLink to="/adminLogin" className="mt-3 mx-2 text-light text-decoration-none">Dashboard Login</NavLink>
        
          </Nav>
          </Container>
        
      </Navbar>
    </>
  )
}

export default Headers