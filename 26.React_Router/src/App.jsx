
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";
import User from "./components/user/User";
import SIngleUser from "./components/user/SIngleUser";

function App() {
  return (
  
     <Router>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*"  element={<NotFound/>} />
        <Route path="/user"  element={<User/>} />

        <Route path="/user/:id" element={<SIngleUser/>}  />
      </Routes>
     </Router>
      
  );
}

export default App;
