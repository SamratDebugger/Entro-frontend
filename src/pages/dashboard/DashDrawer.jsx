import DashNav from "./DashNav";
import DashSidebar from "./DashSidebar";

export default function DashDrawer({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle inline"
      />
      <div className="drawer-content">
        {/* Navbar */}
        <DashNav />
        {/* Page content here */}
        <main className="p-4">{children}</main>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <DashSidebar />
        </div>
      </div>
    </div>
  );
}
