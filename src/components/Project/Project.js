import './Project.css';

// const Project = ({
//     data
// }) => {
//     console.log(data);
//     return (
//         <div className='project'>
//             <img src="calculator-image.jpg" alt="white-origami" />
//             <div id='project-info'>
//                 <a>thisislink</a>
//                 <p>This is a simple calculator app</p>
//                 {/* <p>{data.description}</p> */}
//             </div>
//         </div>
//     );
// };

function Project(props) {

    const url = props.url;
    // console.log(props);
    return (
        <div className='project'>
            <img src={props.image} alt={props.alt} />
            <div id='project-info'>
                <p>{props.name}</p>
                <p>{props.description}</p>
                {/* <a href={url}>{props.url}</a> */}
                <a href={url} target="_blank" rel="noopener noreferrer">{props.url}</a>
            </div>
        </div>
    );
}

export default Project;