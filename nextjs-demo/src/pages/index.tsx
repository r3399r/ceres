import Link from 'next/link';

const Home = () => (
  <div className="bg-yellow-100">
    <div>Home</div>
    <Link href="/about" className="border border-black">
      Go to About
    </Link>
  </div>
);

export default Home;
