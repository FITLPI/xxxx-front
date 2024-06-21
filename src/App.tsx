import MainPage from "./psges/MainPage";
import { useAttachAccessToken } from "./share/hooks/useAttachAccessToken";
import { useYandexIdInfo } from "./share/hooks/useYandexIdInfo";
import Carousel from "./widgets/Carousel";

function App() {
  useAttachAccessToken();
  useYandexIdInfo();

  return (
    <Carousel>
      <MainPage />
    </Carousel>
  );
}

export default App;
