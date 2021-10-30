import styled from "styled-components";

const POINT_DIAMETER = "26px";
const LINE_WIDTH = "6px";
const WIDTH = "480px";
const SPACING = "80px";

// Hover Animation
const ANIMATION_TIME = "0.6s";
const ANIMATION_LENGTH = "15px";

export const Container = styled.div`
  position: relative;
  width: ${WIDTH};
  padding-right: ${SPACING};
  padding-bottom: 90px;
  transition: padding-right ${ANIMATION_TIME};

  .content {
    background: ${(props) => props.theme.colors.backgroundMiddle};
    padding: 20px 25px;
    transition: all ${ANIMATION_TIME};
    border-radius: 10px;
    width: calc(${WIDTH} - ${SPACING});
    position: absolute;

    /* opacity: 0.4; */
    box-shadow: 0px 0px 5px 3px rgba(56, 71, 101, 0.5);

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

    &:nth-child(3) {
      visibility: hidden;
      position: unset;
    }
  }

  .date {
    position: absolute;
    transition: all ${ANIMATION_TIME};
    color: ${(props) => props.theme.colors.textTransparent};
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
    width: ${POINT_DIAMETER};
    height: ${POINT_DIAMETER};

    position: absolute;
    left: calc(${WIDTH} - (${POINT_DIAMETER} / 2));
    top: calc(-${POINT_DIAMETER} / 2);
    border-radius: 90px;
  }

  &:nth-child(even) {
    .content {
      left: calc(${WIDTH} + ${SPACING});
    }

    .date {
      text-align: right;
      right: ${SPACING};
    }
  }

  &:nth-child(odd) {
    .content {
      left: 0;
    }

    .date {
      left: calc(${WIDTH} + ${SPACING});
    }
  }

  &:hover {
    .date {
      font-size: 18px;
      color: ${(props) => props.theme.colors.text};
    }

    .content {
      box-shadow: 0px 0px 15px 9px hsl(220, 29%, 31%, 60%);
    }
  }

  &:hover:nth-child(even) {
    .date {
      right: calc(${SPACING} - ${ANIMATION_LENGTH});
    }

    .content {
      left: calc(${WIDTH} + ${SPACING} - ${ANIMATION_LENGTH});
    }
  }

  &:hover:nth-child(odd) {
    .date {
      left: calc(${WIDTH} + ${SPACING} - ${ANIMATION_LENGTH});
    }

    .content {
      left: ${ANIMATION_LENGTH};
    }
  }
`;
