import ArrowsContainer from "./ArrowsContainer";

interface ICarousel {
  children?: React.ReactNode;
  vertical?: boolean;
}

const Carousel = ({ children, vertical }: ICarousel) => {
  return (
    <ArrowsContainer isVertical={vertical || false}>
      <div>{children}</div>
    </ArrowsContainer>
  );
};

export default Carousel;
