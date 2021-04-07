import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 20px;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 15px;
  font-weight: 400;
  margin-right: 10px;
`;

export const SearchInpth = styled.input`
  width: 400px;
  padding: 15px;
  margin-left: 15px;
  border-radius: 5px;
  outline: none;
  margin-right: 10px;
  font-size: 14px;
  border: 1px solid #ccc;

  &:focus {
    border: 1px solid lightblue;
  }
`;

export const SearchBtn = styled.button`
  border-radius: 5px;
  border: 1px solid lightblue;
  background-color: lightblue;
  color: #fff;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  padding: 15px;
`;

export const Links = styled.div``;

export const Link = styled.a`
  cursor: pointer;
  margin-right: 13px;
  font-size: 16px;
  text-decoration: none;
  color: black;
  &:last-child {
    margin-right: 0;
  }
  &:hover,
  &:focus {
    font-size: 16px;
    color: lightblue;
    outline: none;
    text-decoration: underline;
  }
`;
