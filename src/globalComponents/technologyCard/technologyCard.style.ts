import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-bottom: 50px;
  border-radius: 90px;

  /* display: flex;
  justify-content: center; */

  @media ${(props) => props.theme.breakpoints.sm} {
    height: unset;
    margin-bottom: 20px;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.backgroundMiddle};
    border-radius: 10px;
    transition: opacity 0.2s;
    opacity: 0;

    &:hover {
      background: ${(props) => props.theme.colors.backgroundMiddle};
      box-shadow: 0px 0px 15px 9px hsl(220, 29%, 31%, 60%);
      opacity: 1;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      &:hover {
        background: unset;
        box-shadow: unset;
        opacity: unset;
      }
    }
  }

  .content {
    position: absolute;
    /* width: 100%;
    height: 100%; */
    max-width: 150px;
    pointer-events: none;
    padding: 20px 0px;
    margin-left: 80px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media ${(props) => props.theme.breakpoints.sm} {
      position: unset;
      margin-left: unset;
      margin: 0 auto;
    }

    img {
      margin-bottom: 7px;
    }

    .title {
      color: ${(props) => props.theme.colors.text};
      font-size: 20px;
      font-weight: bold;
      margin-top: 5px;
      margin-bottom: 30px;
    }

    .item {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colors.textTransparent};
      margin-bottom: 5px;

      .bullet {
        width: 5px;
        height: 5px;
        background: ${(props) => props.theme.colors.textTransparent};
        border-radius: 90px;
        margin-right: 10px;
      }

      .item {
        font-size: 16px;
      }
    }
  }
`;
