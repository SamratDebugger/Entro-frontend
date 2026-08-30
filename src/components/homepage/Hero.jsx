import { FaBolt } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="hero bg-[#ECF6F6] min-h-screen ">
      <div className="hero-content text-center">
        <div className="">
          <span className="badge mb-10">
            <FaBolt className="text-warning" /> Innovative Accounting
          </span>

          <h1 className=" text-3xl sm:text-5xl lg:text-7xl font-bold text-balance">
            Financial Excellence in a Digital Age
          </h1>
          <p className="py-6 md:text-xl">
            Optimize your financial performance and drive growth.
          </p>
          <button className="btn hover:bg-neutral text-white bg-main border-main btn-lg">
            Book a Demo
          </button>
          <p className="text-sm mt-5">No Credit Card required!</p>
          <div className="flex max-sm:flex-col justify-center sm:justify-between items-center gap-10 mt-10">
            <div>
              <h3 className="sm:text-left">
                More than 200+ <br /> partners believe in us!
              </h3>
            </div>
            <div className="flex justify-center sm:justify-between  flex-1 gap-y-5  items-center flex-wrap">
              <img src="/assets/images/logo1.svg" alt="logo1" />
              <img src="/assets/images/logo2.svg" alt="logo2" />
              <img src="/assets/images/logo3.svg" alt="logo3" />
              <img src="/assets/images/logo4.svg" alt="logo4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
