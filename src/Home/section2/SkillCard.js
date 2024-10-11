import Cube from "./Cube";
import sr from "../../util/ScrollReveal";
import { useEffect } from "react";

const SkillCard = ({ iconImgs, skillsExplain, skillsTitle, className }) => {

  useEffect(() => {
    sr.reveal(".skill_card", {
      origin: "bottom",
      distance: "50px",
      duration: 800,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <div className={`skill_card ${className}`}>
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
