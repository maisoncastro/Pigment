import React from "react";
import { CustomPicker, InjectedColorProps, ColorResult } from "react-color";

interface MyColorPickerProps extends InjectedColorProps {
  colors: string[];
  onCustomChange: (color: ColorResult) => void;
}

class MyColorPicker extends React.Component<MyColorPickerProps> {
  render() {
    const { colors, onChange, onCustomChange } = this.props;

    return (
      <div className="square-picker">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() =>
              onCustomChange({
                hex: color,
                hsl: { h: 0, s: 0, l: 0, a: 1 },
                rgb: { r: 0, g: 0, b: 0, a: 1 },
              })
            }
            style={{
              backgroundColor: color,
              height: Math.floor(500 / 5),
              width: Math.floor(500 / 5),
              display: "inline-block",
            }}
          />
        ))}
      </div>
    );
  }
}

const CustomSquarePicker = CustomPicker(MyColorPicker);

export default CustomSquarePicker;
