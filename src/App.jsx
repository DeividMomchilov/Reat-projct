import { Route, Routes } from "react-router";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import RegisterForm from "./components/registerForm/RegisterForm";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
      </Routes>
    </>
  )
}