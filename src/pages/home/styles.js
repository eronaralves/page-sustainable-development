import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

`

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding: 20px;

  h1 {
    width: 100%;
    max-width: 48.5rem;
    margin-bottom: 36px;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  p {
    max-width: 48.5rem;
    margin-bottom: 40px;
  }
`

export const ContainerGoals = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  @media(max-width: 940px) {
    justify-content: space-evenly;
  }
`

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