import { FC } from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
  strokeWidth?: string;
}

const RefreshIcon: FC<Props> = ({
  width = "100",
  height = "100",
  color = "white",
  strokeWidth = "4",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_13_2)">
        <path
          d="M83.3334 45.8333C82.3144 38.5009 78.9128 31.7069 73.6527 26.4979C68.3925 21.2889 61.5657 17.9538 54.2236 17.0065C46.8816 16.0591 39.4318 17.552 33.0217 21.2552C26.6116 24.9584 21.5969 30.6664 18.75 37.5M16.6667 20.8333V37.5H33.3334"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.6667 54.1667C17.6857 61.4991 21.0872 68.2931 26.3474 73.5021C31.6075 78.7111 38.4344 82.0462 45.7764 82.9935C53.1184 83.9409 60.5683 82.448 66.9783 78.7448C73.3884 75.0416 78.4031 69.3336 81.25 62.5M83.3334 79.1667V62.5H66.6667"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default RefreshIcon;
