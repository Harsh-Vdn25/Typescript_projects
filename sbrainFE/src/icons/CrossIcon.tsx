import type { IconProps } from "./index";
import { iconSizeDetailes } from "./index";

type eventType={
    onClick:()=>void
}

export const CrossIcon = ({ onClick, size }:(IconProps&eventType)) => {
  return (
    <div onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className={`${iconSizeDetailes[size]} cursor-pointer
        focus:outline-2 border border-none focus:border-black`}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};
