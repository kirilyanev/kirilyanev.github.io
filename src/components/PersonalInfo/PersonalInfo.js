import './PersonalInfo.css';

const imagePath = process.env.PUBLIC_URL + '/CV.png';

const PersonalInfo = ({ onMenuItemClick }) => {
  return (
    <aside className="personal-info">
      <div>
        <img src={imagePath} alt="CV"></img>
        <p>Name: Kiril Yanev</p>
        <p>Gender: male</p>
        <p>E-mail: kl_yanev@abv.bg</p>
        <p>Contact: +359/886-891-555</p>
      </div>
    </aside>
  );
};

export default PersonalInfo;
