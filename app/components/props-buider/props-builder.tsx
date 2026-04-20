import PreviewColorPickerCustom from "../ui/preview/preview-color-picker-custom";
import PreviewSlider from "../ui/preview/preview-slider";
import PreviewSwitch from "../ui/preview/preview-switch";

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

export default function PropsInput({ title, setting, ...props }) {
  switch (setting.type) {
    case "color":
      return (
        <PreviewColorPickerCustom
          title={title}
          color={setting.default || undefined}
          {...props}
        />
      );
    case "number":
      return (
        <PreviewSlider
          title={title}
          min={setting.min}
          max={setting.max}
          step={setting.step}
          {...props}
        />
      );
    case "boolean":
      return (
        <PreviewSwitch
          title={title}
          value={"value" in props ? props.value : setting.default}
          {...props}
        />
      );
    default:
      console.error(
        `${process.execPath}No input type found. title='${title}' setting: `,
        setting,
      );
  }
  return null;
}
