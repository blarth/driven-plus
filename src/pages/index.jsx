import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Subscription from "./Subscription";
import Subscriptions from "./Subscriptions";


export default function Pages(){
  return (
      
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/sign-up" element={<SignUp />}/>
      <Route path="/subscriptions" element={<Subscriptions />}/>
      <Route path="/subscription/:id" element={<Subscription />}/>
      <Route path="/home" element={<Home />}/>
      {/* <Route path="/users/:id" element={<User />}/>
      <Route path="/users/:id/update" element={<UpdateUser />}/> */}
    </Routes>
  )
}

