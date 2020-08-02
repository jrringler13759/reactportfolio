import React from 'react';

function Project (props) {
    {props.projects.map(proj => {
      return(
        <div className="card" style={{width: 18}}>
            <img src={proj.image} className="card-img-top" alt={proj.altTag} />
            <div class="card-body">
              <h5 class="card-title">{proj.title}</h5>
              <a href={proj.github} target = "blank" className="btn btn-primary">GitHub Repo</a>
              <a href={proj.live} target = "blank" className="btn btn-primary">Live Page</a>
              <p>{proj.description}</p>
            </div>
        </div>
          )
        })}
  }
  
  export default Project;