const ToyPj = ({ handleChangePage }) => {
    return (
        <div className="toy_pj pj">
            <div className="project" onClick={() => { handleChangePage('windows-xp') }}>
                <div className="page_img">
                    <img src="/assets/window.jpg" alt="윈도우 xp 웹사이트 이미지" />
                    <span className="txt">윈도우 XP</span>
                    <div className="explain">윈도우 XP를 재구현한 웹사이트입니다.</div>
                </div>
            </div>
            <div className="project" onClick={() => { handleChangePage('gallery') }}>
                <div className="page_img">
                    <img src="/assets/gallery.jpg" alt="3d-갤러리 웹 이미지" />
                    <span className="txt">전시회</span>
                    <div className="explain">CSS 속성을 활용한 3D 전시회 웹사이트입니다.</div>
                </div>
            </div>
        </div>
    );
};

export default ToyPj;