import styled from "styled-components";

export const Container = styled.div`
  margin-top: 60px;

  .banner-left {
    max-width: 657px;
    min-height: 460px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 55px 0;

    @media ${(props) => props.theme.breakpoints.sm} {
      text-align: center;
      align-items: center;
    }
  }

  .title-container {
    position: relative;
    margin-bottom: 60px;

    .title {
      position: relative;
      font-size: 55px;
      font-weight: bold;
      line-height: 1.15;
    }

    .line {
      width: 250px;
      position: absolute;
      right: -5px;
      bottom: -15px;
    }
  }

  .text {
    font-size: 22px;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.textTransparent};
    margin-bottom: 50px;
  }

  .btn-contact {
    width: 170px;
    height: 50px;
    border: 0px;
    border-radius: 90px;
    background: ${(props) => props.theme.gradients.primaryGradient};
    font-size: 22px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
  }

  .animation {
    pointer-events: none;
    width: 900px;
    position: absolute;
    overflow: visible;
    bottom: -250px;
    right: -130px;
    opacity: 0.5;

    @media ${(props) => props.theme.breakpoints.lg} {
      width: 650px;
      bottom: -130px;
    }
    @media ${(props) => props.theme.breakpoints.md} {
      opacity: 0.3;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      /* opacity: 0.3; */
      right: unset;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
