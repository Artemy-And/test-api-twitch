import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  flex: 0 0 32%;
  height: 200px;
  margin-bottom: 65px;
  margin-right: calc(900px / 100 * 2);
  position: relative;
  box-shadow: 0 0 10px rgba(0,0,0,10);
  &:nth-child(3n) {
    margin-right: 0;
  }
`;

export const Link = styled.a``;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 100%;
  opacity: 0;
  &:hover {
    transition: 0.3s;
    opacity: 1;
  }
`;

export const AboutFilm = styled.div`
  width: 100%;
  background-color: #000;
  height: 100%;
  opacity: 0;
  z-index: 20;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }
`;

export const FilmInfo = styled.h3`
  font-size: 14px;
  color: #fff;
`;

export const CustomsButton = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #fff;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`;

export const AddButton = styled(Button)`
  color: #ADD8E6;
  border: none;
  margin-right: 5px;
  &:hover,
  &:focus {
    transition: 0.2s;
    color: #fff;
    background-color: #ADD8E6;
  }
`;

export const DeleteButton = styled(Button)`
  color: blueviolet;
  border: none;
  &:hover,
  &:focus {
    transition: 0.2s;
    color: #fff;
    background-color: blueviolet;
  }
`;
