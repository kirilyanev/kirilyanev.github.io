import './Sidebar.css';

const imagePath = process.env.PUBLIC_URL + '/CV.jpg';

const Sidebar = ({
    onMenuItemClick
}) => {
    return (
        <aside className="sidebar">
            <img></img>
            <p>Name: Kiril Yanev</p>
            <p>Gender: male</p>
            <p>E-mail: kl_yanev@abv.bg</p>
            <p>Contact: +359/886-891-555</p>

        </aside>
    );
};

export default Sidebar;