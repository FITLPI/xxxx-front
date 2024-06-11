import MainPage from "./psges/MainPage";
import { useAttachAccessToken } from "./share/hooks/useAttachAccessToken";

function App() {
  useAttachAccessToken();
  return <MainPage />;
}

export default App;
