import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 750px;
  box-shadow: 0px 0px 10px 6px rgba(80, 78, 78, 0.5);
  transition: box-shadow 0.1s;
  text-align: center;
  margin-bottom: 50px;

  &:hover {
    box-shadow: 0px 0px 15px 10px rgba(80, 78, 78, 0.5);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 500px;
    /* height: 650px; */
    height: unset;
    margin-bottom: 80px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 300px;
    /* height: 700px; */
    margin-bottom: 50px;
  }

  img {
    width: 100%;
    height: calc(100% / 3);
    object-fit: cover;

    @media ${(props) => props.theme.breakpoints.lg} {
      height: 220px;
    }

    @media ${(props) => props.theme.breakpoints.md} {
      /* height: calc(100% / 4); */
    }
  }

  .content {
    height: calc(100% - 100% / 3);
    padding: 25px 50px;
    display: flex;
    flex-direction: column;

    @media ${(props) => props.theme.breakpoints.md} {
      padding: 25px 25px;
      /* height: calc(100% - 100% / 4); */
      height: unset;
    }

    .title {
      font-size: 28px;
      font-weight: 600;
    }

    .divider {
      width: 50px;
      height: 3px;
      border-radius: 90px;
      margin: 20px auto;
    }

    .divider-blue {
      background: ${(props) => props.theme.colors.primary2};
    }

    .divider-purple {
      background: ${(props) => props.theme.colors.primary1};
    }

    .description {
      flex: 1;
      color: ${(props) => props.theme.colors.textTransparent};
      line-height: 1.5;
      text-align: justify;

      @media ${(props) => props.theme.breakpoints.lg} {
        flex: unset;
      }
    }

    .subtitle {
      font-size: 20px;
      font-weight: 600;
    }

    .tags {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      padding: 20px 0;
    }

    .tag-container {
      position: relative;

      .tag-background {
        position: absolute;
        z-index: 10;
        background: ${(props) => props.theme.gradients.primaryGradient};
        opacity: 0.25;
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }

      .tag-text {
        /* position: absolute; */
        padding: 6px 10px;
        font-size: 16px;
        color: ${(props) => props.theme.colors.text};
      }
    }

    .details {
      font-size: 16px;
      border-bottom: 1px solid;
      color: ${(props) => props.theme.colors.textTransparent};
      margin: 0 auto;

      &:hover {
        color: ${(props) => props.theme.colors.text};
      }
    }
  }
`;
