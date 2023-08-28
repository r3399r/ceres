import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-yellow-100 text-red-700">
      <div>This is About Page</div>
      <div>
        <button onClick={() => navigate('/about/dynamic1')} className="border border-black">
          Go to Dynamic1 Page
        </button>
      </div>
      <div>
        <button onClick={() => navigate('/about/dynamic2')} className="border border-black">
          Go to Dynamic2 Page
        </button>
      </div>
      <div>
        <button onClick={() => navigate('/about/dynamic3')} className="border border-black">
          Go to Dynamic3 Page
        </button>
      </div>
    </div>
  );
};

export default About;
