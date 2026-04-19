import { useState } from "react";

export default function Selector({
  options,
  onChangeChoice,
}: {
  options: string[];
  onChangeChoice: (_: string) => void;
}) {
  const [activeComponent, setActiveComponent] = useState("Line Waves");

  return (
    <div className="absolute top-4 left-4 righ-4 w-full min-h-20 p-8 flex row  border-solid border-neutral-300 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
      <div className="flex grow row rounded-xl overflow-hidden bg-neutral-900/9">
        {options.map((name, index) => {
          return (
            <button
              key={name}
              className={`flex grow border-r-2 p-4 border-neutral-900/50 border-r-neutral-50/5 hover:bg-neutral-900/70 font-no text-2xl transition-colors justify-center items-center cursor-pointer ${activeComponent === name ? "bg-neutral-900/70" : ""}`}
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
  );
}
