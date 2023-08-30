// import './Project.css';

// function Project(props) {

//     const url = props.url;
//     const imagePath = process.env.PUBLIC_URL + '/' + props.image;

//     return (
//         <div className='project'>
//             <img src={imagePath} alt={props.alt} />
//             <div id='project-info'>
//                 <p>{props.name}</p>
//                 <p>{props.description}</p>
//                 <a href={url} target="_blank" rel="noopener noreferrer">{props.url}</a>
//             </div>
//         </div>
//     );
// }

// export default Project;


// import React, { useState } from 'react';
// import './Project.css';

// function Project(props) {

//         // Declare a state variable named 'count' with an initial value of 0
//         const [isClicked, setIsClicked] = useState(false);

//         // This function increments the count when the button is clicked
//         const toggleClick = () => {
//             setIsClicked(!isClicked);
//         };

//     const url = props.url;
//     const imagePath = process.env.PUBLIC_URL + '/' + props.image;

//     return (
//         <div className='project'>
//             <img src={imagePath} alt={props.alt} />
//             <div id='project-info'>
//                 <p>{props.name}</p>
//                 <p>{props.description}</p>
//                 <a href={url} target="_blank" rel="noopener noreferrer">{props.url}</a>


//                     <button onClick={toggleClick}>
//                         {isClicked ? 'Hide' : 'Show more'}
//                     </button>
//             </div>
//         </div>
//     );
// }

// export default Project;




// import React, { useState } from 'react';
// import './Project.css';

// function Project(props) {
//     const url = props.url;
//     const imagePath = process.env.PUBLIC_URL + '/' + props.image;

//     return (
//         <div className='project'>
//             <img src={imagePath} alt={props.alt} />
//             <div id='project-info'>
//                 <p>{props.name}</p>
//                 <p>{props.description}</p>
//                 <a href={url} target="_blank" rel="noopener noreferrer">{props.url}</a>
//                 <button onClick={props.toggleClick}>
//                     {props.isClicked ? 'Hide' : 'Show more'}
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Project;



// import React, { useState } from 'react';
// import './Project.css';

// function Project(props) {
//     const url = props.url;
//     const imagePath = process.env.PUBLIC_URL + '/' + props.image;

//     return (
//         <div className='project'>
//             <img src={imagePath} alt={props.alt} />
//             <div id='project-info'>
//                 <p>{props.name}</p>
//                 <p>{props.description}</p>
//                 <a href={url} target="_blank" rel="noopener noreferrer">{props.url}</a>
//                 <button onClick={props.toggleClick}>
//                     {props.isClicked ? 'Hide' : 'Show more'}
//                 </button>
//             </div>
//             {/* Conditionally render additional project info */}
//             {props.isClicked && (
//                 <aside className="project-details">
//                     {/* Add your additional project details here */}
//                     <h2>Additional Details</h2>
//                     <p>Any additional information about the project goes here.</p>
//                 </aside>
//             )}
//         </div>
//     );
// }

// export default Project;




// import React, { useState } from 'react';
// import './Project.css';

// function Project(props) {
//     const url = props.url;
//     const imagePath = process.env.PUBLIC_URL + '/' + props.image;

//     return (
//         <div className='project'>
//             <img src={imagePath} alt={props.alt} />
//             <div id='project-info'>
//                 <p>{props.name}</p>
//                 <p>{props.description}</p>
//                 <a href={url} target="_blank" rel="noopener noreferrer">{props.url}</a>
//                 <button onClick={props.toggleClick}>
//                     {props.isClicked ? 'Hide' : 'Show more'}
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Project;



import React, { useState } from 'react';
import './Project.css';

function Project(props) {
    const url = props.url;
    const imagePath = process.env.PUBLIC_URL + '/' + props.image;

    return (
        <div className='project'>
            <img src={imagePath} alt={props.alt} />
            <div id='project-info'>
                <p>{props.name}</p>
                <p>{props.description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">{props.url}</a>
                <button onClick={() => props.handleProjectClick(props.project)}>
                    {props.isClicked ? 'Hide' : 'Show more'}
                </button>
            </div>
            {/* Conditionally render additional project info */}
            {props.isClicked && (
                <aside className="project-details">
                    {/* Add your additional project details here */}
                    <h2>Additional Details</h2>
                    <p>Any additional information about the project goes here.</p>
                </aside>
            )}
        </div>
    );
}

export default Project;



// <button onClick={props.toggleClick}>
// {props.isClicked ? 'Hide' : 'Show more'}
// </button>