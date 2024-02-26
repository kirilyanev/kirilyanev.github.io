import React from 'react';
import './Project.css';

function Project(props) {
    const url = props.url;
    const imagePath = process.env.PUBLIC_URL + '/' + props.image;

    return (
        <div className='project'>
            <img src={imagePath} alt={props.alt} />
            <div id='project-info'>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">{props.url}</a>
                {/* <button onClick={() => props.handleProjectClick(props.project)}> */}
                <button className='project-button' onClick={() => {
                    props.handleProjectClick(props.project);
                    props.toggleClick();
                    props.handleShowMore(props.isClicked);
                }}>

                    <span className="button-text">
                        {props.isClicked ? 'Hide' : 'Show more'}
                    </span>
                </button>

            </div>
        </div>
    );
}

export default Project;



// <button onClick={props.toggleClick}>
// {props.isClicked ? 'Hide' : 'Show more'}
// </button>


// {<button onClick={() => {
//     props.handleProjectClick(props.project);
//     props.clickToggle();
// }}></button>}