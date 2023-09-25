import { Cursor, LoginRequestBody } from "@/types/api";

export function loginUser(params: LoginRequestBody): Promise<Response> {
  return fetch(`/api/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  });
}

export function fetchAppointmentTimeAvailability(token: string, date: string): Promise<Response> {
  return fetch(`/api/availability/${date}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}

export function fetchAppointments(token: string, params: 
  | { size: number; before: Cursor; after?: never } 
  | { size: number, before?: never, after: Cursor }): Promise<Response> {
  if (params.before)
    return fetch(`/api/appointments?size=${params.size}&before=${params.before}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  return fetch(`/api/appointments?size=${params.size}&after=${params.after}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}