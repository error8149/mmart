import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Footer from "./components/footer";

function App() {
  return (
    
        <div className="flex flex-col min-h-screen bg-slate-500">
      
        <div className="flex-grow">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
          
        </div>
        <Footer />
        </div>
    
  );
}

export default App;
