import { useNavigate } from 'react-router-dom';

const Outside = () => {

    const rains = Array.from({ length: 50 }, (_, index) => 'rain');
    const navigate = useNavigate();

    return (
        <div className="loading" >
            <div className='loading_wrap'>
                <div className='front_wall'>
                    <div className='window1 window'>
                    </div>
                    <div className='window2 window'>
                    </div>
                    <div className="exit_door" onClick={() => navigate('/')}>
                        <div className="deco_wrap">
                            <div className="deco"></div>
                            <div className="deco"></div>
                            <div className="deco"></div>
                            <div className="deco"></div>
                        </div>
                        <div className="handle"></div>
                        <div className="thick1"></div>
                        <div className="thick2"></div>
                    </div>
                    <div className='exit_door_back'></div>
                    <div className='exit_door_shadow'></div>
                </div>
                <div className='bottom_wall'>
                </div>
                {rains.map((rains, index) => (
                    <div key={index} className={rains}></div>
                ))}
            </div>
        </div>
    );
}

export default Outside;