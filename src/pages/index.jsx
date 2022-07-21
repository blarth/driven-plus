import { Routes, Route } from "react-router-dom";

export default function Pages(){
  return (
    <Routes>
      <Route path="/" element={<h1>Hello</h1>}/>
    </Routes>
  )
}

