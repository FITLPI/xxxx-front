import { useAppSelector } from "../share/hooks/useAppSelector";

const MainPage = () => {
  const accessToken = useAppSelector(
    (state: any) => state.accessToken.accessToken
  );
  return (
    <div>
      <h1>Ваш токен</h1>
      <h1>{accessToken}</h1>
    </div>
  );
};

export default MainPage;
