export default function BaseCard({ children }) {
  return (
    <div className="border border-base-300 bg-[#ECF6F6]/60 rounded-2xl ">
      {children}
    </div>
  );
}
