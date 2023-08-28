import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-yellow-100">
      <div>This is Home Page</div>
      <button onClick={() => navigate('/about')} className="border border-black">
        Go to About Page
      </button>
    </div>
  );
};

export default Home;
