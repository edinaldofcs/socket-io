import styled from "styled-components";

export const SuportContext = styled.div`
  display: flex;

  div {
    width: 30%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    border-right: 0.2px solid #ccc;

    button {
      background-color: #fff;
      border: 0;
      border-top: 0.5px solid #ccc;
      border-bottom: 0.5px solid #ccc;
      padding: 1rem 0;
      font-size: 1rem;
      transition: 0.2s all;

      &:hover {
        background-color: rgba(230, 230, 230, 1);
      }
    }
  }

  main {
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    div:nth-child(1) {
      width: 100%;
      height: 10vh;
      padding-left: 1rem;
    }

    div:nth-child(2) {
      height: 80vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
      gap: 0.5rem;
    }

    form {
      width: 100%;
      height: 10vh;
      border-top: 0.5px solid #ccc;
      display: flex;
      justify-content: flex-end;
      padding: 0.5rem 1rem;
      gap: 1rem;

      button {
        padding: 0.5rem 1rem;
        background-color: #000;
        color: #fff;
        border: 0;
      }
    }
  }
`;
