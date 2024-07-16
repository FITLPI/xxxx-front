import RoundedDiv from "./RoundedDiv";
import { yellow } from "../assets/colors";
import Accent from "./Accent";

interface IButton {
  children?: React.ReactNode;
  background?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  isAccent?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  background,
  width,
  height,
  borderRadius,
  margin,
  padding,
  isAccent,
  onClick,
}: IButton) => {
  return (
    <>
      <RoundedDiv
        background={background || yellow}
        width={width || "100px"}
        height={height || "60px"}
        margin={margin || `0px ${Boolean(isAccent) ? "20px" : "40px"} 0px 40px`}
        padding={padding}
        borderRadius={borderRadius || "20px"}
      >
        <button onClick={onClick} style={{ width: "100%", height: "100%" }}>
          <h2>{children}</h2>
        </button>
      </RoundedDiv>
      {isAccent && <Accent size={width || "120px"} />}
    </>
  );
};

export default Button;
