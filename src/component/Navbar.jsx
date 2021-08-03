import { Link } from "react-router-dom";

export default function Nav() {
    
    return <div>
        <Link to="/">Home</Link><br/>
        <Link to="/contact">Contact</Link><br/>
         <Link to="/about">About</Link><br/>
        <Link to="/service">Service</Link><br/>
         <Link to="/login">Login</Link>
        
    </div>
}