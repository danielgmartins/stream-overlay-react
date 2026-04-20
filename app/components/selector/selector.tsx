import { useState } from "react";
import PreviewForm from "./preview-form";
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
    <div className="absolute bottom-0 left-0 right-0 w-screen min-h-20 flex gap-4 flex-col-reverse p-4 opacity-0 hover:opacity-100 duration-300 items-center">
      <div className="flex w-full border border-solid border-neutral-50/40 transition-opacity  bg-neutral-900 rounded-xl">
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
      <PreviewForm />
    </div>
  );
}
