import type React from "react";
import { twMerge } from "tailwind-merge";

type SliceIconProps = {
  className?: string;
};

export const SliceIcon: React.FC<SliceIconProps> = ({ className }) => {
  return (
    <div className={twMerge("w-6 h-6", className)}>
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <g transform="matrix(0.2776510417461395, 0, 0, -0.2776510417461395, -248.82130432128906, 922.8839721679688)">
          <path d="M 2364 3286 C 2318 3266 1310 2682 1271 2653 C 1232 2623 1210 2576 1210 2520 C 1210 2454 1271 2356 1331 2325 C 1368 2305 1443 2306 1483 2326 C 1539 2355 2483 2901 2536 2935 C 2594 2973 2620 3018 2620 3079 C 2620 3125 2608 3157 2567 3219 C 2520 3288 2435 3317 2364 3286 Z" />
          <path d="M 2158 2512 C 2003 2432 1109 1907 1074 1875 C 1040 1843 1031 1826 1025 1787 C 1008 1677 1115 1540 1216 1540 C 1261 1540 1307 1565 1850 1879 C 2181 2070 2367 2184 2391 2208 C 2452 2272 2452 2346 2390 2443 C 2374 2469 2346 2499 2328 2510 C 2286 2536 2207 2536 2158 2512 Z" />
        </g>
      </svg>
    </div>
  );
};
