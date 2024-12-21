import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className={`flex min-h-screen w-full bg-[#FAFAFA]`}>
        <Routes>
          <Route path={"/"} Component={Login} />
          <Route path={"/home"} Component={Home} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
