import styled from "styled-components";

export const MsgContainer = styled.div`
  background-color: rgba(0, 0, 255, 0.3);
  height: fit-content;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  max-width: 90%;
  width: fit-content;
  gap: 0.2rem;
  padding: 0.3rem 1rem;

  p:nth-child(1),
  span {
    font-size: 0.6rem;
    color: #666;
  }

  span {
    align-self: flex-end;
    color: #666;
  }

  &.me {
    background-color: rgba(0, 255, 0, 0.3);
    align-self: flex-end;
  }
`;
