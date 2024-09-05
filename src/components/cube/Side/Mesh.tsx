import { CSSProperties } from "react";
import Side from "./Side";

interface IMesh {
  size?: string;
  background: string;
}
interface IPropertry {
  margin?: string;
  anyStyle: CSSProperties;
}

const Mesh = ({ size, background }: IMesh) => {
  const sizeDefualt = "36vh";
  const sizeParent: string = typeof size == "string" ? size : "";
  const sizeSigment = parseFloat(sizeParent || sizeDefualt) / 3;
  const arrayProperty: Array<IPropertry> = [
    { margin: "0px", anyStyle: {} },
    { margin: `0px ${sizeSigment}vh`, anyStyle: {} },
    { margin: `0px 0px 0px ${2 * sizeSigment}vh`, anyStyle: {} },
    { margin: `${sizeSigment}vh 0px`, anyStyle: {} },
    { margin: `${sizeSigment}vh`, anyStyle: {} },
    { margin: `${sizeSigment}vh 0px 0px ${2 * sizeSigment}vh`, anyStyle: {} },
    { margin: `${2 * sizeSigment}vh 0px`, anyStyle: {} },
    { margin: `${2 * sizeSigment}vh ${sizeSigment}vh`, anyStyle: {} },
    { margin: `${2 * sizeSigment}vh`, anyStyle: {} },
  ];

  const onClickSegment = (data: string) => {
    console.log(data);
  };

  return (
    <div>
      {arrayProperty.map(({ margin, anyStyle }, iter) => (
        <Side
          key={iter}
          data={iter + background}
          isSegment={true}
          width={sizeSigment + "vh"}
          height={sizeSigment + "vh"}
          margin={margin}
          outline="0.1vh solid black"
          sizeDefualt=""
          background={background}
          anyStyle={anyStyle}
          onClickSegment={onClickSegment}
        />
      ))}
    </div>
  );
};

export default Mesh;
