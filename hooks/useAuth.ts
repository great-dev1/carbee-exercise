import { loginAction, logoutAction } from "@/actions/auth";
import { LoginRequestBody } from "@/types/api";
import { loginUser } from "@/utils/api";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

const useAuth = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state: any) => state.auth);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(loginAction(localStorage.getItem('token')));
    }
    setLoading(false);
  }, []);
  
  const login = async (credentials: LoginRequestBody) => {
    const response = await loginUser(credentials);
    const result = await response.json();
    if (!result)
      return {result: 'error', message: 'Server does not respond'};
    
    if (result.token) {
      localStorage.setItem('token', result.token);
      dispatch(loginAction(result.token));
      return {result: 'success', message: 'Signed In successfully.'};
    }

    return {result: 'error', message: result.message};
  }

  const logout = async () => {
    localStorage.removeItem('token')
    dispatch(logoutAction());
  }

  return { token, loading, login, logout };
}

export default useAuth;