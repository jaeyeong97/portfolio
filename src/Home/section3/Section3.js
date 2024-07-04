import "../section3/Section3.css";
import { useNavigate } from "react-router-dom";

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
      case 'gallery':
        navigate('/gallery');
        break;
      default:
        break;
    }
  };
  return (
    <section id="section3">
      <h2 className="title" id="nav_projects">
        Projects
        <div className="underbar"></div>
      </h2>
      <div className="projects_wrap">
        <div className="project" onClick={() => { handleChangePage('windows-xp') }}>
          <div className="page_img">
            <img src="/assets/window.jpg" alt="윈도우 xp 웹사이트 이미지" />
            <span className="txt">윈도우 XP</span>
            <div className="explain">추억의 윈도우 XP를 다시 느낄 수 있게 웹사이트로 구현하였습니다.</div>
          </div>
        </div>
        <div className="project" onClick={() => { handleChangePage('petdoc') }}>
          <div className="page_img">
            <img src="/assets/petdoc.jpg" alt="펫닥 웹사이트 이미지" />
            <span className="txt">petdoc</span>
            <div className="explain">반려동물을 추가하여 사용자의 반려동물 정보를 기반으로 동물병원에 손쉽게 예약할 수 있는  웹사이트입니다.</div>
          </div>
        </div>
        <div className="project" onClick={() => { handleChangePage('recipes') }}>
          <div className="page_img">
            <img src="/assets/recipes.jpg" alt="레시피 웹사이트 이미지" />
            <span className="txt">레시피 파인더</span>
            <div className="explain">음성인식 기능을 활용하여 요리의 레시피를 확인 할 수 있는 웹사이트입니다.</div>
          </div>
        </div>
        <div className="project" onClick={() => { handleChangePage('gallery') }}>
          <div className="page_img">
            <img src="/assets/gallery.jpg" alt="3d-갤러리 웹 이미지" />
            <span className="txt">전시회</span>
            <div className="explain">CSS만을 사용하여 입체적인 공간을 만들었습니다. 몰입도를 높히고 사용자와 상호작용을 강조한 CSS Art 웹사이트입니다.</div>
          </div>
        </div>
        <div className="project">
        </div>
      </div>
    </section>
  );
};

export default Section3;
