import styled from "styled-components";

export const ChatContent = styled.form`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  padding: 1.2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 18rem;
  height: 17rem;
  transition: 0.4s all;
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: rgba(240,240,240,1);
  

  &.animar {
    height: 1px;
    opacity: 0;    
  }

  svg {
    position: absolute;
    top: 0;
    left: 0.5rem;
    cursor: pointer;
  }

  > div:nth-child(1) {
    height: 12rem;
    background-color: #fff;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 0.5rem;
    overflow-y: scroll;
    position: relative;

    .others,
    .me {
      background-color: rgba(0, 0, 255, 0.3);
      height: fit-content;
      font-size: 0.8rem;
      display: flex;
      flex-direction: column;
      max-width: 90%;
      gap: 0.2rem;
      padding: 0.3rem 0.5rem;

      p:nth-child(1),
      span {
        font-size: 0.6rem;
        color: #666;
      }

      span {
        align-self: flex-end;
        color: #666;
      }
    }

    .me {
      background-color: rgba(0, 255, 0, 0.3);
      align-self: flex-end;
    }
  }

  div:nth-child(2) {
    display: flex;
    gap: 0.3rem;
    justify-content: space-between;
    input {
      height: 2rem;
      padding-left: 0.4rem;
    }

    button {
      color: #fff;
      background-color: black;
      border: 0;
      padding: 0 0.4rem;
      transition: 0.5s all;

      &:hover {
        background-color: rgba(0, 0, 0, 0.8);        
      }
    }
  }
`;

export const ChatIcon = styled.div`
  background-color: rgba(0, 130, 0, 1);
  height: 50px;
  width: 3rem;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  overflow: hidden;
  transition: 0.1s all;
  cursor: pointer;
  box-shadow: 0 0 5px 0 green;

  span {
    display: none;
  }

  svg {
    font-size: 2rem;
    color: #fff;
  }

  &:hover {
    width: 11rem;
    span {
      display: block;
    }
  }
`;
