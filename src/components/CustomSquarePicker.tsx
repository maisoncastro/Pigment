import React from "react";
import { CustomPicker, InjectedColorProps, ColorResult } from "react-color";

interface MyColorPickerProps extends InjectedColorProps {
  colors: string[];
  onCustomChange: (color: ColorResult) => void;
}

class MyColorPicker extends React.Component<MyColorPickerProps> {
  state = {
    copiedIndex: -1,
  };

  render() {
    const { colors, onCustomChange } = this.props;

    function rgbStringToHex(rgbString: string) {
      const rgbValues = rgbString
        .replace(/^rgb\(|\s|\)$/g, "")
        .split(",")
        .map(Number);

      let hex = "#";
      for (const value of rgbValues) {
        hex += value.toString(16).padStart(2, "0").toUpperCase();
      }

      return hex;
    }

    return (
      <div className="square-picker">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => {
              const hexColor = rgbStringToHex(color);
              onCustomChange({
                hex: hexColor,
                hsl: { h: 0, s: 0, l: 0, a: 1 },
                rgb: { r: 0, g: 0, b: 0, a: 1 },
              });
              this.setState({ copiedIndex: index }, () => {
                setTimeout(() => {
                  this.setState({ copiedIndex: -1 });
                }, 1500);
              });
            }}
            style={{
              backgroundColor: color,
              height: Math.floor(400 / 5),
              width: Math.floor(600 / 5),
              display: "inline-block",
              position: "relative",
              borderBottomLeftRadius: index === 0 ? "15px" : "0px",
              borderBottomRightRadius: index === 4 ? "15px" : "0px",
            }}
          >
            {this.state.copiedIndex === index && (
              <span
                className={`copied-message${
                  this.state.copiedIndex === index ? " animate" : ""
                }`}
              >
                Copied
              </span>
            )}
          </div>
        ))}
      </div>
    );
  }
}

const CustomSquarePicker = CustomPicker(MyColorPicker);

export default CustomSquarePicker;
