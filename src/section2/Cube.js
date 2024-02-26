import './Cube.css';

const Cube = ({ iconImg}) => {
  return (
    <div className="cube">
      <div className="cube_in">
        <div className="cube_face cube_face_front" style={{ backgroundImage: `url(${iconImg})` }}></div>
        <div className="cube_face cube_face_back" style={{ backgroundImage: `url(${iconImg})` }}></div>
        <div className="cube_face cube_face_right" style={{ backgroundImage: `url(${iconImg})` }}></div>
        <div className="cube_face cube_face_left" style={{ backgroundImage: `url(${iconImg})` }}></div>
        <div className="cube_face cube_face_top" style={{ backgroundImage: `url(${iconImg})` }}></div>
        <div className="cube_face cube_face_bottom" style={{ backgroundImage: `url(${iconImg})` }}></div>
      </div>
    </div>
  );
};

export default Cube;
