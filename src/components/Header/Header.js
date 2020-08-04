import React from "react";
import { Link } from "react-router-dom";
import "./HeaderStyle.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <nav className="navbar">
        <div className = "brand-name-div">
          <span class="brand-name">Jessica Ringler</span>  
        </div>
        
        <div className="navbar justify-content-end">
          
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
        
         
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
        
     
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
        
      
            <a href = "JessicaRingler-Resume.pdf" target = "blank" >R&#233;sum&#233;</a>
          
        </div>
    </nav>
  );
}

export default Header;
