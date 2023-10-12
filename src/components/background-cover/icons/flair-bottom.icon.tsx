import {
  IconPropsType,
} from "@/components/background-cover/icons/icon-props.type";
import { FC } from "react";

const FlairBottomIcon: FC<IconPropsType> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 1697 1452"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_257_113)">
        <ellipse
          cx="848.5"
          cy="726"
          rx="248.5"
          ry="126"
          fill="url(#paint0_linear_257_113)"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter0_f_257_113"
          x="0"
          y="0"
          width="1697"
          height="1452"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_257_113"
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_257_113"
          x1="541.177"
          y1="658.298"
          x2="1064.76"
          y2="711.715"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="gradient-color-secondary"></stop>
          <stop offset="1" className="gradient-color-primary"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FlairBottomIcon;
