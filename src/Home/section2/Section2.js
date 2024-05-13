import "../section2/Section2.css";
import FrontSkills from "./FrontSkills";
import BackSkills from "./BackSkills";
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
    tsIcon: "/assets/TypeScript.png",
    reactIcon: "/assets/React.png",
    jqueryIcon: "/assets/JQuery.png",
    APIIcon: "/assets/API.png",
    psIcon: "/assets/AdobePhotoshop.png",
    figmaIcon: "/assets/Figma.png",
    githubIcon: "/assets/GitHub.png",
    vscIcon: "/assets/VisualStudio.png",
  };
  const skillsExplain = {
    htmlEx:
      "시멘틱 마크업 작업을 하여 가독성을 높혀 유지보수에 방해가 없도록하고, 가이드라인을 준수합니다.",
    cssEx:
      "Flexbox로 다양한 레이아웃 구현, Keyframes를 사용하여 여러 애니메이션 작업을 할 수 있습니다.",
    jsEx: "기본 문법을 습득하고, 웹페이지에 동적인 요소를 추가해본 경험이 있습니다.",
    tsEx: "타입을 지정하여 코드의 안전성과 가독성을 높힌 경험이 있습니다.",
    reactEx:
      "리액트훅을 활용하여 프로젝트를 만든 경험이 있습니다. Styled-component를 활용하여 스타일링을 할 수 있습니다.",
    jqueryEx:
      "기본 문법을 습득하고, 아코디언 UI, 슬라이더등 동적인 애니메이션을 간소화하여 제작한 경험이 있습니다.",
    APIEx: "HTTP 메서드를 사용해 외부 API 데이터를 가져오고 활용한 경험이 있습니다.",
    psEx: "포토샵을 사용하여 기본적인 이미지 편집, 수정을 할 수 있습니다.",
    figmaEx: "피그마를 사용하여 프로토타입을 제작하여 협업을 한 경험이 있습니다.",
    githubEx: "프로젝트를 깃허브를 통해 관리합니다.",
    vscEx:
      "비주얼 스튜디오를 활용하여 다양한 프로젝트를 개발한 경험이 있습니다.",
  };
  const skillsTitle = {
    htmlTitle: "Html",
    cssTitle: "Css",
    jsTitle: "JavaScript",
    tsTitle: "TypeScript",
    reactTitle: "React",
    jqueryTitle: "JQuery",
    APITitle: "API",
    psTitle: "Photoshop",
    figmaTitle: "Figma",
    githubTitle: "GitHub",
    vscTitle: "VisualStudioCode",
  };

  return (
    <section id="section2">
      <h2 className="title">
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
            onClick={() => handleBtnClick(2)}
            className={selectedSkills === 2 ? "clicked" : ""}
          >
            <div className="btn_wrap_first">
              <span>Back-End</span>
            </div>
            <div className="btn_wrap_second">
              <span>Back-End</span>
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
        {selectedSkills === 2 && (
          <BackSkills
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
