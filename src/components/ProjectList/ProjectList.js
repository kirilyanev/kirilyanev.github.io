import { Component } from "react";
import Project from "../Project/Project.js";

import projects from "../../data/projectsData.js";


class ProjectList extends Component {
    render () {
        // projectsData.map(project => console.log(project));
        return (
            <ul className="project-list">

                {projects.map(project => {
                    return <Project name={project.name} image={project.image} alt={project.alt} url={project.url} description={project.description}/>;
                })}

            </ul>
        );
    }
}

export default ProjectList;