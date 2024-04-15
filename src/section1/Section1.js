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
            <span>😃 이름: 장재영</span>
            <span>📩 이메일: rkaakdbdb1822@naver.com</span>
            <span>📞 연락처: 010-9630-1822</span>
          </div>
        </div>
        <div className="s1_text_zone">
          <div className="text">
            <span>안녕하세요!</span>
            <div>
              <span className="accent">신입 프론트엔드 개발자 장재영</span>
              <span>입니다.</span>
            </div>
            <span>개발의 매력에 빠져 주도적인 학습과 문제 해결 능력을 바탕으로 꾸준히 트렌드를 관찰하며 학습하고 있습니다.</span>
            <span>사용자 경험을 우선시하며, 친화적인 UI/UX를 구현하여 프로젝트에 적용해보았습니다.</span>
            <span>프론트엔드 개발자로서, 효율적이고 창의적인 사고력을 발휘하여 함께 하고싶습니다!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
