import Side from "./Side";

interface IMesh {
  size?: string;
  background: string;
}

const Mesh = ({ size, background }: IMesh) => {
  const sizeDefualt = "36vh";
  const sizeParent: string = typeof size == "string" ? size : "";
  const sizeSigment = parseFloat(sizeParent || sizeDefualt) / 3;
  const arrayMargin = [
    "0px",
    `0px ${sizeSigment}vh`,
    `0px 0px 0px ${2 * sizeSigment}vh`,
    `${sizeSigment}vh 0px`,
    `${sizeSigment}vh`,
    `${sizeSigment}vh 0px 0px ${2 * sizeSigment}vh`,
    `${2 * sizeSigment}vh 0px`,
    `${2 * sizeSigment}vh ${sizeSigment}vh`,
    `${2 * sizeSigment}vh`,
  ];

  return (
    <div>
      {arrayMargin.map((margin) => (
        <Side
          isMain={true}
          width={sizeSigment + "vh"}
          height={sizeSigment + "vh"}
          margin={margin}
          outline="0.1vh solid black"
          sizeDefualt=""
          background={background}
        />
      ))}
    </div>
  );
};

export default Mesh;
