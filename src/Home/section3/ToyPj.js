const ToyPj = ({ handleChangePage }) => {
    return (
        <div className="toy_pj pj">
            <div className="project" onClick={() => { handleChangePage('gallery') }}>
                <div className="page_img">
                    <img src="/assets/gallery.jpg" alt="3d-갤러리 웹 이미지" />
                    <span className="txt">전시회</span>
                    <div className="explain">CSS를 활용하여 입체적인 공간을 만든 전시회 웹사이트입니다.</div>
                </div>
            </div>
        </div>
    );
};

export default ToyPj;