import React from "react";
import "./AboutStyle.css";


function About() {
  return (
    <div className = "container" id = "aboutme">
      <div className = "col-md">
        <div className = "row justify-content-center">
            <h1 id = "aboutMe">About Me</h1>
        </div>

        <div className = "row justify-content-center">
          <img id = "profilePic" className = "responsive" src = {process.env.PUBLIC_URL + "Assets/ProfilePic.jpg"} alt = "Jessica Ringler" />
        </div>
        
        <br />

        <div className = "row">
            <p>I have over 8 years in experience with teaching mathematics. My knowledge in mathematics has made my transition to Web Development much easier. I enjoy the nature of coding and look forward to a new career as a Full-Stack Web Developer. </p>
        </div>
      </div>
    </div>
  );
}

export default About;
