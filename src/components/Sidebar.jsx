import { Link } from "react-router";
import { navMenus } from "../../helper/navmenuus";

export default function Sidebar() {
  return (
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      {/* Sidebar content here */}
      {navMenus.map((menu) => (
        <li key={menu.link}>
          <Link to={menu.link}>{menu.title}</Link>
        </li>
      ))}
    </ul>
  );
}
