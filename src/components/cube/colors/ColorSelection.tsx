import { useState } from "react";
import { greySimple } from "../../../assets/colors";
import ColorCircle from "./ColorCircle";

const ColorSelection = () => {
  const [width, setWidth] = useState<string>("6vh");

  return (
    <div
      onMouseEnter={() => setWidth("18vh")}
      onMouseLeave={() => setWidth("6vh")}
      style={{
        position: "absolute",
        left: "11vw",
        top: "15vh",
        width: width,
        height: "6vh",
        borderRadius: "3vh",
        border: `0.2vh solid ${greySimple}`,
        background: greySimple,
      }}
    >
      <ColorCircle />
    </div>
  );
};

export default ColorSelection;
