import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  margin-bottom: 50px;

  border-radius: 90px;

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.gradients.primaryGradient};
    border-radius: 10px;
    transition: opacity 0.2s;
    opacity: 0;

    &:hover {
      background: ${(props) => props.theme.gradients.primaryGradient};
      box-shadow: 0px 0px 15px 10px rgba(80, 78, 78, 1);
      opacity: 0.2;
    }
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

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
