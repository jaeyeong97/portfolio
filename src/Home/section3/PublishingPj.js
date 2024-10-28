const PublishingPj = ({ handleChangePage }) => {

    return (
        <div className="publishing_pj pj">
            <div className="project" onClick={() => { handleChangePage('bbq') }}>
                <div className="page_img">
                    <img src="/assets/bbq.jpg" alt="bbq 웹사이트 이미지" />
                    <span className="txt">BBQ</span>
                    <div className="explain">기존의 BBQ 웹사이트를 새롭게 디자인한 반응형 웹사이트입니다.</div>
                </div>
            </div>
            <div className="project" onClick={() => { handleChangePage('ulsan-tour') }}>
                <div className="page_img">
                    <img src="/assets/ulsan-tour.jpg" alt="울산관광 웹사이트 이미지" />
                    <span className="txt">울산관광</span>
                    <div className="explain">기존의 울산 관광 웹사이트를 새롭게 디자인한 1680px 고정형 웹사이트입니다.
                    </div>
                </div>
            </div>
            <div className="project" onClick={() => { handleChangePage('volvo') }}>
                <div className="page_img">
                    <img src="/assets/volvo.jpg" alt="volvo 웹사이트 이미지" />
                    <span className="txt">VOLVO</span>
                    <div className="explain">기존의 볼보자동차 웹사이트를 새롭게 디자인한 1440px 고정형 웹사이트입니다.
                    </div>
                </div>
            </div>
            <div className="project" onClick={() => { handleChangePage('bookstore') }}>
                <div className="page_img">
                    <img src="/assets/bookstore.jpg" alt="교보문고 웹사이트 이미지" />
                    <span className="txt">교보문고</span>
                    <div className="explain">기존의 교보문고 도서리스트 페이지를 반응형으로 제작한 웹페이지입니다.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublishingPj;