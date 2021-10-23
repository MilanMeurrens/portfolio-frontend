import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  .footer-content {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${(props) => props.theme.breakpoints.md} {
      flex-direction: column;
      height: 160px;
      padding: 25px 0;
      text-align: center;
    }
  }

  .footer-text {
    font-size: 18px;
    color: ${(props) => props.theme.colors.textTransparent};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.colors.backgroundMiddle};
  margin-bottom: 10px;
`;
