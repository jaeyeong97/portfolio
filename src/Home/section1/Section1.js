import "../section1/Section1.css";

const Section1 = () => {
  return (
    <section id="section1">
      <h2 className="title" id="nav_about">
        About me
        <div className="underbar"></div>
      </h2>
      <div className="s1_middle_wrap" >
        <div className="s1_img_zone">
          <div className="profile">
            <img src="/assets/profile.png" alt="profile" />
          </div>
          <div className="line"></div>
          <div className="profile_txt">
            <span>😄 이름: 장재영</span>
            <span>📩 이메일: rkaakdbdb1822@naver.com</span>
            <span>📞 연락처: 010-9630-1822</span>
          </div>
        </div>
        <div className="s1_text_zone">
          <div className="text">
            <span>안녕하세요!</span>
            <span>저는 프론트엔드 개발자 트렌드에 맞게 꾸준히 학습하고 성장하고 있습니다.</span>
            <span>제가 가진 지식과 역량을 바탕으로 다양한 프로젝트들을 만들어 보았습니다.</span>
            <span>관심있게 봐주시면 감사하겠습니다!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
