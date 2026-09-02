export default function Business() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center ">
        <h3 className="text-main text-xl mb-5">
          Knowledge to Power Your Decisions
        </h3>
        <h2 className="font-bold text-3xl sm:text-5xl ">
          A game-changer for your businesses
        </h2>
      </div>
      <div className="grid sm:grid-cols-3 justify-around my-20  ">
        <div className="text-center">
          <h2 className="text-main text-8xl">22.7k</h2>
          <p className="text-xl">Believe in us</p>
        </div>

        <div className="text-center">
          <h2 className="text-main text-8xl">70 %</h2>
          <p className="text-xl">Return on investment</p>
        </div>
        <div className="text-center">
          <h2 className="text-main text-8xl">24</h2>
          <p className="text-xl">Top in world</p>
        </div>
      </div>
      <div className="px-5">
        <img src="/assets/images/chart2.webp" alt="chart" />
      </div>
      <div className="text-center my-10">
        <h2 className="text-2xl mt-20">
          Optimize your financial performance and drive growth.
        </h2>
        <button className="btn my-5 hover:bg-black text-white bg-main border-main btn-xl rounded-xl ">
          Book A Demo
        </button>
        <p>No credit card required!</p>
      </div>
    </div>
  );
}
