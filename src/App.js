import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Otp from "./pages/Otp";
import Error from "./pages/Error";
import Headers from "./components/Headers";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/calender";
import AdminSubDashboard from "./pages/AdminSubDashboard";
import AddFeeditem from "./pages/AddFeeditems";
import ReelList from "./pages/ReelList";
import ProductsList from "./pages/ProductsList";
import CreateProduct from "./pages/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct";

function App() {
  const user = localStorage.getItem("userdbtoken");
  return (
    <>
      <Headers />
      <Routes>
        {user && <Route path="/" exact element={<Dashboard />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/otp" element={<Otp />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminSubDashboard" element={<AdminSubDashboard />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        {user && <Route path="/form" element={<Form />} />}
        {user && <Route path="/bar" element={<Bar />} />}
        {user && <Route path="/faq" element={<FAQ />} />}
        {user && <Route path="/calendar" element={<Calendar />} />}
        {user && <Route path="/feeditems" element={<AddFeeditem />} />}

        {user && <Route path="/product-list" element={<ProductsList />} />}
        {user && (
          <Route path="/product-list/create" element={<CreateProduct />} />
        )}
        {user && (
          <Route
            path="/product-list/update/:spid/:pid"
            element={<UpdateProduct />}
          />
        )}

        <Route path="/reellist" element={<ReelList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
