import SkillCard from "./SkillCard";
import './BackSkills.css';

const BackSkills = ({ iconImgs, skillsExplain, skillsTitle }) => {
    return (
        <div className="back_skills">
            <SkillCard iconImgs={iconImgs.APIIcon} skillsExplain={skillsExplain.APIEx} skillsTitle={skillsTitle.APITitle} />
        </div>
    );
};

export default BackSkills;