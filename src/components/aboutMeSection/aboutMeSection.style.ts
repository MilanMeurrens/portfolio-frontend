import styled from "styled-components";

export const Container = styled.div`
  .timeline {
    width: calc(480px * 2);
    margin-left: auto;
    margin-right: auto;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    .timeline {
      width: calc(480px + (2 * 80px));
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    .timeline {
      width: 480px;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    .timeline {
      width: 280px;
    }
  }
`;
