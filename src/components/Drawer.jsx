import Nav from "./Nav";
import Sidebar from "./Sidebar";

export default function Drawer({ children }) {
  return (
    <div className="drawer">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle lg:hidden"
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Nav />
        {/* Page content here */}
        <main>{children}</main>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
}
