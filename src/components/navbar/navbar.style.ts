import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const NavLinks = styled.div`
  width: 400px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLink = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.colors.textTransparent};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const SocialLinks = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconLink = styled.a``;
export const Icon = styled.img``;
