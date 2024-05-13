import '../loading/Loading.css';
import AnimatedCountUp from '../../util/AnimatedCountUp';

const Loading = () => {
    return (
        <div className="loading">
            <div className='cube'>
                <div className='face front long'></div>
                <div className='face back long'></div>
                <div className='face top long'></div>
                <div className='face bottom long'></div>
                <div className='face left short'></div>
                <div className='face right short'></div>
                <div className='face front long charge_long'></div>
                <div className='face back long charge_long'></div>
                <div className='face top long charge_long'></div>
                <div className='face bottom long charge_long'></div>
                <div className='face left short charge_short'></div>
                <div className='face right short'></div>
                <div className='text'>
                    안녕하세요!
                </div>
            </div>
            <div className='loading_percent'>
                <AnimatedCountUp
                    start={0}
                    end={100}
                    duration={1.8}
                />
            </div>
        </div>
    );
}

export default Loading;