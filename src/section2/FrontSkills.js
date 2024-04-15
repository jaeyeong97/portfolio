import SkillCard from "./SkillCard";
// import './SkillCard.css';
import './FrontSkills.css';
const FrontSkills = ({ iconImgs, skillsExplain, skillsTitle}) => {
    // 큐브 아이콘 이미지 경로값


    return (
        <div className="front_skills">
            <SkillCard iconImgs={iconImgs.htmlIcon} skillsExplain={skillsExplain.htmlEx} skillsTitle={skillsTitle.htmlTitle}/>
            <SkillCard iconImgs={iconImgs.cssIcon} skillsExplain={skillsExplain.cssEx} skillsTitle={skillsTitle.cssTitle}/>
            <SkillCard iconImgs={iconImgs.jsIcon} skillsExplain={skillsExplain.jsEx} skillsTitle={skillsTitle.jsTitle}/>
            <SkillCard iconImgs={iconImgs.tsIcon} skillsExplain={skillsExplain.tsEx} skillsTitle={skillsTitle.tsTitle}/>
            <SkillCard iconImgs={iconImgs.reactIcon} skillsExplain={skillsExplain.reactEx} skillsTitle={skillsTitle.reactTitle}/>
            <SkillCard iconImgs={iconImgs.jqueryIcon} skillsExplain={skillsExplain.jqueryEx} skillsTitle={skillsTitle.jqueryTitle}/>
        </div>
    );
};

export default FrontSkills;