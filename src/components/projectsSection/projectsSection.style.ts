import styled from "styled-components";

export const Container = styled.div`
  .project-cards {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 960px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
  }
  @media ${(props) => props.theme.breakpoints.md} {
    .project-cards {
      padding: 0 50px;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    .project-cards {
      padding: 0 10px;
    }
  }
`;
