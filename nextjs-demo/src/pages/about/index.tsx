import Link from 'next/link';

const About = () => (
  <div className="bg-yellow-100 text-red-700">
    <div>About</div>
    <div>
      <Link href="/about/dynamic1" className="border border-black">
        Go to Dynamic1
      </Link>
    </div>
    <div>
      <Link href="/about/dynamic2" className="border border-black">
        Go to Dynamic2
      </Link>
    </div>
    <div>
      <Link href="/about/dynamic3" className="border border-black">
        Go to Dynamic3
      </Link>
    </div>
  </div>
);

export default About;
