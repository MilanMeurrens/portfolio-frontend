import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.div`
  font-size: 30px;
  font-weight: bold;
  word-wrap: break-word;
`;

type SidebarType = {
  hidden?: boolean; ///Passing Optional Props
};

export const Sidebar = styled.div<SidebarType>`
  flex: 1;
  display: flex;
  justify-content: space-between;
  transition: right 0.7s;

  &[data-hidden="true"] {
    right: -200px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    background: ${(props) => props.theme.colors.backgroundMiddle};
    flex-direction: column;
    justify-content: start;
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    width: 200px;
    height: 100vh;
  }
`;

export const OpenButton = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.md} {
    /* width: 60px;
    height: 60px; */
    top: 0px;
    right: 0px;
    display: unset;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const OpenIcon = styled.img`
  &:hover {
    /* width: 38px; */
    cursor: pointer;
  }

  width: 35px;
`;

export const CloseButton = styled.div`
  display: none;
  @media ${(props) => props.theme.breakpoints.md} {
    display: unset;
    position: absolute;
    width: 80px;
    height: 80px;
    top: 0px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CloseIcon = styled.img`
  width: 45px;

  &:hover {
    width: 48px;
    cursor: pointer;
  }
`;

export const NavLinks = styled.div`
  max-width: 400px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin: auto;

  @media ${(props) => props.theme.breakpoints.md} {
    background: ${(props) => props.theme.colors.backgroundMiddle};
    flex-direction: column;
    align-items: start;
    width: unset;
    padding: 80px 30px;
    flex: unset;
    margin: 0;
  }
`;

export const NavLink = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.colors.textTransparent};

  &:hover {
    cursor: pointer;
    /* background: ${(props) => props.theme.gradients.primaryGradient};
    background-clip: text;
    -webkit-background-clip: text;
    color: rgba(0, 0, 0, 0); */
    font-weight: bold;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding-top: 20px;
    color: ${(props) => props.theme.colors.text};

    &:hover {
      font-weight: bold;
    }
  }
`;

export const SocialLinks = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    align-items: start;
    justify-content: start;
    width: unset;
    padding: 0 30px;
  }
`;

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    margin-right: 20px;
  }
`;

export const Icon = styled.img`
  width: 90%;
  &:hover {
    width: 100%;
    color: rgba(0, 0, 0, 0);
    /* font-weight: bold; */
  }
`;
