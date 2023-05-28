import styled from "styled-components";

export const MovieGenresWrapper = styled.div`
  margin: 0 0 30px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    flex-wrap: wrap;
    gap: 8px;
    margin: 0 16px 0 0;
  }
`;

export const MovieGenre = styled.div`
  padding: 8px 16px;
  border-radius: 5px;
  align-items: center;
  font-size: 14px;
  display: flex;
  gap: 8px;
  height: 36px;
  border: none;
  background: ${({ theme }) => theme.colors.grey};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    padding: 4px 8px;
    height: 24px;
    font-size: 10px;
  }
`;
