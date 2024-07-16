import RoundedDiv from "./RoundedDiv";
import { yellow } from "../assets/colors";
import { culcWithCoef, getUtils } from "../share/helpers";

interface IAccent {
  size?: string;
}

const Accent = ({ size }: IAccent) => {
  const culc = (value: string, coef: number): string =>
    culcWithCoef(value, coef) + getUtils(value);
  return (
    <RoundedDiv
      width={culc(size || "120px", 0.082)}
      height={culc(size || "120px", 0.082)}
      borderRadius={culc(size || "120px", 0.042)}
      background={yellow}
    ></RoundedDiv>
  );
};

export default Accent;
