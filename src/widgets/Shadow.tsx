import { useState } from "react";
import ShadowSide from "../components/cube/ShadowSide";
import { rotates } from "../components/cube/ContextCube";
import { ShadowAction } from "../share/types";

const Shadow = () => {
  const [isEnable, setIsEnable] = useState<boolean>(true);

  const blockAnimate = (s: number) => {
    setIsEnable(false);
    setTimeout(() => setIsEnable(true), s * 1000);
  };

  return (
    <>
      {rotates.map(({ rotateX, rotateY, shadowAction }, k: number) => (
        <div
          key={k}
          style={{
            width: "calc(1*var(--size))",
            height: "calc(1*var(--size))",
            position: "absolute",
            transformStyle: "preserve-3d",
            display: "flex",
            flexWrap: "wrap",
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          }}
        >
          {shadowAction.map((actions: ShadowAction, i: number) => (
            <ShadowSide
              actions={actions}
              k={k}
              key={k * 10 + i}
              isEnable={isEnable}
              blockAnimate={blockAnimate}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Shadow;
