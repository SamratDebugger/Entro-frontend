import SolutionCard from "./SolutionCard";

export default function Solution() {
  return (
    <div className="max-w-360 mx-auto ">
      <div>
        <h2 className="text-5xl font-bold">
          Comprehensive <span className="text-main"> financial solutions</span>
        </h2>
        <p className="text-2xl">
          Tailor user profiles to fit the needs of your team, enhancing
          personalization.
        </p>
      </div>
      <div>
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
      </div>
    </div>
  );
}
