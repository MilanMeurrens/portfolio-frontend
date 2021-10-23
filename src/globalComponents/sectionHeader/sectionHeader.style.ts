import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 70px;
  max-width: 657px;

  @media ${(props) => props.theme.breakpoints.sm} {
    /* text-align: center; */
  }

  .title {
    font-size: 40px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
    margin-bottom: 15px;
  }

  .text {
    font-size: 20px;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.textTransparent};
  }
`;
