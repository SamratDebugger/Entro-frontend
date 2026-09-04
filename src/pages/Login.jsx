import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../../firebase/firebase.config";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  //route protection
  const navigate = useNavigate();
  const { currentUser, isLoading } = useAuth();
  useEffect(() => {
    if (currentUser && !isLoading) {
      navigate("/dashboard");
    }
  }, [currentUser, isLoading]);
  if (isLoading) {
    return <p>Loading</p>;
  }
  //form logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLogin(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLogin(false);
      navigate("/dashboard");
    } catch (error) {
      setIsLogin(false);
      console.error(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="fieldset  mx-auto bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="input"
          placeholder="Email"
        />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="input"
          placeholder="Password"
        />

        <button
          disabled={isLogin}
          type="submit"
          className="btn btn-neutral mt-4"
        >
          {isLogin ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Login"
          )}
        </button>
      </fieldset>
    </form>
  );
}
