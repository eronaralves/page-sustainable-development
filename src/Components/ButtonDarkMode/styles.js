import styled from "styled-components"

export const DarkMode = styled.button`
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;


  display: flex;
  align-items: center;

  position: fixed;
  right: 10px;
  bottom: 10px;
  cursor: pointer;

  padding-inline: 20px;
  border-radius: 25px;
  border: none;
  z-index: 2;

  background-color: ${({ darkMode }) =>
    darkMode ? "#E1E1E6" : "#121214"};
  color: ${({ darkMode }) =>
    darkMode ? "#121214" : "#E1E1E6"};

  &:hover {

    & > span {
      max-width: 100px;
      transition: all .6s linear;
    }
  }

`


export const Span = styled.span`
  max-width: 0;
  overflow: hidden;

  span {
    margin-left: 12px;
  }
  
`