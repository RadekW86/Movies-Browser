import styled from "styled-components";
import SearchImage from "../../images/search.svg";

export const StyledInput = styled.input`
  height: 48px;
  width: 432px;
  border-radius: 33px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-image: url(${SearchImage});
  background-repeat: no-repeat;
  background-position: 27px center;
  padding-left: 63px;
  align-self: center;
  font-size: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.darkergray};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    width: 288px;
    height: 44px;
    padding-left: 40px;
    font-size: 13px;
    background-position: 18px center;
    background-size: 5%;
  }
`;
