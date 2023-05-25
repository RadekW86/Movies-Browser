import styled, { css } from "styled-components";
import { ReactComponent as ArrowLeft } from "../../images/vectorPrevious.svg";
import { ReactComponent as ArrowRight } from "../../images/vectorNext.svg";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  gap: 12px;
  background-color: transparent;
  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    margin: 32px auto;
    gap: 8px;
  }
`;

export const PageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  line-height: 140%;
  font-size: 14px;
  border-radius: 5px;
  padding: 8px 16px;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    padding: 7px 12px;
    gap: 4px;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey};
    cursor: default;
    transform: none;
  }
`;

export const Pages = styled.div`
  display: flex;
  gap: 8px;
  padding: 0px 12px;
  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 2px;
    padding: 0px;
  }
`;

export const PageText = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.darkerGray};
  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 10px;
    gap: 2px;
  }
`;

export const PageCount = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 10px;
  }
`;

export const StyledSpan = styled.span`
  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    display: none;
  }
`;

export const ArrowWrapper = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    display: flex;
  }
`;

const arrowStyles = css`
  ${({ disabled }) =>
    disabled &&
    css`
      path {
        fill: ${({ theme }) => theme.colors.darkerGray};
      }
    `};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    width: 5px;
    height: 8px;
  }
`;

export const StyledArrowLeft = styled(ArrowLeft)`
  ${arrowStyles}
`;

export const StyledArrowRight = styled(ArrowRight)`
  ${arrowStyles}
`;
