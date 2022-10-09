import React from "react";
import data from "../../src/Data/data";

import { useStore } from "../Store/store.js";
import styled from "styled-components";

function Info() {
  const PriceTag = styled.span``;
  const NameTag = styled.span``;
  const InfoTag = styled.p``;
  const OrderButton = styled.button``;
  const ButtonText = styled.span``;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 68vw;
    font-family: "Poppins", sans-serif;
    justify-content: center;
    align-items: center;
    text-align: justify;
    @media (min-width: 768px) {
      margin-top: 50vw;
    }
    @media (min-width: 992px) {
      margin-top: 200px;
      width: 28vw;
      justify-content: center;
      align-items: flex-start;
      text-align: initial;
    }
    ${PriceTag} {
      font-size: 44px;
      font-weight: bolder;
      color: #54bf29;
    }
    ${NameTag} {
      color: #333333;
      font-size: 36px;
      line-height: 50px;
      font-weight: 500;
      margin: 10px 15px 15px 0px;
    }
    ${InfoTag} {
      font-size: 13px;
    }
    ${OrderButton} {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 163px;
      height: 48px;
      background-color: #54bf29;
      margin-top: 28px;
      cursor: pointer;
      border: none;

      border-radius: 69px;
      -webkit-border-radius: 69px;
      -moz-border-radius: 69px;
      -ms-border-radius: 69px;
      -o-border-radius: 69px;
      ${ButtonText} {
        color: white;
        font-size: 13px;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  `;

  const index = useStore((state) => state.index);
  const indexModule = ((index % 5) + 5) % 5;

  return (
    <Container>
      <PriceTag
        style={{
          color:
            data[indexModule].textColor || data[indexModule].backgroundColor,
        }}
      >
        ${data[indexModule].price}
      </PriceTag>
      <NameTag>{data[indexModule].name}</NameTag>
      <InfoTag>{data[indexModule].information}</InfoTag>
      <OrderButton
        style={{
          backgroundColor: data[indexModule].textColor,
          boxShadow: `0px 4px 14px 1px ${data[indexModule].textColor}`,
          MozBoxShadow: `0px 4px 14px 1px ${data[indexModule].textColor}`,
          WebkitBoxShadow: `0px 4px 14px 1px ${data[indexModule].textColor}`,
        }}
        onClick={() => {}}
      >
        <ButtonText>Order Now</ButtonText>
      </OrderButton>
    </Container>
  );
}

export default Info;
