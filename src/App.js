import './App.css';

import ProjectList from './components/ProjectList/ProjectList.js';
import Sidebar from './components/Sidebar/Sidebar.js';


function App() {
    return (
        <div className='app'>
            <div className='app-container'>
                <h1>This page is main early stage of development</h1>
                <h2>My projects</h2>
                <Sidebar />
                <main className='main-container'>
                    <ProjectList />

                </main>

            </div>

        </div>
    );
}

export default App;
