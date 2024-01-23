import lock from "../assets/icons/lock-circle.svg";

export default function LinkStatus({ className }) {
  return (
    <div
      className={`absolute top-0 left-0  z-10 color-green flex gap-1 align-center ${className}`}
    >
      <img src={lock} aria-hidden className="h-8" />

      <span className="text-green text-[1.25rem]">This link is secure</span>
    </div>
  );
}
