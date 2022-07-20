import styled from "styled-components"

export const LinkRouter = styled.div`
  width: 160px;
  height: 160px;
  padding: 8px 5px;
  z-index: 2;

  background-color: ${props => `${props.background}`};

  img {
    width: 100px;
    height: auto;
    display: flex;
    margin-inline: auto;
  }
`

export const BoxTitleGoals = styled.div`
  display: flex;
  gap: 8px;

  color: #fff;

  img {
    color: #fff;
  }
  
  strong {
    font-size: 38px;
    font-weight: 700;
    height: auto;
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
  }
`