import React, { useEffect } from "react";
import BtnImage from "../../images/button.svg";
import { useStore } from "../../Store/store.js";
import styled from "styled-components";


function Button() {
  const increaseIndex = useStore((state) => state.inc);
  const decreaseIndex = useStore((state) => state.dec);


  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 37 || e.keyCode === 40) decreaseIndex();
      if (e.keyCode === 38 || e.keyCode === 39) increaseIndex();
    });
    return () => {
      window.removeEventListener("keydown", () => {});
    };
  }, [decreaseIndex, increaseIndex]);

  const SpinButton = styled.div``;

  const Container = styled.div`
    width: 36vw;
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 79vw;
    right: 13vw;
    top: 52vw;
    @media (min-width: 768px) {
      width: 56vw;
      right: 24vw;
      top: 46vw;
    }
    @media (min-width: 992px) {
      width: 42vw;
      right: 11vw;
      top: 39vw;
    }
    ${SpinButton} {
      cursor: pointer;
    }
  `;

  return (
    <Container>
      <SpinButton onClick={decreaseIndex}>
        <img src={BtnImage} alt="button" loading="lazy" />
      </SpinButton>
      <SpinButton onClick={increaseIndex}>
        <img
          src={BtnImage}
          alt="button"
          loading="lazy"
        />
      </SpinButton>
    </Container>
  );
}

export default Button;
