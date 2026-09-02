import BaseCard from "./BaseCard";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-5">
      <div className="text-center mb-15">
        <h3 className=" text-main uppercase">About Us</h3>
        <h2 className="text-5xl font-bold">Why they prefer us!</h2>
      </div>
      <div>
        <div className="grid md:grid-cols-2 gap-5 ">
          <BaseCard>
            <div className="p-10 flex flex-col justify-between h-full">
              <h2 className="text-7xl font-medium text-main">22.7k</h2>
              <p className="text-lg">
                Gain deep insights with intuitive dashboards.
              </p>
            </div>
          </BaseCard>

          <BaseCard>
            <p className="text-lg">
              Connect all your favorite tools and platforms effortlessly
            </p>
            <div>
              <img src="/assets/images/logos.webp" alt="logo" />
            </div>
          </BaseCard>
        </div>

        <div className="pt-10">
          <BaseCard>
            <h2 className="font-bold text-3xl my-5 m-10">
              Real-Time Analytics
            </h2>
            <p className="text-lg my-5 ml-10">
              Turn your data into actionable intelligence, helping you make
              informed decisions.
            </p>
            <div className="mx-10">
              <img src="/assets/images/chart.webp" alt="chart" />
            </div>
          </BaseCard>
        </div>
      </div>
      <div className="text-center my-10">
        <h2 className="text-2xl">
          Gain deep insights with intuitive dashboards.
        </h2>
        <button className="btn my-5 hover:bg-black text-white bg-main border-main btn-xl rounded-xl ">
          Book A Demo
        </button>
        <p>No credit card required!</p>
      </div>
    </div>
  );
}
