import styled from "styled-components";

export const Container = styled.div`
  background-color: "#fff";
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.center ? "center" : "flex-start")};
  justify-content: center;
  margin-top: ${(props) => (props.center ? "0" : "10rem")};
`;

export const OuterWrapper = styled.div`
  margin-inline: auto;
  width: 80%;
  display: flex;
  align-items: flex-start;

  @media (max-width: 767px) {
    width: 90%;
    align-items: center;
  }
`;
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isFull ? "100%" : "50% ")};

  @media (max-width: 767px) {
    width: 100%;
  }
`;
