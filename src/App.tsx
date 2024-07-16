import MainPage from "./psges/MainPage";
import { useAttachAccessToken } from "./share/hooks/useAttachAccessToken";
import { useYandexIdInfo } from "./share/hooks/useYandexIdInfo";
import Carousel from "./widgets/Carousel";
import "./App.css";

function App() {
  useAttachAccessToken();
  useYandexIdInfo();

  return (
    <div style={{ width: "100wh", height: "100vh", background: "#fafafa" }}>
      <MainPage />
    </div>
  );
}

export default App;
