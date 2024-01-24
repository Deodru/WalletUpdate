import lock from "../assets/icons/lock-circle.svg";

export default function LinkStatus({ className }) {
  return (
    <div
      className={`absolute top-0 left-1/2 -translate-x-1/2 md:left-0  z-10 color-green flex gap-1 align-center ${className}`}
    >
      <img src={lock} aria-hidden className="w-6 md:w-8" />

      <span className="text-green text-base md:text-[1.25rem]">
        This link is secure
      </span>
    </div>
  );
}
