import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className = "navbar justify-content-center">&copy; Jessica Ringler
    <div className = "navbar justify-content-end">
        
        <a href = "https://github.com/jrringler13759" target = "blank"><i className="fab fa-github"></i></a>
        <a href = "https://www.linkedin.com/in/jessica-ringler-8738b119b/" target = "blank"><i className="fab fa-linkedin-in"></i></a>
        <a href = "mailto:jrringler13759@gmail.com" target = "blank"><i className="far fa-envelope"></i></a>
    
    </div>
</footer>
  );
}

export default Footer;
