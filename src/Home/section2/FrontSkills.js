import SkillCard from "./SkillCard";
const FrontSkills = ({ iconImgs, skillsExplain, skillsTitle }) => {
    // 큐브 아이콘 이미지 경로값


    return (
        <div className="front_skills skills-wrap">
            <SkillCard
                iconImgs={iconImgs.htmlIcon}
                skillsExplain={skillsExplain.htmlEx}
                skillsTitle={skillsTitle.htmlTitle}
            />
            <SkillCard
                iconImgs={iconImgs.cssIcon}
                skillsExplain={skillsExplain.cssEx}
                skillsTitle={skillsTitle.cssTitle}
            />
            <SkillCard
                iconImgs={iconImgs.jsIcon}
                skillsExplain={skillsExplain.jsEx}
                skillsTitle={skillsTitle.jsTitle}
            />
            <SkillCard
                iconImgs={iconImgs.tsIcon}
                skillsExplain={skillsExplain.tsEx}
                skillsTitle={skillsTitle.tsTitle}
            />
            <SkillCard
                iconImgs={iconImgs.reactIcon}
                skillsExplain={skillsExplain.reactEx}
                skillsTitle={skillsTitle.reactTitle}
            />
            <SkillCard
                iconImgs={iconImgs.jqueryIcon}
                skillsExplain={skillsExplain.jqueryEx}
                skillsTitle={skillsTitle.jqueryTitle}
            />
            <SkillCard
                iconImgs={iconImgs.scssIcon}
                skillsExplain={skillsExplain.scssEx}
                skillsTitle={skillsTitle.scssTitle}
            />
            <SkillCard
                iconImgs={iconImgs.axiosIcon}
                skillsExplain={skillsExplain.axiosEx}
                skillsTitle={skillsTitle.axiosTitle}
            />
            <SkillCard
                iconImgs={iconImgs.recoilIcon}
                skillsExplain={skillsExplain.recoilEx}
                skillsTitle={skillsTitle.recoilTitle}
            />
            <SkillCard
                iconImgs={iconImgs.reactRouterIcon}
                skillsExplain={skillsExplain.reactRouterEx}
                skillsTitle={skillsTitle.reactRouterTitle}
                className='react-router'
            />
            <SkillCard
                iconImgs={iconImgs.styledComponentsIcon}
                skillsExplain={skillsExplain.styledComponentsEx}
                skillsTitle={skillsTitle.styledComponentsTitle}
            />
            <SkillCard
                iconImgs={iconImgs.reactQueryIcon}
                skillsExplain={skillsExplain.reactQueryEx}
                skillsTitle={skillsTitle.reactQueryTitle}
            />
            {/* <div className="empty"></div> */}
        </div>
    );
};

export default FrontSkills;