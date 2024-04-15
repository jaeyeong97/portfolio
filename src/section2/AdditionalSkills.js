import SkillCard from "./SkillCard";
import './AdditionalSkills.css';
const AdditionalSkills = ({ iconImgs, skillsExplain, skillsTitle }) => {
  return (
    <div className="additional_skills">
      <SkillCard
        iconImgs={iconImgs.psIcon}
        skillsExplain={skillsExplain.psEx}
        skillsTitle={skillsTitle.psTitle}
      />
      <SkillCard
        iconImgs={iconImgs.figmaIcon}
        skillsExplain={skillsExplain.figmaEx}
        skillsTitle={skillsTitle.figmaTitle}
      />
      <SkillCard
        iconImgs={iconImgs.githubIcon}
        skillsExplain={skillsExplain.githubEx}
        skillsTitle={skillsTitle.githubTitle}
      />

      <SkillCard
        iconImgs={iconImgs.vscIcon}
        skillsExplain={skillsExplain.vscEx}
        skillsTitle={skillsTitle.vscTitle}
      />
    </div>
  );
};

export default AdditionalSkills;
