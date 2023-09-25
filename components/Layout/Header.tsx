import useAuth from "@/hooks/useAuth";
import Button from "../Common/Button";

export default function Header() {
  const { token, logout } = useAuth();
  return <div className="flex justify-between items-center border-b px-10">
    <div className="text-xl text-brand-primary font-bold py-5">
      Carbee
    </div>
    <Button onClick={() => logout()}>Logout</Button>
  </div>;
}