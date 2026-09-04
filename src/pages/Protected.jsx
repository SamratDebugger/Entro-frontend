import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthProvider";
import { useEffect } from "react";

export default function Protected({ children }) {
  const navigate = useNavigate();
  const { currentUser, isLoading } = useAuth();
  useEffect(() => {
    if (!currentUser && !isLoading) {
      navigate("/login");
    }
  }, [currentUser, isLoading]);
  if (isLoading) {
    return <p>Loading</p>;
  }
  return children;
}
