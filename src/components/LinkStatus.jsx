import lock from "../assets/icons/lock.svg";

export default function LinkStatus({ className }) {
  return (
    <div className={`color-green flex gap-2 align-center ${className}`}>
      <span className="">
        <img src={lock} aria-hidden className="h-6" />
      </span>
      <span className="text-green">This link is secure</span>
    </div>
  );
}
