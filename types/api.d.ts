/**
 * 
 * Below is a list of types that relate to the projects backend API's.
 * 
 */


/**
 * @summary An object representing a user appointment.
 */
export type AppointmentDto = {
  id: string;
  paymentId: string;
  userId: string;
  duration: number;
  scheduledTime: string;
  status: "SCHEDULED" | "PAID" | "COMPLETE" | "IN_PROGRESS";
  workOrder: {
    service: string;
  };
};

/**
* @summary Base64 string
*/
export type Cursor = string

export type Edge<Node> = {
  node: Node
  cursor: Cursor
}

/**
* @summary Contains properties relating to pagination.
*/
export type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  previousCursor: Cursor;
  nextCursor: Cursor
}

export type Connection<Node> = {
  edges: Edge<Node>[]
  pageInfo: PageInfo
}

export type AppointmentConnection = Connection<AppointmentDto>

/**
* @summary Request body to be sent to /api/auth
*/
export type LoginRequestBody = {
  username: string
  password: string
}

/**
* @summary Response from /api/auth
*/
export type LoginResponse = {
  token: string
}

/**
* 
* 
* Below you can find API docs written in JSDoc format.
* 
* 
*/

/**
* @summary An endpoint that authenticates a user.
* 
* @method POST
* 
* @endpoint /api/auth
* 
* @authorization false
* 
* @body {LoginRequestBody}
* 
* @returns {LoginResponse}
*/
function loginUser(params: LoginRequestBody): Promise<LoginResponse>

/**
* @summary An endpoint that returns an array of appointments.
* 
* @method GET
* 
* @endpoint /api/appointments
* 
* @authorization true
* 
* @query {number} size - The amount of appointments to be returned.
* 
* @query {string} before - A cursor representing an appointment, where you'd like to return results from a date prior (AKA previous page).
* 
* @query {string} after - A cursor representing an appointment, allowing you to retrieve entities after this particular item (AKA next page).
* 
* @returns {AppointmentConnection}
* 
* @example 
* fetch(`${process.env.BACKEND_URL}/api/appointments?size=${size}&after=${cursor}`, {
*      headers: {
*          'Authorization': `Bearer ${token}`
*      }
* })
*/
function fetchAppointments(
  params: 
   | { size: number; before: Cursor; after?: never } 
   | { size: number, before?: never, after: Cursor }
): Promise<AppointmentConnection>

/**
* @summary An endpoint that returns available appointment times for a given date.
* 
* @method GET
* 
* @endpoint /api/availability/:date
* 
* @authorization true
* 
* @param {string} date - Must be formatted as YYYY-MM-DD.
* 
* @returns {string[]} An array of dates.
* 
* @example 
* fetch(`${process.env.BACKEND_URL}/api/availability/${date}`, {
*      headers: {
*          'Authorization': `Bearer ${token}`
*      }
* })
*/
function fetchAppointmentTimeAvailability(date: string): Promise<string[]>