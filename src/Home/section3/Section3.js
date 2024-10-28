import { useNavigate } from "react-router-dom";
import FrontendPj from "./FrontendPj";
import ToyPj from "./ToyPj";
import PublishingPj from "./PublishingPj";
import { useEffect, useState } from "react";
import sr from "../../util/ScrollReveal";

const Section3 = () => {
  const navigate = useNavigate();

  const [selectedSkills, setSelectedSkills] = useState(1); // 스킬 선택 버튼

  const handleBtnClick = (num) => {
    setSelectedSkills(num);
  };

  // 페이지 이동
  const handleChangePage = (page) => {
    switch (page) {
      case 'windows-xp':
        navigate('/windows-xp');
        break;
      case 'petdoc':
        navigate('/petdoc');
        break;
      case 'recipes':
        navigate('/recipes');
        break;
      case 'gallery':
        navigate('/gallery');
        break;
      case 'bbq':
        navigate('/bbq');
        break;
      case 'movie':
        navigate('/movie');
        break;
      case 'ulsan-tour':
        navigate('/ulsan-tour');
        break;
      case 'volvo':
        navigate('/volvo');
        break;
      case 'bookstore':
        navigate('/bookstore');
        break;
      case 'shop':
        navigate('/shop');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    sr.reveal(".projects_wrap", {
      origin: "bottom",
      distance: "30px",
      duration: 800,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <section id="section3">
      <h2 className="title" id="nav_projects">
        Projects
        <div className="underbar"></div>
      </h2>
      <div className="projects_wrap">
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
              <span>Publishing</span>
            </div>
            <div className="btn_wrap_second">
              <span>Publishing</span>
            </div>
          </button>
          <button
            onClick={() => handleBtnClick(3)}
            className={selectedSkills === 3 ? "clicked" : ""}
          >
            <div className="btn_wrap_first">
              <span>Toy</span>
            </div>
            <div className="btn_wrap_second">
              <span>Toy</span>
            </div>
          </button>
        </div>
        {selectedSkills === 1 && (
          <FrontendPj handleChangePage={handleChangePage} />
        )}
        {selectedSkills === 2 && (
          <PublishingPj handleChangePage={handleChangePage} />
        )}
        {selectedSkills === 3 && (
          <ToyPj handleChangePage={handleChangePage} />
        )}
      </div>
    </section>
  );
};

export default Section3;
