import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/App.css";
import Admin from "./Components/Admin";
import Catalog from "./Components/Catalog";
import Contact from "./Components/Contact";
import DashBord from "./Components/DashBord";
import HomePage from "./Components/HomePage";
import { default as Login, default as LoginPage } from "./Components/Login";
import OrderConformation from "./Components/OrderConformation";
import Payment from "./Components/Payment";
import SingIn from "./Components/SingIn";
import TestDrive from "./Components/TestDrive";
import Vahicle from "./Components/Vahicle";
import ProfilePage from "./Components/profile";
import Submitted from "./Ecomponents/Submitted";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/sign" element={<SingIn/>} />
        <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/homepage" element={<HomePage/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Vahicle" element={<Vahicle/>} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/TestDrive" element={<TestDrive/>}/>
          <Route path="/Catalog" element={<Catalog/>} />
          <Route path="/Payment" element={<Payment/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/DashBord" element={<DashBord/>} />
          <Route path="/submitted" element={<Submitted/>} />

          <Route path="/OrderConformation" element={<OrderConformation/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}