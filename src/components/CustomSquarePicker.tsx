import React from "react";
import {
  CustomPicker,
  InjectedColorProps,
  Color,
  ColorResult,
  ColorWrapChangeHandler,
} from "react-color";

interface MyColorPickerProps extends InjectedColorProps {
  colors: string[];
  onChange: ColorWrapChangeHandler;
}

class MyColorPicker extends React.Component<MyColorPickerProps> {
  render() {
    const { colors, onChange } = this.props;

    return (
      <div className="square-picker">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={(e) =>
              onChange(
                {
                  hex: color,
                  rgb: { r: 0, g: 0, b: 0 },
                  hsl: { h: 0, s: 0, l: 0 },
                },
                e
              )
            }
            style={{
              backgroundColor: color,
              height: 32,
              width: 32,
              display: "inline-block",
              marginRight: index < colors.length - 1 ? 12 : 0,
            }}
          />
        ))}
      </div>
    );
  }
}

const CustomSquarePicker = CustomPicker(MyColorPicker);

export default CustomSquarePicker;
