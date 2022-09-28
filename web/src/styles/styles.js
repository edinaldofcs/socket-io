import styled from "styled-components";

export const MainContext = styled.main`
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  position: relative;

  .login {
    width: 20rem;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    border-radius: 0.4rem;
    box-shadow: 1px 1px 5px 1px #333;
    background-color: #fff;

    button {
      color: #fff;
      border: 1px solid #999;
      padding: 8px 12px;
      cursor: pointer;
      transition: 0.5s all;
      border-radius: 999px;
      background-color: #222;

      &:hover {
        background-color: #444;
      }
    }
  }
`;

export const HeaderContext = styled.header`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #222;

  div {
    color: #fff;
  }

  ul {
    color: #fff;
    border: 1px solid #999;
    padding: 8px 12px;
    cursor: pointer;
    transition: 0.5s all;
    border-radius: 999px;

    &:hover {
      background-color: #444;
    }
  }
`;

export const FooterContext = styled.footer`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  color: #fff;
`;
