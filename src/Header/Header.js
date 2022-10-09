import React, { useState } from "react";

import menu from "../images/menu.png";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import close from "../images/close.png";
import styled from "styled-components";

function Header() {
  const [open, setOpen] = useState({});

  const NavbarItems = styled.div``;
  const Item = styled.button``;
  const Cart = styled.img``;
  const CloseButton = styled.div``;
  const CloseImage = styled.img``;
  const BrandLogoButton = styled.button``;

  const Container = styled.div`
    flex-direction: column;
    background-color: white;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    padding-top: 27px;
    padding-left: 50px;
    padding-right: 30vw;
    box-shadow: 2px 0px 25px 0px rgba(0, 0, 0, 0.75);
    transform: translate3d(-100vw, 0, 0);
    transition: all 0.5s ease;

    @media (min-width: 768px) {
      padding-top: 47px;
      padding-left: 10px;
      padding-right: 10px;
      height: 27px;
      display: flex;
      align-items: center;
      flex-direction: row;
      background-color: transparent;
      position: relative;
      box-shadow: none;
      transform: translate3d(0vw, 0, 0);
    }
    ${BrandLogoButton} {
      cursor: pointer;
      margin-bottom: 24px;
      background-color: transparent;
      border: none;
      @media (min-width: 768px) {
        margin-right: 170px;
        margin-bottom: 0px;
      }
    }

    ${NavbarItems} {
      justify-content: space-between;
      display: flex;
      flex-direction: column;
      @media (min-width: 768px) {
        flex-direction: row;
        width: 300px;
      }
      ${Item} {
        color: #333;
        text-decoration: none;
        line-height: 27px;
        font-size: 14px;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        margin-bottom: 24px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        @media (min-width: 768px) {
          font-size: 14px;
          flex-direction: row;
          margin-bottom: 0px;
        }
      }
    }
    ${Cart} {
      cursor: pointer;
      margin-right: auto;
      @media (min-width: 768px) {
        margin-right: 0px;
        margin-left: auto;
        display: flex;
      }
    }
    ${CloseButton} {
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (min-width: 768px) {
        display: none;
      }
      ${CloseImage} {
        width: 25px;
        height: 25px;
      }
    }
  `;

  const MenuImage = styled.img``;

  const MenuButton = styled.div`
    cursor: pointer;
    position: absolute;
    top: 30px;
    left: 30px;
    width: 50px;
    height: 50px;
    @media (min-width: 768px) {
        display: none;
      }
    ${MenuImage} {
      width: 35px;
      height: 35px;
    }
  `;

  return (
    <>
      {/* Responsive Menu Open Button */}
      <MenuButton
        onClick={() => setOpen({ transform: "translate3d(0vw, 0, 0)" })}
      >
        <MenuImage src={menu} alt="menu" />
      </MenuButton>

      <Container style={open}>
        {/* Brand Logo */}
        <BrandLogoButton>
          <img src={logo} alt="logo" />
        </BrandLogoButton>

        {/* Navbar Items */}
        <NavbarItems>
          <Item>Breakfast</Item>
          <Item>Lunch</Item>
          <Item>Dinner</Item>
        </NavbarItems>

        {/* Cart Button */}
        <Cart src={cart} alt="cart" />

        {/* Closed Button */}
        <CloseButton
          onClick={() => setOpen({ transform: "translate3d(-100vw, 0, 0)" })}
        >
          <CloseImage src={close} alt="close" />
        </CloseButton>
      </Container>
    </>
  );
}

export default Header;
