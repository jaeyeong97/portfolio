import './Loading.css';
import AnimatedCountUp from '../components/AnimatedCountUp';

const Loading = () => {
    return (
        <div className="loading">
            <div className='loading_percent'>
                <AnimatedCountUp
                    start={0}
                    end={100}
                    duration={2}
                />
            </div>
        </div>
    );
}

export default Loading;