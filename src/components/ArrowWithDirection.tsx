import { black } from "../assets/colors";

interface IArrowWithDirection {
  direction?: string;
  size?: number;
}

const ArrowWithDirection = ({ direction, size }: IArrowWithDirection) => {
  const getDegree = (direction?: string): number => {
    switch (direction) {
      case "2":
      case "right":
        return 315;
      case "3":
      case "bottom":
        return 45;
      case "4":
      case "left":
        return 135;
      case "1":
      case "top":
      default:
        return 225;
    }
  };
  return (
    <div
      style={{
        transform: `rotate(${getDegree(direction)}deg)`,
        width: `${size || 1}vw`,
        height: `${size || 1}vw`,
        border: `0.1vw solid ${black}`,
        borderLeft: "0vw",
        borderTop: "0vw",
        background: "none",
      }}
    ></div>
  );
};

export default ArrowWithDirection;
