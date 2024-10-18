import SkillCard from "./SkillCard";
const FrontSkills = ({ iconImgs, skillsExplain, skillsTitle }) => {
    // 큐브 아이콘 이미지 경로값


    return (
        <div className="front_skills skills-wrap">
            <SkillCard
                iconImgs={iconImgs.htmlIcon}
                skillsExplain={skillsExplain.htmlEx}
                skillsTitle={skillsTitle.htmlTitle}
                className='left'
            />
            <SkillCard
                iconImgs={iconImgs.cssIcon}
                skillsExplain={skillsExplain.cssEx}
                skillsTitle={skillsTitle.cssTitle}
                className='center'
            />
            <SkillCard
                iconImgs={iconImgs.jsIcon}
                skillsExplain={skillsExplain.jsEx}
                skillsTitle={skillsTitle.jsTitle}
                className='right'
            />
            <SkillCard
                iconImgs={iconImgs.reactIcon}
                skillsExplain={skillsExplain.reactEx}
                skillsTitle={skillsTitle.reactTitle}
                className='left'
            />
            <SkillCard
                iconImgs={iconImgs.jqueryIcon}
                skillsExplain={skillsExplain.jqueryEx}
                skillsTitle={skillsTitle.jqueryTitle}
                className='center'
            />
            <SkillCard
                iconImgs={iconImgs.scssIcon}
                skillsExplain={skillsExplain.scssEx}
                skillsTitle={skillsTitle.scssTitle}
                className='right'
            />
            <SkillCard
                iconImgs={iconImgs.axiosIcon}
                skillsExplain={skillsExplain.axiosEx}
                skillsTitle={skillsTitle.axiosTitle}
                className='left'
            />
            <SkillCard
                iconImgs={iconImgs.recoilIcon}
                skillsExplain={skillsExplain.recoilEx}
                skillsTitle={skillsTitle.recoilTitle}
                className='center'
            />
            <SkillCard
                iconImgs={iconImgs.reactRouterIcon}
                skillsExplain={skillsExplain.reactRouterEx}
                skillsTitle={skillsTitle.reactRouterTitle}
                className='right react-router'
            />
            <SkillCard
                iconImgs={iconImgs.styledComponentsIcon}
                skillsExplain={skillsExplain.styledComponentsEx}
                skillsTitle={skillsTitle.styledComponentsTitle}
                className='left'
            />
            <SkillCard
                iconImgs={iconImgs.reactQueryIcon}
                skillsExplain={skillsExplain.reactQueryEx}
                skillsTitle={skillsTitle.reactQueryTitle}
                className='center'
            />
            <div className="empty"></div>
        </div>
    );
};

export default FrontSkills;