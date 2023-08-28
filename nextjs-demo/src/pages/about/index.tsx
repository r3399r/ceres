import Link from 'next/link';

const About = () => (
  <div className="bg-yellow-100 text-red-700">
    <div>This is About Page</div>
    <div>
      <Link href="/about/dynamic1" className="border border-black">
        Go to Dynamic1 Page
      </Link>
    </div>
    <div>
      <Link href="/about/dynamic2" className="border border-black">
        Go to Dynamic2 Page
      </Link>
    </div>
    <div>
      <Link href="/about/dynamic3" className="border border-black">
        Go to Dynamic3 Page
      </Link>
    </div>
  </div>
);

export default About;
