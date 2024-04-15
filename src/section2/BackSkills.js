import SkillCard from "./SkillCard";
import './BackSkills.css';

const BackSkills = ({iconImgs, skillsExplain, skillsTitle}) => {
    return (
        <div className="back_skills">
            <SkillCard iconImgs={iconImgs.nodejsIcon} skillsExplain={skillsExplain.nodejsEx} skillsTitle={skillsTitle.nodejsTitle}/>
        </div>
    );
};

export default BackSkills;