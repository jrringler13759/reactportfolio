import React, { Component } from "react";
import projects from "../../utils/projects.json";
import Project from "../../components/Project/Project";
import "./PortfolioStyle.css";



class Portfolio extends Component {
    state = {
        projects: projects
    }

    render() {
        return (
            <div className = "container" id = "portfolio">
                <div className = "row">
                    <h1>Portfolio</h1>
                </div>

                <hr></hr>

                <div className = "row justify-content-center">
                 <Project projects = {this.state.projects} />
                </div>

            </div>
        )
    }

}


export default Portfolio;



//here is where you will call the project in the render