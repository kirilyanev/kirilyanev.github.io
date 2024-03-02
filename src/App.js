import React, { useState } from 'react';
import './App.css';
import gsap from 'gsap';

import ProjectList from './components/ProjectList/ProjectList.js';
// import PersonalInfo from './components/PersonalInfo/PersonalInfo.js';
// import Popup from './components/Popup/Popup.js';

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

    gsap.fromTo('.selected-project-details', { duration: 1, y: '-20%', ease: 'bounce' }, { duration: 1, y: '0%', ease: 'bounce' });

    return (
        <div className='app'>
            {/* <Popup /> */}
            <h1 className='header'>My projects</h1>
            <div className='app-container'>

                {/* <PersonalInfo /> */}

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
                        <h2 className='title'>{selectedProject.name}</h2>
                        <p>Description: {selectedProject.description}</p>
                        {/* <p>URL: <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">{selectedProject.url}</a></p> */}
                        <span id='snapshot-title'>Snapshot of the app</span>
                        <img className='snapshot' src={`${process.env.PUBLIC_URL}/${selectedProject.snapshot}`} alt={'Snapshot'} />
                        <p id='info'>{selectedProject.info}</p>
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
