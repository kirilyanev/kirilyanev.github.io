import './Project.css';

function Project(props) {

    const url = props.url;
    // console.log(props);
    return (
        <div className='project'>
            <img src={props.image} alt={props.alt} />
            <div id='project-info'>
                <p>{props.name}</p>
                <p>{props.description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">{props.url}</a>
            </div>
        </div>
    );
}

export default Project;