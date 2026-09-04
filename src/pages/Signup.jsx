import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";

export default function Signup() {
  const [isSignup, setIsSignup] = useState(false);
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
    setIsSignup(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      setIsSignup(false);
      navigate("/dashboard");
    } catch (error) {
      setIsSignup(false);
      console.error(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <fieldset className="fieldset  mx-auto bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Registration</legend>

        <label htmlFor="name" className="label">
          Full Name
        </label>
        <input
          name="name"
          type="text"
          className="input"
          placeholder="Full Name"
        />
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
          disabled={isSignup}
          type="submit"
          className="btn btn-neutral mt-4"
        >
          {isSignup ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Registration"
          )}
        </button>
      </fieldset>
    </form>
  );
}
