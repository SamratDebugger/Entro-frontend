import { FiArrowUpRight } from "react-icons/fi";
import SolutionCarousel from "./SolutionCarousel";

export default function Solution() {
  return (
    <div className="max-w-360 mx-auto ">
      <div>
        <h2 className="text-3xl md:text-5xl font-bold">
          Comprehensive <span className="text-main"> financial solutions</span>
        </h2>
        <p className="sm:text-2xl opacity-70">
          Tailor user profiles to fit the needs of your team, enhancing
          personalization.
        </p>
      </div>
      <div className="mt-10">
        <SolutionCarousel />
      </div>
      <button className="btn btn-outline mt-5 md:btn-lg border-black/45">
        View All Solutions <FiArrowUpRight />
      </button>
    </div>
  );
}
