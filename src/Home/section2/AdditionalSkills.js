import SkillCard from "./SkillCard";
const AdditionalSkills = ({ iconImgs, skillsExplain, skillsTitle }) => {
  return (
    <div className="additional_skills skills-wrap">
      <SkillCard
        iconImgs={iconImgs.figmaIcon}
        skillsExplain={skillsExplain.figmaEx}
        skillsTitle={skillsTitle.figmaTitle}
        className='left'
      />
      <SkillCard
        iconImgs={iconImgs.githubIcon}
        skillsExplain={skillsExplain.githubEx}
        skillsTitle={skillsTitle.githubTitle}
        className='center'
      />
      <SkillCard
        iconImgs={iconImgs.vscIcon}
        skillsExplain={skillsExplain.vscEx}
        skillsTitle={skillsTitle.vscTitle}
        className='right'
      />
    </div>
  );
};

export default AdditionalSkills;
