import "../section3/Section3.css";
import { useNavigate } from "react-router-dom";

const Section3 = () => {
  const navigate = useNavigate();

  // 페이지 이동
  const handleChangePage = (page) => {
    switch (page) {
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
      case 'ulsan':
        navigate('/ulsan-tour');
        break;
      case 'volvo':
        navigate('/volvo');
        break;
      case 'bookstore':
        navigate('/bookstore');
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
        <div className="project" onClick={() => { handleChangePage('petdoc') }}>
          <div className="page_img">
            <img src="/assets/petdoc.jpg" alt="펫닥 웹사이트 이미지" />
            <span className="txt">petdoc</span>
            <div className="explain">반려동물을 추가하여 사용자의 반려동물 정보를 기반으로 동물병원에 손쉽게 예약할 수 있는  웹 사이트입니다.</div>
          </div>
        </div>
        <div className="project" onClick={() => { handleChangePage('recipes') }}>
          <div className="page_img">
            <img src="/assets/recipes.jpg" alt="레시피 웹사이트 이미지" />
            <span className="txt">레시피 파인더</span>
            <div className="explain">음성인식 기능을 활용하여 찾고 싶은 레시피의 재료, 조리법 등을 알 수 있게 구현하였습니다.</div>
          </div>
        </div>
        <div className="project" onClick={() => { handleChangePage('gallery') }}>
          <div className="page_img">
            <img src="/assets/gallery.jpg" alt="3d-갤러리 웹 이미지" />
            <span className="txt">전시회</span>
            <div className="explain">CSS만을 사용하여 입체적인 공간을 만들었습니다. 몰입도를 높히고 사용자와 상호작용을 강조한 CSS Art 웹 사이트입니다.</div>
          </div>
        </div>
        <div className="project" onClick={() => { handleChangePage('bbq') }}>
          <div className="page_img">
            <img src="/assets/bbq.jpg" alt="비비큐 웹사이트 이미지" />
            <span className="txt">BBQ</span>
            <div className="explain">기존 BBQ 웹사이트를 트렌드에 맞게 새롭게 디자인한 반응형 웹 사이트입니다.</div>
          </div>
        </div>
        <div className="project" onClick={() => { handleChangePage('movie') }}>
          <div className="page_img">
            <img src="/assets/movie.jpg" alt="영화 웹사이트 이미지" />
            <span className="txt">흥행영화</span>
            <div className="explain">연도별로 흥행한 영화의 정보를 찾고 평점을 줄 수 있는 웹 사이트입니다.</div>
          </div>
        </div>
        <div className="project" onClick={() => { handleChangePage('ulsan') }}>
          <div className="page_img">
            <img src="/assets/ulsan-tour.jpg" alt="울산 웹사이트 이미지" />
            <span className="txt">울산 관광</span>
            <div className="explain">기존의 울산 관광 웹사이트를 새롭게 디자인한 1680px 고정형 웹 사이트입니다. </div>
          </div>
        </div>
        <div className="project" onClick={() => { handleChangePage('volvo') }}>
          <div className="page_img">
            <img src="/assets/volvo.jpg" alt="볼보 웹사이트 이미지" />
            <span className="txt">Volvo</span>
            <div className="explain">기존의 볼보자동차 웹 사이트를 새롭게 디자인한 1440px 고정형 웹 사이트입니다.</div>
          </div>
        </div>
        <div className="project" onClick={() => { handleChangePage('bookstore') }}>
          <div className="page_img">
            <img
              src="/assets/bookstore.jpg"
              alt="교보문고 웹사이트 이미지"
            />
            <span className="txt">교보문고</span>
            <div className="explain">교보문고 도서리스트 페이지를 반응형으로 제작한 웹 페이지입니다.</div>
          </div>
        </div>
        <div className="project">
        </div>
      </div>
    </section>
  );
};

export default Section3;
