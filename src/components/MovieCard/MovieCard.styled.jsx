import styled from "styled-components";

export const Card = styled.div`
  width: 310px;
  height: 460px;
  margin: 1.5rem;

  position: relative;
  border-radius: 48px 0;
  overflow: hidden;

  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
  }
`;

export const ImageHolder = styled.div`
  width: 100%;
  height: 100%;
  &:hover {
    height: 100%;
    opacity: 0.8;
  }
  img {
    height: 100%;
    width: 100%;
  }
`;

export const Paragraph = styled.div`
  position: absolute;
  padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
  color: #f9d3b4;
  &:hover{
    background-color: transparent;
    opacity: 1;
  }
`;

export const TextHolder = styled.div`
  z-index: 2;
  background-color: #0a0a0ab9;
  padding: 16px 24px 24px 24px;

  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  &:hover{
    background-color: transparent;
  }
  span {
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #f0f0f0;
  }
  h3 {
    margin-top: 5px;
    font-family: "Roboto Slab", serif;
    color: #f9d3b4;
  }
`;
