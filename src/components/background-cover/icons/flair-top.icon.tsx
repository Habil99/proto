import { IconProps } from "@/components/background-cover/icons/icon-props.type";
import { FC } from "react";

const FlairTopIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 992 832"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_53_36)">
        <path
          d="M392 -44.2817C392 48.8989 259.401 232 75.5089 232C-108.383 232 -143 48.8989 -143 -44.2817C-143 -137.462 -124.858 -213 59.034 -213C242.926 -213 392 -137.462 392 -44.2817Z"
          fill="url(#paint0_linear_53_36)"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_f_53_36"
          x="-743"
          y="-813"
          width="1735"
          height="1645"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_53_36"
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_53_36"
          x1="-352.749"
          y1="-134.936"
          x2="348.788"
          y2="-63.3168"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="gradient-color-secondary"></stop>
          <stop offset="1" className="gradient-color-primary"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FlairTopIcon;
