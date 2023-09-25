import { useEffect, useState, useCallback } from "react";
import Select, { SelectOption } from "../Common/Select";
import { fetchAppointmentTimeAvailability } from "@/utils/api";
import { formatDate, formatTime } from "@/utils";
import useAuth from "@/hooks/useAuth";

export default function TimeAvailability() {
  const { token } = useAuth();
  const [dates, setDates] = useState<SelectOption[]>([]);
  const [availableTimes, setAvailableTimes] = useState([]);

  const fetchAvailableTimes = useCallback((date: string) => {
    fetchAppointmentTimeAvailability(token, date)
      .then(res => res.json())
      .then(res => {
        setAvailableTimes(res);
      });
  }, [setAvailableTimes, token]);

  useEffect(() => {
    let date = new Date();
    let days = [];
    for (let i = 0; i < 10; i ++) {
      date.setDate(date.getDate() + 1);
      days.push({ name: formatDate(date), value: formatDate(date) });
    }
    setDates(days);
    fetchAvailableTimes(days[0].value);
  }, [fetchAvailableTimes]);

  return <div className="flex flex-col gap-3 px-10 py-5 rounded-xl border m-5 items-fit justify-center">
    <p className="text-xl"> Time Availability </p>
    <Select label="Date" options={dates} onChange={fetchAvailableTimes} />
    <div className="flex flex-wrap gap-5">
    {
      availableTimes.map((time: string) => <p className="px-5 py-1 rounded-xl border" key={time}>{formatTime(new Date(time))}</p>)
    }
    </div>
  </div>
}