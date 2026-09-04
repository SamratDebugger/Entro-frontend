import { useAuth } from "../../context/AuthProvider";

export default function Dashboard() {
  const { currentUser } = useAuth();
  return (
    <div>
      <h1>Welcome Back, {currentUser?.displayName}</h1>
    </div>
  );
}
