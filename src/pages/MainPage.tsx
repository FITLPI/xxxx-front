import { CSSProperties, useEffect, useState } from "react";
import Center from "../components/Center";
import { useAppSelector } from "../share/hooks/useAppSelector";
import Carousel from "../widgets/Carousel";
import { blackLight, whiteSecond, yellowText } from "../assets/colors";
import RoundedDiv from "../components/RoundedDiv";
import Button from "../components/Button";
import { useViewportSize } from "../share/hooks/useViewportSize";
import RubiksCube from "../widgets/RubiksCube";

const MainPage = () => {
  const yandexIdInfo = useAppSelector((state) => state.yndexIdInfo.yndexIdInfo);
  const [isShow, setIsShow] = useState<boolean>(true);
  const viewport = useViewportSize();

  useEffect(
    () => setIsShow(!(viewport.height < 560 || viewport.height < 560)),
    [viewport]
  );

  return (
    <Carousel vertical={true}>
      <Center height="90vh" display="grid">
        <RoundedDiv background={whiteSecond} padding="2vh 0px">
          <Center display="grid">
            <div style={styleDiv}>
              <h1 style={styleH1}>
                Здравствуй{" "}
                <span style={styleSpan}>{yandexIdInfo.first_name}</span>
              </h1>
            </div>
            {isShow && (
              <div style={styleDiv}>
                <RubiksCube />
              </div>
            )}
            <div style={styleDiv}>
              <h2>
                Ты готов{yandexIdInfo.sex !== "male" && "а"} впустить{" "}
                <span style={styleSpan}>Алису</span>{" "}
                {isShow ? " в свое устройство " : ""} ?
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                background: "none",
                alignItems: "center",
              }}
            >
              <Button onClick={() => console.log("click")}>Нет</Button>
              <Button onClick={() => console.log("click")} isAccent={isShow}>
                Да
              </Button>
            </div>
          </Center>
        </RoundedDiv>
      </Center>
    </Carousel>
  );
};

export default MainPage;

const styleSpan: CSSProperties = {
  color: yellowText,
};

const styleH1: CSSProperties = {
  color: blackLight,
};

const styleDiv: CSSProperties = {
  background: "none",
  margin: "auto",
};
