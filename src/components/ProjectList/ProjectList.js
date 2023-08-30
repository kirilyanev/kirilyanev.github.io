// import { Component } from "react";
// import Project from "../Project/Project.js";

// import projects from "../../data/projectsData.js";


// class ProjectList extends Component {

//     render () {
//         // projects.map(project => console.log(project));
//         return (
//             <ul className="project-list">

//                 {projects.map(project => {
//                     return <Project name={project.name} image={project.image} alt={project.alt} url={project.url} description={project.description}/>;
//                 })}

//             </ul>
//         );
//     }
// }

// export default ProjectList;




// import { Component } from "react";
// import Project from "../Project/Project.js";
// import './ProjectList.css';

// import projects from "../../data/projectsData.js";


// class ProjectList extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render () {
//         console.log(this.props);
//         // projects.map(project => console.log(project));
//         return (
//             <ul className="project-list">

//                 {projects.map((project, index) => {
//                     return <Project
//                     key={index}
//                     name={project.name} 
//                     image={project.image}
//                     alt={project.alt}
//                     url={project.url}
//                     description={project.description}
//                     />;
//                 })}

//             </ul>
//         );
//     }
// }

// export default ProjectList;


// import React, { Component } from "react";
// import Project from "../Project/Project.js";
// import './ProjectList.css';
// import projects from "../../data/projectsData.js";

// class ProjectList extends Component {
//     constructor(props) {
//         super(props);

//         // Initialize an array to keep track of the clicked state for each project
//         const projectClickedStates = Array(projects.length).fill(false);

//         this.state = {
//             projectClickedStates: projectClickedStates,
//         };
//     }

//     // Function to toggle the "Show more"/"Hide" state for a project
//     toggleClick = (index) => {
//         const { projectClickedStates } = this.state;
//         projectClickedStates[index] = !projectClickedStates[index];
//         this.setState({ projectClickedStates });
//     };

//     render() {
//         return (
//             <ul className="project-list">
//                 {projects.map((project, index) => {
//                     return (
//                         <Project
//                             key={index}
//                             name={project.name}
//                             image={project.image}
//                             alt={project.alt}
//                             url={project.url}
//                             description={project.description}
//                             isClicked={this.state.projectClickedStates[index]}
//                             toggleClick={() => this.toggleClick(index)}
//                         />
//                     );
//                 })}
//             </ul>
//         );
//     }
// }

// export default ProjectList;



import React, { Component } from "react";
import Project from "../Project/Project.js";
import './ProjectList.css';
import projects from "../../data/projectsData.js";

class ProjectList extends Component {
    constructor(props) {
        super(props);

        // Initialize an array to keep track of the clicked state for each project
        const projectClickedStates = Array(projects.length).fill(false);

        this.state = {
            projectClickedStates: projectClickedStates,
        };
    }

    // Function to toggle the "Show more"/"Hide" state for a project
    toggleClick = (index) => {
        const { projectClickedStates } = this.state;
        projectClickedStates[index] = !projectClickedStates[index];
        this.setState({ projectClickedStates });
    };

    render() {
        return (
            <ul className="project-list">
                {projects.map((project, index) => {
                    return (
                        <Project
                            project={project} // Pass the entire project object here
                            key={index}
                            name={project.name}
                            image={project.image}
                            alt={project.alt}
                            url={project.url}
                            description={project.description}
                            isClicked={this.state.projectClickedStates[index]}
                            toggleClick={() => this.toggleClick(index)}
                            handleProjectClick={this.props.handleProjectClick}
                        />
                    );
                })}
            </ul>
        );
    }
}

export default ProjectList;






// key={index}
// name={project.name}
// image={project.image}
// alt={project.alt}
// url={project.url}
// description={project.description}
// isClicked={this.state.projectClickedStates[index]}
// toggleClick={() => this.toggleClick(index)}
// handleProjectClick={() => this.props.handleProjectClick(index)} // Pass the function here