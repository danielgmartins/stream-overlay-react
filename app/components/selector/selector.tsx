import { useState } from "react";
import PreviewSlider from "../ui/preview-slider/preview-slider";
import "./selector.css";

export default function Selector({
  options,
  onChangeChoice,
}: {
  options: string[];
  onChangeChoice: (_: string) => void;
}) {
  const [activeComponent, setActiveComponent] = useState("Line Waves");

  return (
    <div className="absolute bottom-0 left-0 right-0 w-screen min-h-20 flex column p-4">
      <div className="flex grow column border border-solid border-neutral-50/40  opacity-0 hover:opacity-100 transition-opacity duration-300 bg-neutral-900/95 rounded-xl">
        <div className="flex grow row rounded-xl overflow-hidden selector-shadow">
          {options.map((name, index) => {
            return (
              <button
                key={name}
                className={`flex grow border-solid border-r-2 p-8  border-r-neutral-50/50 hover:bg-neutral-50/30 text-xl transition-colors justify-center items-center cursor-pointer ${activeComponent === name ? "bg-neutral-50/20" : ""}`}
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
    </div>
  );
}
