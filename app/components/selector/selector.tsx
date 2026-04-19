import { useState } from "react";
import PreviewSlider from "../ui/preview/preview-slider";
import "./selector.css";

export default function Selector({
  options,
  onChangeChoice,
}: {
  options: string[];
  onChangeChoice: (_: string) => void;
}) {
  const [activeComponent, setActiveComponent] = useState("Line Waves");
  const [sliderValue, setSliderValue] = useState(100);

  return (
    <div className="absolute bottom-0 left-0 right-0 w-screen min-h-20 flex gap-4 flex-col-reverse p-4 opacity-0 hover:opacity-100 duration-300">
      <div className="flex grow  border border-solid border-neutral-50/40 transition-opacity  bg-neutral-900 rounded-xl">
        <div className="flex grow row rounded-xl overflow-hidden selector-shadow">
          {options.map((name, index) => {
            return (
              <button
                key={name}
                className={`flex grow border-solid border-r-2 p-8  border-r-neutral-50/50 hover:bg-neutral-50/30 text-xl transition-colors font-extralight text-neutral-100 tracking-wide justify-center items-center cursor-pointer ${activeComponent === name ? "bg-neutral-50/20" : ""}`}
                onClick={() => {
                  setActiveComponent(name);
                  onChangeChoice(name);
                }}
              >
                {name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-3xl rounded-xl border-neutral-50/50 bg-neutral-900/95 p-5">
        <div className="col-span-2 row-span-1">
          <h2 className="text-lg font-semibold">Configurations</h2>
          <p className="text-neutral-300 font-light">
            Change configurations of the background
          </p>
        </div>

        <div className="flex gap-2 flex-col col-span-1 row-span-1">
          <PreviewSlider
            title="Distance"
            min={50}
            max={300}
            step={1}
            value={sliderValue}
            onChange={setSliderValue}
          />
          <PreviewSlider
            title="Distance"
            min={50}
            max={300}
            step={1}
            value={sliderValue}
            onChange={setSliderValue}
          />
        </div>

        <div className="flex gap-2 flex-col col-span-1 row-span-1">
          <PreviewSlider
            title="Distance"
            min={50}
            max={300}
            step={1}
            value={sliderValue}
            onChange={setSliderValue}
          />
          <PreviewSlider
            title="Distance"
            min={50}
            max={300}
            step={1}
            value={sliderValue}
            onChange={setSliderValue}
          />
        </div>
      </div>
    </div>
  );
}
