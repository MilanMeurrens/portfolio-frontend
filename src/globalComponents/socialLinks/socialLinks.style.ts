import styled from "styled-components";

export const Container = styled.div`
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
