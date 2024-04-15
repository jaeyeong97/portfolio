import Cube from "./Cube";
import "./SkillCard.css";
const SkillCard = ({ iconImgs, skillsExplain, skillsTitle }) => {
  return (
    <div className="skill_card">
      <div className="icon">
        <Cube iconImg={iconImgs} />
      </div>
      <div className="txt">
        <div className="line"></div>
        <span className="card_title">{skillsTitle}</span>
        <span className="card_explain">{skillsExplain}</span>
      </div>
    </div>
  );
};

export default SkillCard;
