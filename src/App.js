import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Otp from './pages/Otp';
import Error from './pages/Error';
import Headers from './components/Headers';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import { useState } from "react";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calender";
import AdminSubDashboard from './pages/AdminSubDashboard';
import ProductForm from './pages/ProductForm';
import ProductList from './pages/ProductList';



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <>
    <Headers />
    
      
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user/otp' element={<Otp />} />
        <Route path='/adminLogin' element={<AdminLogin />} />
        <Route path='/adminSubDashboard' element={<AdminSubDashboard/>} />
        <Route path='/adminDashboard' element={<AdminDashboard />} />

              
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
             
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              
              <Route path="/product-form" element={<ProductForm />} />
              <Route path="/productlist" element={<ProductList />} />

        <Route path='*' element={<Error />} />
      </Routes>
     
    </>
  );
}

export default App;
