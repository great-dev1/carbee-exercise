import { AppointmentDto } from '@/types/api';
import { formatDate, formatTime } from '@/utils';
import { FaCalendar, FaCalendarCheck }  from 'react-icons/fa';

interface AppointmentProps {
  appointment: AppointmentDto
}
export default function Appointment({appointment}: AppointmentProps) {
  const startTime = new Date(appointment.scheduledTime);
  const endTime = new Date(appointment.scheduledTime);
  endTime.setMinutes(endTime.getMinutes() + appointment.duration);
  return <div className="flex flex-col gap-3 rounded-md border items-fit justify-center pb-3 hover:bg-gray-100 cursor-pointer">
      <div className='flex px-5 py-2 border-b gap-2 items-center'> <FaCalendarCheck /> { formatDate(startTime) } </div>
      <div className='px-3'>
        <p className='font-bold'>{appointment.status}</p>
        <p>{formatTime(startTime)} - {formatTime(endTime)}</p>
      </div>
      <div className='px-3'>
        <p className='font-bold'>Service</p>
        <p>{appointment.workOrder.service}</p>
      </div>
    </div>;
}