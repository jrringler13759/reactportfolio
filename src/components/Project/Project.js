import React from 'react';
import "./ProjectStyle.css"

function Project (props) {
  return (
    props.projects.map((proj, i) => {
      return(
          <div key = {i} className="card">
              <img src={proj.image} className="card-img-top" alt={proj.altTag} />
              <div className="card-body">
                <h6 className="card-title">{proj.title}</h6>
                <p id ="projdesc">{proj.description}</p>
              </div>
              <div className="card-body">
                <a id = "github" href={proj.github} target = "blank" className="btn btn-primary">GitHub</a>
                <a id = "live" href={proj.live} target = "blank" className="btn btn-primary">Live Page</a>
              </div>
          </div>
          )
        })
    )
  }
  
  export default Project;