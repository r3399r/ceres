import Head from 'next/head';
import Link from 'next/link';

const Home = () => (
  <div className="bg-yellow-100">
    <Head>
      <title>Next App</title>
      <meta name="description" content="Web site created using next-react-app" />
    </Head>
    <div>This is Home Page</div>
    <Link href="/about" className="border border-black">
      Go to About Page
    </Link>
  </div>
);

export default Home;
