import FrontSkills from "./FrontSkills";
import AdditionalSkills from "./AdditionalSkills";
import { useState } from "react";

const Section2 = () => {
  const [selectedSkills, setSelectedSkills] = useState(1); // 스킬 선택 버튼

  const handleBtnClick = (num) => {
    setSelectedSkills(num);
  };

  const iconImgs = {
    htmlIcon: "/assets/Html5.png",
    cssIcon: "/assets/Css3.png",
    jsIcon: "/assets/JavaScript.png",
    reactIcon: "/assets/React.png",
    jqueryIcon: "/assets/JQuery.png",
    figmaIcon: "/assets/Figma.png",
    githubIcon: "/assets/github.png",
    vscIcon: "/assets/VisualStudio.png",
    scssIcon: "/assets/Scss.png",
    axiosIcon: "/assets/axios.webp",
    recoilIcon: "/assets/recoil.svg",
    reactRouterIcon: "/assets/react-router.svg",
    styledComponentsIcon: "/assets/styledcomponents.png",
    reactQueryIcon: "/assets/reactQuery.svg",
  };
  const skillsExplain = {
    htmlEx:
      "시멘틱 마크업 작업을 하여 가독성을 높혀 유지보수에 방해가 없도록하고, 가이드라인을 준수합니다.",
    cssEx:
      "Flexbox로 다양한 레이아웃 구현, CSS만을 사용하여 여러 애니메이션 작업을 할 수 있습니다.",
    jsEx: "동적인 콘텐츠와 사용자 상호작용을 구현하여, 웹 페이지를 보다 인터랙티브하게 만들 수 있습니다.",
    reactEx:
      "Recoil을 활용하여 상태 관리를 할 수 있습니다. Styled-component를 사용하여 컴포넌트별로 스타일을 관리합니다.",
    jqueryEx:
      "아코디언 UI, 슬라이더등 동적 요소를 간소화하여 구현한 경험이 있습니다.",
    figmaEx: "피그마를 사용하여 프로토타입을 제작하여 협업을 한 경험이 있습니다.",
    githubEx: "깃허브를 통해 프로젝트를 관리합니다.",
    vscEx:
      "비주얼 스튜디오를 사용하여 프로젝트 개발을 합니다.",
    scssEx: "CSS를 더욱 효율적이고 유지보수하기 쉽게 구현합니다.",
    axiosEx: "Axios를 사용하여 REST API와 비동기적으로 데이터를 주고받으며, HTTP 요청을 보다 쉽게 관리할 수 있습니다.",
    recoilEx: "Recoil을 사용하여 React 애플리케이션의 전역 상태를 효율적으로 관리하고, 컴포넌트 간 상태 공유를 쉽게 구현할 수 있습니다.",
    reactRouterEx: "React Router를 사용하여 SPA의 라우팅을 구현하며, 동적 URL 매칭을 통한 페이지 전환을 관리합니다.",
    styledComponentsEx: "Styled-components를 활용하여 CSS를 관리하고, 컴포넌트 단위로 스타일을 쉽게 적용할 수 있습니다.",
    reactQueryEx: "useQuery 훅을 사용하여 데이터를 비동기적으로 가져오고 staleTime, cacheTime 등을 활용한 API 관리 경험이 있습니다."
  };
  const skillsTitle = {
    htmlTitle: "HTML",
    cssTitle: "CSS",
    jsTitle: "JavaScript",
    reactTitle: "React",
    jqueryTitle: "JQuery",
    figmaTitle: "Figma",
    githubTitle: "GitHub",
    vscTitle: "VisualStudioCode",
    scssTitle: "SCSS",
    axiosTitle: "Axios",
    recoilTitle: "Recoil",
    reactRouterTitle: "React-Router",
    styledComponentsTitle: "styled-components",
    reactQueryTitle: "React Query",
  };

  return (
    <section id="section2">
      <h2 className="title" id="nav_about">
        Skills
        <div className="underbar"></div>
      </h2>
      <div className="skills_wrap">
        <div className="buttons">
          <button
            onClick={() => handleBtnClick(1)}
            className={selectedSkills === 1 ? "clicked" : ""}
          >
            <div className="btn_wrap_first">
              <span>Front-End</span>
            </div>
            <div className="btn_wrap_second">
              <span>Front-End</span>
            </div>
          </button>
          <button
            onClick={() => handleBtnClick(3)}
            className={selectedSkills === 3 ? "clicked" : ""}
          >
            <div className="btn_wrap_first">
              <span>Additional</span>
            </div>
            <div className="btn_wrap_second">
              <span>Additional</span>
            </div>
          </button>
        </div>
        {selectedSkills === 1 && (
          <FrontSkills
            iconImgs={iconImgs}
            skillsExplain={skillsExplain}
            skillsTitle={skillsTitle}
          />
        )}
        {selectedSkills === 3 && (
          <AdditionalSkills
            iconImgs={iconImgs}
            skillsExplain={skillsExplain}
            skillsTitle={skillsTitle}
          />
        )}
      </div>
    </section>
  );
};

export default Section2;
