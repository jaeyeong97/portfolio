import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const AnimatedCountUp = ({ start, end, duration, decimal }) => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <div>
          {isVisible ? (
            <CountUp start={start} end={end} duration={duration} decimals={decimal} suffix='%' />
          ) : (
            <span>0</span>
          )}
        </div>
      )}
    </VisibilitySensor>
  );
};

export default AnimatedCountUp;