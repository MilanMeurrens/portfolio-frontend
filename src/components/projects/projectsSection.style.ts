import styled from "styled-components";

export const Container = styled.div`
  .project-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
