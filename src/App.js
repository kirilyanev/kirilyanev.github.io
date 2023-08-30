import './App.css';

import ProjectList from './components/ProjectList/ProjectList.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Popup from './components/Popup/Popup.js';

function App() {
    return (
        <div className='app'>
            <Popup />
            <div className='app-container'>
                <h1>My projects</h1>
                <Sidebar />
                <main className='main-container'>
                    <ProjectList />

                </main>

            </div>

        </div>
    );
}

export default App;
