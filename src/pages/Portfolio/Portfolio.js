import React, { Component } from "react";
import projects from "../../utils/projects.json";
import Project from "../../components/Project/Project";



class Portfolio extends Component {
    state = {
        projects: projects
    }

    render() {
        return (
            <div>
                <Project projects = {this.state.projects} />
            </div>
        )
    }

}


export default Portfolio;



//here is where you will call the project in the render