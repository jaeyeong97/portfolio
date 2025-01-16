import { useNavigate } from "react-router-dom";
import FrontendPj from "./FrontendPj";
import { useEffect } from "react";
import sr from "../../util/ScrollReveal";

const Section3 = () => {
  const navigate = useNavigate();

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
      case 'movie':
        navigate('/movie');
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
        </div>
        <FrontendPj handleChangePage={handleChangePage} />
      </div>
    </section>
  );
};

export default Section3;
