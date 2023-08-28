import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  return <div>This is Dynamic Page with slug: {router.query.slug}</div>;
}
