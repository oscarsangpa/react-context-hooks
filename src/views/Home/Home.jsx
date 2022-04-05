import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return ( 
    <>
      <div>
      <h3 className="my-5">Wellcome to my React App Test!</h3>
      <div className="btns-container">
      <Link to="/users">
      <button className='btn btn-warning mx-4 my-4'> Go to users </button>
      </Link>
      <Link to="/albums">
      <button className="btn btn-dark"> Go to Albums </button>
      </Link>
      </div>
    
      </div>
    </>
   );
}
 
export default Home;