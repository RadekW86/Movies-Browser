import styled, { css } from "styled-components";
import VectorLeft from "../../images/vectorPrevious.svg";
import VectorLeftBlue from "../../images/vectorPreviousBlue.svg";
import VectorRight from "../../images/vectorNext.svg";
import VectorRightBlue from "../../images/vectorNextBlue.svg";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.lightgray};
  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    margin: 32px auto;
    gap: 8px;
  }
`;
export const PageButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};
  line-height: 20px;
  font-size: 14px;
  max-width: 106px;
  min-width: 29px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  &:active {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    height: 23px;
    background-size: 5px 8px;
  }
  ${({ isFirst }) =>
    isFirst &&
    css`
      padding: 8px 16px 8px 32px;
      background-image: url(${VectorLeft});
      background-position: 16px center;
      background-repeat: no-repeat;
      &:active {
        background-image: url(${VectorLeftBlue}), url(${VectorLeftBlue});
        color: ${({ theme }) => theme.colors.mineshaft};
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        background-image: url(${VectorLeft}), url(${VectorLeft});
        background-position: 12px center, right 12px center;
        background-repeat: no-repeat;
        padding: 8px 12px;
        width: 38px;
      }
    `}
  ${({ isPrevious }) =>
    isPrevious &&
    css`
      padding: 8px 16px 8px 32px;
      background-image: url(${VectorLeft});
      background-position: 16px center;
      background-repeat: no-repeat;
      &:active {
        background-image: url(${VectorLeftBlue});
        color: ${({ theme }) => theme.colors.mineshaft};
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        background-image: url(${VectorLeft});
        background-position: center;
        background-repeat: no-repeat;
        padding: 8px 12px;
      }
    `}
  ${({ isNext }) =>
    isNext &&
    css`
      padding: 8px 32px 8px 16px;
      background-image: url(${VectorRight});
      background-position: right 16px center;
      background-repeat: no-repeat;
      &:active {
        background-image: url(${VectorRightBlue});
        color: ${({ theme }) => theme.colors.mineshaft};
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        background-image: url(${VectorRight});
        background-position: center;
        background-repeat: no-repeat;
        padding: 8px 12px;
      }
    `}
  ${({ isLast }) =>
    isLast &&
    css`
      padding: 8px 32px 8px 16px;
      background-image: url(${VectorRight});
      background-position: right 16px center;
      background-repeat: no-repeat;
      &:active {
        background-image: url(${VectorRightBlue}), url(${VectorRightBlue});
        color: ${({ theme }) => theme.colors.mineshaft};
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        background-image: url(${VectorRight}), url(${VectorRight});
        background-position: 12px center, right 12px center;
        background-repeat: no-repeat;
        padding: 8px 12px;
        width: 38px;
      }
    `}
`;
export const Pages = styled.div`
  display: flex;
  gap: 8px;
  padding: 0px 12px 0px 12px;
  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 2px;
    padding: 0px;
  }
`;
export const PageText = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 24px;
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
