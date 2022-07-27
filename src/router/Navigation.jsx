import { NavLink, Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import reactLogo from '../assets/react.svg'

const Navigation = () => {
    return (
        <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={reactLogo} alt="logo" />
                <ul>
                    <li>
                        <NavLink to="/home" className={ ({isActive})=>isActive ? 'nav-active': '' }>Home</NavLink>
                    </li>
                    <li>
                    <  NavLink to="/about" className={ ({isActive})=>isActive ? 'nav-active': '' }>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={ ({isActive})=>isActive ? 'nav-active': '' }>Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/home"     element={ <HomePage/> }/>
                <Route path="about"     element={ <AboutPage /> }/>
                <Route path="contact"   element={ <ContactPage /> }/>
                <Route path="/*"        element={ <Navigate to="/home" /> }/>
        </Routes>
        </div>
        </BrowserRouter>
    );
};

export default Navigation;