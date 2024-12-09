const ToyPj = ({ handleChangePage }) => {

    return (
        <div className="toy_pj pj">
            <div className="project" onClick={() => { handleChangePage('gallery') }}>
                <div className="page_img">
                    <img src="/assets/gallery.webp" alt="3d-갤러리 웹 이미지" />
                    <span className="txt">전시회</span>
                    <div className="explain">CSS 속성을 활용한 3D 전시회 웹사이트입니다.</div>
                </div>
            </div>
        </div>
    );
};

export default ToyPj;