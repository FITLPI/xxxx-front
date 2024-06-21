import { useState } from "react";
import CenterFullScreen from "../components/CenterFullScreen";
import ArrowsContainer from "../components/ArrowsContainer";

interface ICarousel {
  children?: React.ReactNode;
  vertical?: boolean;
}

const Carousel = ({ children, vertical }: ICarousel) => {
  const [isVertical, setIsVertical] = useState<boolean>(vertical || true);
  return (
    <CenterFullScreen background="white">
      <ArrowsContainer isVertical={true}>
        <div>{children}</div>
      </ArrowsContainer>
    </CenterFullScreen>
  );
};

export default Carousel;
