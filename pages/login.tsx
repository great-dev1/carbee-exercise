import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signin() {
  const { login } = useAuth();
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    login({
      username: email,
      password
    }).then(res => {
      console.log(res);
      if (res.result === 'success') {
        router.push('/dashboard');
      }
      else {
        toast.error(res.message);
      }
    });
  }

  return <div className="absolute top-0 bottom-0 right-0 left-0 justify-center items-center flex bg-white">
    <ToastContainer />
    <div className="flex flex-col gap-3 rounded-xl border items-fit justify-center w-[500px]">
      <div className="text-center px-10 py-5 text-[50px] text-brand-primary border-b font-bold">
        Carbee
      </div>
      <div className="flex flex-col gap-3 px-10 py-5">
        <Input label="Email" placeholder="Email" type="email" value={email} onChange={setEmail} />
        <Input label="Password" placeholder="Password" type="password" value={password} onChange={setPassword} />
        <Button className="mt-5" onClick={onLogin}>Sign In</Button>
      </div>
    </div>
  </div>;
}