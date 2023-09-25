import useAuth from '@/hooks/useAuth';
import { AppointmentConnection, AppointmentDto, Cursor, Edge, PageInfo } from '@/types/api';
import { fetchAppointments } from '@/utils/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import Appointment from './Appointment';
export default function AppointmentList() {
  const { token, loading } = useAuth();
  const [params, setParams] = useState<{ size: number; before: Cursor; after?: never } 
  | { size: number, before?: never, after: Cursor }>({size: 5, after: ''});
  const [appointments, setAppointments] = useState<Edge<AppointmentDto>[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo>();
  const router = useRouter();
  
  const fetchData = async () => {
    fetchAppointments(token, params)
      .then(res => res.ok ? res.json() : res.text())
      .then(res => {
        if (typeof res === 'string') {
          router.push('/login');
          return;
        }
        let result: AppointmentConnection = res;
        setAppointments(result.edges);
        setPageInfo(result.pageInfo);
      });
  }

  const onNext = () => {
    setParams({size: 10, after: pageInfo?.nextCursor!});
  }
  
  const onPrev = () => {
    setParams({size: 10, before: pageInfo?.previousCursor!});
  }

  useEffect(() => {
    if (loading)
      return;
    fetchData();
  }, [params, loading, token]);

  return <div className="flex flex-col gap-3 px-10 py-5 rounded-xl border m-5 items-fit justify-center">
    <div className='flex'>
      <p className="text-xl flex-1">Appointments</p>
      <div className='flex gap-2'>
        <button
          onClick={() => onPrev()}
          className='rounded-full w-8 h-8 flex justify-center items-center border border-black disabled:text-gray-100 disabled:border-gray-100' disabled={!pageInfo?.hasPreviousPage}>
          <FaArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => onNext()}
          className='rounded-full w-8 h-8 flex justify-center items-center border border-black disabled:text-gray-100 disabled:border-gray-100' disabled={!pageInfo?.hasNextPage}>
          <FaArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
    <div className='mt-5 flex flex-col gap-3'>
      {appointments.map(appointment => <Appointment key={appointment.cursor} appointment={appointment.node} />)}
    </div>
  </div>;
}