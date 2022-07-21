import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Subscription from "./Subscription";


export default function Pages(){
  return (
      
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/sign-up" element={<SignUp />}/>
      <Route path="/subscription" element={<Subscription />}/>
    </Routes>
  )
}

