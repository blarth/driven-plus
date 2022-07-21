import { Routes, Route } from "react-router-dom";
import Login from "./Login";


export default function Pages(){
  return (
      
    <Routes>
      <Route path="/" element={<Login />}/>
    </Routes>
  )
}

