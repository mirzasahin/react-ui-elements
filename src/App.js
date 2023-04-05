import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";
import AuthLayout from "./layouts/Auth/index";
import DashboardLayout from "./layouts/Dashboard/index";

//pages
import About from "./pages/Dashboard/About";
import Contact from "./pages/Dashboard/Contact";
import Home from "./pages/Dashboard/Home";
import Login from "./pages/Auth/Login";
import UserDetails from "./pages/Dashboard/UserDetails";
import Users from "./pages/Dashboard/Users";
import Register from "./pages/Auth/Register";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<DashboardLayout/>}> 
            <Route index element={<Home/>}/>
            <Route path='users' element={<Users/>}/>
            <Route path='users/:id' element={<UserDetails/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>

          <Route path="auth" element={<AuthLayout/>}>

            <Route index element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            
          </Route>

          <Route path="*" element={<Error404/>}/>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
