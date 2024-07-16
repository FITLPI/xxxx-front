import { useEffect, useState } from "react";
import { getWindowDimensions } from "../helpers";
import { Viewport } from "../types";

export const useViewportSize = () => {
  const [viewport, setViewport] = useState<Viewport>(getWindowDimensions());

  useEffect(() => {
    window.addEventListener("resize", () => setViewport(getWindowDimensions()));
    return () =>
      window.removeEventListener("resize", () =>
        setViewport(getWindowDimensions())
      );
  }, []);
  return viewport;
};
