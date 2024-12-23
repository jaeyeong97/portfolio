const PublishingPj = ({ handleChangePage }) => {

    return (
        <div className="publishing_pj pj">
            <div className="project" onClick={() => { handleChangePage('movie') }}>
                <div className="page_img">
                    <img src="/assets/movie.webp" alt="영화 웹사이트 이미지" />
                    <span className="txt">Go n Play</span>
                    <div className="explain">영화, 시리즈 정보를 확인할 수 있는 OTT 웹사이트입니다.
                    </div>
                </div>
            </div>
            <div className="project" onClick={() => { handleChangePage('bbq') }}>
                <div className="page_img">
                    <img src="/assets/bbq.webp" alt="bbq 웹사이트 이미지" />
                    <span className="txt">BBQ</span>
                    <div className="explain">기존의 BBQ 웹사이트를 새롭게 디자인한 반응형 웹사이트입니다.</div>
                </div>
            </div>
            <div className="project" onClick={() => { handleChangePage('volvo') }}>
                <div className="page_img">
                    <img src="/assets/volvo.webp" alt="volvo 웹사이트 이미지" />
                    <span className="txt">VOLVO</span>
                    <div className="explain">기존의 볼보자동차 웹사이트를 새롭게 디자인한 1440px 고정형 웹사이트입니다.
                    </div>
                </div>
            </div>
            <div className="project"></div>
        </div>
    );
};

export default PublishingPj;