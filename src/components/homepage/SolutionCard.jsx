import { FaChessRook } from "react-icons/fa6";

export default function SolutionCard() {
  return (
    <div className="card group bg-[#ECF6F6]/60  hover:bg-main border border-base-300">
      <div className="card-body">
        <div className="avatar  mb-15 avatar-placeholder self-start">
          <div className="bg-main group-hover:bg-white group-hover:text-main text-white w-12 rounded-full">
            <span>
              <FaChessRook />
            </span>
          </div>
        </div>
        <h2 className="card-title group-hover:text-white">Tax Planning</h2>
        <p className="group-hover:text-white">
          Strategic tax solutions to minimize liability and ensure compliance
        </p>
      </div>
    </div>
  );
}
