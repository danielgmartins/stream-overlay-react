import { useState } from "react";

import PropsInput from "../props-buider/props-builder";

export const BalatroSettings = {
  color1: {
    type: "color",
    default: "#de443b",
  },
  color2: {
    type: "color",
    default: "#de443b",
  },
  pixelation: {
    type: "number",
    default: 756,
    min: 0,
    max: 2000,
    step: 1,
  },
  rotate: {
    type: "boolean",
    default: false,
  },
};

export default function PreviewForm() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [sliderValue, setSliderValue] = useState(100);

  return (
    <div className="relative flex flex-col gap-4 w-3xl rounded-xl border-neutral-50/50 bg-neutral-900/95 p-5">
      <div className="text-neutral-300">
        <h2 className="text-md font-semibold">Configurations</h2>
        <p className="font-light">Change configurations of the background</p>
      </div>
      <button
        className="absolute flex items-center justify-center w-8 aspect-square top-4 right-4 bg-neutral-50/5 rounded-xl border transition-colors hover:bg-neutral-50/20 border-neutral-50/20"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "–" : "+"}
      </button>
      {isExpanded && (
        <div className="flex w-full">
          <div className="flex flex-1 gap-2 flex-col col-span-1 row-span-1">
            <PropsInput
              title="pixelation"
              setting={{
                type: "number",
                default: 756,
                min: 0,
                max: 2000,
                step: 1,
              }}
              value={sliderValue}
              onChange={setSliderValue}
            />
            <PropsInput
              title="pixelation"
              setting={{
                type: "boolean",
                default: false,
              }}
            />
          </div>

          <div className="flex flex-1 gap-2 flex-col col-span-1 row-span-1">
            <PropsInput
              title="pixelation"
              setting={{
                type: "color",
                default: "#FA0443",
              }}
            />
            <PropsInput
              title="pixelation"
              setting={{
                type: "number",
                default: 756,
                min: 0,
                max: 2000,
                step: 1,
              }}
              value={sliderValue}
              onChange={setSliderValue}
            />
          </div>
        </div>
      )}
    </div>
  );
}
