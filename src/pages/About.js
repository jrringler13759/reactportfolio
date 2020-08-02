import React from "react";


function About() {
  return (
    <div className = "container" id = "aboutme">
      <div class = "col-md">
        <div class = "row justify-content-center">
            <h1 id = "aboutMe">About Me</h1>
        </div>
        
            <hr> </hr>

        <div class = "row justify-content-center">
            <img id = "profilePic" class = "responsive" src = "Assets/ProfilePic.jpg" alt = "Jessica Ringler" />
        </div>
        
        <br />

        <div class = "row">
            <p>I have over 8 years in experience with teaching mathematics. My knowledge in mathematics has made my transition to Web Development much easier. I enjoy the nature of coding and look forward to a new career as a Full-Stack Web Developer. </p>
        </div>
      </div>
    </div>
  );
}

export default About;
