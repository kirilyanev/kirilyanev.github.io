import React, { useState } from 'react';
import './App.css';

import ProjectList from './components/ProjectList/ProjectList.js';
// import Sidebar from './components/Sidebar/Sidebar.js';
import Popup from './components/Popup/Popup.js';

function App() {
    const [showMore, setShowMore] = useState(true);

    const handleShowMore = (isClicked) => {
        if (!isClicked) {
            setShowMore(true);
        } else {
            setShowMore(false);
        }
    };

    const [selectedProject, setSelectedProject] = useState(null);

    // Function to handle the click event and set the selected project
    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    return (
        <div className='app'>
            <Popup />
            <h1>My projects</h1>
            <div className='app-container'>

                {/* <Sidebar /> */}

                <main className='main-container'>
                    <ProjectList
                        handleProjectClick={handleProjectClick}
                        handleShowMore={handleShowMore}
                    />
                </main>


                {/* Render the aside element outside the ProjectList */}
                {selectedProject && showMore ? (
                    <aside className="selected-project-details">
                        {/* <h2>Selected Project Details</h2> */}
                        <h2>{selectedProject.name}</h2>
                        <p>Description: {selectedProject.description}</p>
                        <p>URL: <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">{selectedProject.url}</a></p>
                    </aside>
                ) : 
                <aside className="selected-project-details">
                    <h2>Click 'show more' button for details</h2>
                </aside>
                }
            </div>

        </div>
    );
}

export default App;
