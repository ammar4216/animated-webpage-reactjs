import React from "react";
import styled from "styled-components";
import Button from "./Button/Button";
import FoodImage from "./FoodImages/FoodImage";
import data from "../Data/data";
import spin from "../images/spin.png";

import { useStore } from "../Store/store";

function ImageSpinner() {
  const index = useStore((state) => state.index);

  const SpinImage = styled.img``;

  const Spinner = styled.div`
    background-color: #eaffe2;
    position: absolute;
    width: 85vw;
    height: 85vw;
    right: 5vw;
    top: -40vw;
    @media (min-width: 768px) {
      width: 85vw;
      height: 85vw;
      right: -20vw;
      top: -40vw;

    }
    @media (min-width: 992px) {
      right: -10vw;
      top: -50vw;

    }

    z-index: -1;
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    overflow: hidden;
    justify-content: center;
    align-items: end;
    display: flex;

    -webkit-transition: background-color 0.5s ease-in-out;
    -moz-transition: background-color 0.5s ease-in-out;
    -o-transition: background-color 0.5s ease-in-out;
    transition: background-color 0.5s ease-in-out;

    ${SpinImage} {
      width: 90vw;
      height: 90vw;
      position: absolute;
      top: 35vw;

      @media (min-width: 768px) {
        width: 56vw;
        height: 56vw;
        top: 58vw;
      }
      @media (min-width: 992px) {
        width: 45vw;
        height: 45vw;
        top: 63vw;
      }
      @media (min-width: 1200px) {
        width: 45vw;
        height: 45vw;
      }

      -webkit-transition: 300ms linear all;
      -moz-transition: 300ms linear all;
      -o-transition: 300ms linear all;
      transition: 300ms linear all;
      -ms-transition: 300ms linear all;
    }
  `;
  return (
    <>
      <Spinner
        style={{
          backgroundColor: data[((index % 5) + 5) % 5].backgroundColor,
        }}
      >
        <SpinImage
          src={spin}
          alt=""
          loading="lazy"
          style={{ transform: `rotate(${index * 36}deg)` }}
        />
      </Spinner>
      <Button />
      <FoodImage />
    </>
  );
}

export default ImageSpinner;
