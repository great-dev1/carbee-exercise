import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/dashboard');
  }, []);
  return <div></div>;
}
