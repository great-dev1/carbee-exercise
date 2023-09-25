import { useEffect } from 'react';
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { ToastContainer } from 'react-toastify';
import Header from '@/components/Layout/Header';
import TimeAvailability from '@/components/Dashboard/TimeAvailability';
import AppointmentList from '@/components/Dashboard/AppointmentList';

export default function Dashboard() {
  const {token, loading, logout} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token && !loading) {
      router.push('/login');
    }
  }, [token, loading, router])
  
  return <div className='flex flex-col gap-3'>
    <ToastContainer />
    <Header />
    <TimeAvailability />
    <AppointmentList />
  </div>;
}