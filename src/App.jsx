import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Solution from "./pages/Solution";
import Help from "./pages/Help";
import DashLayout from "./layout/DashLayout";
import Protected from "./pages/Protected";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/dashboard/Settings";
import Profile from "./pages/dashboard/Profile";
import "react-multi-carousel/lib/styles.css";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/help" element={<Help />} />
      </Route>
      <Route element={<DashLayout />}>
        <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        >
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}
