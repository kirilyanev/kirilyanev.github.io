// // import React, { useState } from 'react';
// import './App.css';

// import ProjectList from './components/ProjectList/ProjectList.js';
// import Sidebar from './components/Sidebar/Sidebar.js';
// import Popup from './components/Popup/Popup.js';

// function App() {

//     return (
//         <div className='app'>
//             <Popup />
//             <div className='app-container'>
//                 <h1>My projects</h1>
//                 <Sidebar />
//                 <main className='main-container'>
//                     <ProjectList />






//                 </main>

//             </div>

//         </div>
//     );
// }

// export default App;


// import React, { useState } from 'react';
// import './App.css';

// import ProjectList from './components/ProjectList/ProjectList.js';
// import Sidebar from './components/Sidebar/Sidebar.js';
// import Popup from './components/Popup/Popup.js';

// function App() {
//     return (
//         <div className='app'>
//             <Popup />
//             <div className='app-container'>
//                 <h1>My projects</h1>
//                 <Sidebar />
//                 <main className='main-container'>
//                     <ProjectList />


//                 </main>

//             </div>

//         </div>
//     );
// }

// export default App;



// import React, { useState } from 'react';
// import './App.css';

// import ProjectList from './components/ProjectList/ProjectList.js';
// import Sidebar from './components/Sidebar/Sidebar.js';
// import Popup from './components/Popup/Popup.js';

// function App() {
//     const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

//     // Function to handle the click event and set the selected project index
//     const handleProjectClick = (index) => {
//         setSelectedProjectIndex(index);
//     };

//     return (
//         <div className='app'>
//             <Popup />
//             <div className='app-container'>
//                 <h1>My projects</h1>
//                 <Sidebar />
//                 <main className='main-container'>
//                     <ProjectList
//                         selectedProjectIndex={selectedProjectIndex}
//                         handleProjectClick={handleProjectClick}
//                     />

//                     {/* Conditionally render the aside element */}
//                     {selectedProjectIndex !== null && (
//                         <aside className="selected-project-details">
//                             {/* Add your additional project details here */}
//                             <h2>Selected Project Details</h2>
//                             <p>Additional information about the selected project.</p>
//                         </aside>
//                     )}
//                 </main>
//             </div>
//         </div>
//     );
// }

// export default App;




import React, { useState } from 'react';
import './App.css';

import ProjectList from './components/ProjectList/ProjectList.js';
// import Sidebar from './components/Sidebar/Sidebar.js';
import Popup from './components/Popup/Popup.js';

function App() {
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
                    />
                </main>


                {/* Render the aside element outside the ProjectList */}
                {selectedProject && (
                    <aside className="selected-project-details">
                        {/* <h2>Selected Project Details</h2> */}
                        <h2>{selectedProject.name}</h2>
                        <p>Description: {selectedProject.description}</p>
                        <p>URL: <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">{selectedProject.url}</a></p>
                    </aside>
                )}
            </div>

        </div>
    );
}

export default App;
