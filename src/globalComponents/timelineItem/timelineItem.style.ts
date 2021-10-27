import styled from "styled-components";

const POINT_DIAMETER = "26px";
const LINE_WIDTH = "6px";
const WIDTH = "480px";
const SPACING = "80px";

export const Container = styled.div`
  position: relative;
  width: ${WIDTH};
  padding-right: ${SPACING};
  padding-bottom: 90px;

  .content {
    background: ${(props) => props.theme.colors.backgroundMiddle};
    padding: 20px 25px;

    /* opacity: 0.4; */
    box-shadow: 0px 0px 10px 6px rgba(56, 71, 101, 0.5);

    .title {
      color: ${(props) => props.theme.colors.text};
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 15px;
    }

    .description {
      color: ${(props) => props.theme.colors.textTransparent};
      font-size: 16px;
      line-height: 1.5;
      text-align: justify;
    }
  }

  .date {
    position: absolute;
    left: calc(${WIDTH} + ${SPACING});
  }

  .line {
    background: ${(props) => props.theme.gradients.primaryGradientVertical};
    width: ${LINE_WIDTH};
    height: calc(100%);

    position: absolute;
    left: calc(${WIDTH} - ${LINE_WIDTH} / 2);
    top: 0;
    border-radius: 90px;
  }

  .point {
    background: ${(props) => props.theme.gradients.primaryGradient};
    width: 26px;
    height: 26px;

    position: absolute;
    left: calc(${WIDTH} - (${POINT_DIAMETER} / 2));
    top: calc(-${POINT_DIAMETER} / 2);
    border-radius: 90px;
  }
`;
