import { useParams } from 'react-router-dom';

const AboutSlug = () => {
  const { slug } = useParams();

  return <div>This is Dynamic Page with slug: {slug}</div>;
};

export default AboutSlug;
