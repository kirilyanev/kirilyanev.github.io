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
            </div>
        </div>
    );
}

export default Project;