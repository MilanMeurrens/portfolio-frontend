import styled from "styled-components";

export const Container = styled.div`
  padding: 55px 0;

  .divider {
    width: 90px;
    height: 8px;
    border-radius: 90px;
    background: ${(props) => props.theme.gradients.primaryGradient};
  }
`;
