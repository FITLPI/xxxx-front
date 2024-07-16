import { useLayoutEffect, useRef } from "react";
import { updateToken } from "../store/accessTokenSlice";
import { useAppDispatch } from "./useAppDispatch";

export const useAttachAccessToken = (): void => {
  const dispatch = useAppDispatch();
  let url = useRef<URL>(new URL(window.location.href));
  useLayoutEffect((): void => {
    const defaultAccessToken =
      import.meta.env.MODE == "production"
        ? import.meta.env.VITE_REACT_DEFAULT_TOKEN
        : import.meta.env.VITE_REACT_MY_TEST_ACCESS_TOKEN;
    const accessToken: string = (url.current.hash || defaultAccessToken)
      .split("&")
      .find((x: string): string => x)
      ?.split("=")
      .pop();
    dispatch(updateToken(accessToken));
  }, []);
};
