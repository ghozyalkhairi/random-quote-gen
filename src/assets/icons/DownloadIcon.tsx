import { FC } from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
  strokeWidth?: string;
}

const DownloadIcon: FC<Props> = ({
  width = "100",
  height = "100",
  color = "white",
  strokeWidth = "4",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_15_2)">
        <path
          d="M15 63.75V71.25C15 73.2391 15.7902 75.1468 17.1967 76.5533C18.6032 77.9598 20.5109 78.75 22.5 78.75H67.5C69.4891 78.75 71.3968 77.9598 72.8033 76.5533C74.2098 75.1468 75 73.2391 75 71.25V63.75"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.25 41.25L45 60L63.75 41.25"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45 15V60"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default DownloadIcon;
