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

  @media ${(props) => props.theme.breakpoints.sm} {
    /* text-align: center; */
  }

  img {
    width: 400px;
    height: 230px;
    object-fit: cover;
  }

  .content {
    height: calc(100% - 230px);
    padding: 25px 50px;
    display: flex;
    flex-direction: column;

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

// <img src={project.header_img} alt={project.title} />
// <div className="title">{project.title}</div>
// <div className="divider-blue" />
// <div className="description">{project.description_short}</div>
// <div className="divider-purple" />
// <div className="subtitle">Stack</div>
// {project.tags.map((tag) => (
//   <div className="tag">{tag}</div>
// ))}
// <a href="#" className="details">
//   See details
// </a>
