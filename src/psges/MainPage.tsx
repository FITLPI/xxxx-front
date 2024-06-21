import { useAppSelector } from "../share/hooks/useAppSelector";

const MainPage = () => {
  const accessToken = useAppSelector((state) => state.accessToken.accessToken);
  const yandexIdInfo = useAppSelector((state) => state.yndexIdInfo.yndexIdInfo);

  return (
    <div>
      <h1>Ваш токен {accessToken}</h1>
      <h1>Ваш id в яндексе {yandexIdInfo.id}</h1>
    </div>
  );
};

export default MainPage;
