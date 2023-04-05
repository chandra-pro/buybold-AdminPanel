import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { adminVerify } from '../services/Apis';
import Spinner from 'react-bootstrap/Spinner';
import "../styles/mix.css"

const AdminLogin = () => {

    const [email, setEmail] = useState("");
    const [password,setPasword]=useState("")
    const [spiner,setSpiner] = useState(false);

    const navigate = useNavigate();



    // verifyAdmin
    const verifyAdmin = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Enter Your Email !")
        } else if (!email.includes("@")) {
            toast.error("Enter Valid Email !")
        }
         else {
            setSpiner(true)
            const data = {
                email: email,
                password:password
            }

            const response = await adminVerify(data);

            if (response.status === 200) {
                setSpiner(false)
                navigate("/adminDashboard",{state: {name:'Chandramani'}})
            } else {
                toast.error(response.response.data.error);
            }
        }
    }

    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
                        <p>Hi, we are you glad you are back. Please login.</p>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Email</label>
                            <input type="password" name="password" id="" onChange={(e) => setPasword(e.target.value)} placeholder='Enter password' />
                        </div>
                        <button className='btn' onClick={verifyAdmin}>Login
                        {
                            spiner ? <span><Spinner animation="border" /></span>:""
                        }
                        </button>
                        
                    </form>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}

export default AdminLogin