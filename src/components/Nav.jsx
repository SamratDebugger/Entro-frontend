import { Link } from "react-router";
import { navMenus } from "../../helper/navmenuus";

export default function Nav() {
  return (
    <header className="bg-base-100">
      <div className="navbar max-w-360 mx-auto p-5 ">
        <div className="navbar-start">
          <div className="md:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <Link to="/" className="">
            <img
              className="max-w-20 md:max-w-35 "
              src="/assets/images/logo.webp"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {navMenus.map((menu) => (
              <li key={menu.link}>
                <Link to={menu.link}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <button className="btn btn-ghost">Login</button>
          <button className="btn btn-neutral hover:bg-main hover:border-main ">
            Signup
          </button>
        </div>
      </div>
    </header>
  );
}
