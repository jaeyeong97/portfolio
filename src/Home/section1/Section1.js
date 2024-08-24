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
            <div>
              <span className="accent">프론트엔드 개발자 장재영</span>
              <span>입니다.</span>
            </div>
            <span>저는 꾸준한 학습을 통해 전문성을 갖춘 개발자가 되는 것을 목표로 하고 있습니다. </span>
            <span>코드 품질 향상에 중점을 두어 유지 보수하기 좋은 개발을 함으로써 회사의 발전에 기여하고 싶습니다.</span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
