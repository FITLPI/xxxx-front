interface IColorCircle {
  colors?: Array<string>;
}

const ColorCircle = ({ colors }: IColorCircle) => {
  return (
    <div
      style={{
        width: "6vh",
        height: "6vh",
        borderRadius: "3vh",
        content: "",
        background:
          "conic-gradient( red, yellow, lime, aqua, blue, magenta, red)",
        filter: "blur(0.3vh)",
      }}
    ></div>
  );
};

export default ColorCircle;
