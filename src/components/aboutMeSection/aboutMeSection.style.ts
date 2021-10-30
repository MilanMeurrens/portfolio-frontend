import styled from "styled-components";

export const Container = styled.div`
  .timeline {
    width: calc(480px * 2);
    margin-left: auto;
    margin-right: auto;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
