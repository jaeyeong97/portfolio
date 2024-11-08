import FrontSkills from "./FrontSkills";
import AdditionalSkills from "./AdditionalSkills";
import { useEffect, useState } from "react";
import sr from "../../util/ScrollReveal";

const Section2 = () => {
  const [selectedSkills, setSelectedSkills] = useState(1); // 스킬 선택 버튼

  const handleBtnClick = (num) => {
    setSelectedSkills(num);
  };

  const iconImgs = {
    htmlIcon: "/assets/Html5.webp",
    cssIcon: "/assets/Css3.webp",
    jsIcon: "/assets/JavaScript.webp",
    tsIcon: "/assets/TypeScript.webp",
    reactIcon: "/assets/React.webp",
    jqueryIcon: "/assets/JQuery.webp",
    figmaIcon: "/assets/Figma.webp",
    githubIcon: "/assets/github.webp",
    vscIcon: "/assets/VisualStudio.webp",
    scssIcon: "/assets/Scss.webp",
    axiosIcon: "/assets/axios.webp",
    recoilIcon: "/assets/recoil.svg",
    reactRouterIcon: "/assets/react-router.svg",
    styledComponentsIcon: "/assets/styledcomponents.webp",
    reactQueryIcon: "/assets/reactQuery.svg",
  };
  const skillsExplain = {
    htmlEx:
      "시멘틱 태그를 사용하여 웹 접근성을 높이고 가이드라인을 준수합니다.",
    cssEx:
      "레이아웃 구현, keyframes를 활용해 여러 애니메이션 작업을 할 수 있습니다.",
    jsEx: "동적인 콘텐츠를 구현하여, 웹 사이트를 인터랙티브하게 만들 수 있습니다.",
    tsEx: "타입을 지정해 코드 안정성을 높일 수 있습니다. 코드의 가독성을 개선할 수 있습니다.",
    reactEx:
      "컴포넌트 단위로 UI를 개발해 최대한 재사용을 하고 성능 최적화를 합니다.",
    jqueryEx:
      "DOM조작을 통해 아코디언 UI, 슬라이더등 동적 요소를 구현한 경험이 있습니다.",
    figmaEx: "피그마를 사용하여 프로토타입을 제작하여 협업을 한 경험이 있습니다.",
    githubEx: "깃허브를 통해 프로젝트를 관리합니다.",
    vscEx:
      "비주얼 스튜디오를 사용하여 프로젝트 개발을 합니다.",
    scssEx: "CSS를 더욱 효율적이고 유지보수하기 쉽게 구현합니다.",
    axiosEx: "Axios를 사용해 API를 연결하여 데이터를 가져와 활용한 경험이 있습니다. ",
    recoilEx: "전역 상태를 효율적으로 관리하고, 컴포넌트 간 상태 공유를 쉽게 구현할 수 있습니다.",
    reactRouterEx: "SPA의 라우팅을 구현하여 페이지를 관리할 수 있습니다.",
    styledComponentsEx: "컴포넌트별로 스타일을 관리하고 적용할 수 있습니다.",
    reactQueryEx: "API 데이터를 가져와 로딩/에러 처리와 같은 기능들을 사용한 경험이 있습니다."
  };
  const skillsTitle = {
    htmlTitle: "HTML",
    cssTitle: "CSS",
    jsTitle: "JavaScript",
    tsTitle: "TypeScript",
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

  useEffect(() => {
    sr.reveal(".skills_wrap", {
      origin: "bottom",
      distance: "50px",
      duration: 800,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

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
