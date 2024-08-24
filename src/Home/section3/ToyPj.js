const ToyPj = ({ handleChangePage }) => {
    return (
        <div className="toy_pj pj">
            <div className="project" onClick={() => { handleChangePage('gallery') }}>
                <div className="page_img">
                    <img src="/assets/gallery.jpg" alt="3d-갤러리 웹 이미지" />
                    <span className="txt">전시회</span>
                    <div className="explain">CSS만을 사용하여 입체적인 공간을 만들었습니다. 몰입도를 높히고 사용자와 상호작용을 강조한 CSS Art 웹사이트입니다.</div>
                </div>
            </div>
        </div>
    );
};

export default ToyPj;