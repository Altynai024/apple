import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <>
      <div className='NotFound'>404</div>
      <p className="NotFound_txt">
        Oops, go to 
        <Link to="/">Home</Link>
      </p>
    </>
  );
}

export default NotFound;