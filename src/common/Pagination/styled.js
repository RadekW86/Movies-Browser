import styled from 'styled-components';
import VectorLeft from "../images/vectorPrevious.svg";
import VectorLeftBlue from "../images/vectorPreviousBlue.svg";
import VectorRight from "../images/vectorNext.svg";
import VectorRightBlue from "../images/vectorNextBlue.svg";

export const PaginationContainer = styled.footer`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 24px; 
position: absolute;
width: 525px; 
left: 698px;
top: 1581px;
background-color: ${({ theme }) => theme.colors.lightgray}; 
`;

export const PageButtonsFirst = styled.button` 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  line-height: 20px;
  font-size: 14px;
  padding: 8px 16px 8px 32px;
  min-width: 60px; 
  height: 36px;
  border-radius: 5px;
  border: none;
  background-image: url(${VectorLeft});
  background-position: 16px center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.gray};  
  margin-right: -12px;

  &:active {
    background-color: ${({ theme }) => theme.colors.lightblue};
    background-image: url(${VectorLeftBlue}); 
    color: ${({ theme }) => theme.colors.mineshaft};
  }

  &:first-child {
    width: 76px;
  }

  &:nth-child(2) {
  width: 106px;
}
`;

export const PageButtonsLast = styled.button` 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  padding: 8px 32px 8px 16px;
  line-height: 20px;
  font-size: 14px;
  min-width: 60px; 
  height: 36px;
  border-radius: 5px;
  border: none;
  background-image: url(${VectorRight});
  background-position: right 16px center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.gray}; 
  margin-right: -12px;

  &:active {
    background-color: ${({ theme }) => theme.colors.lightblue};
    background-image: url(${VectorRightBlue}); 
    color: ${({ theme }) => theme.colors.mineshaft};
  }

  &:first-child {
    width: 76px;
  }

  &:nth-child(2) {
    width: 106px;
    margin-left: -12px;
    margin-right: 0;
  }
`;

export const Pages = styled.div` 
  display: flex;
  align-items: baseline; 
  flex: none;
  order: 0;
  flex-grow: 0;

  & > * {
    margin-right: -7px;
  }

  & > *:last-child {
    margin-right: 0px
  }
`;

export const PageText = styled.span`
  height: 24px;
  font-size: 16px;
  line-height: 150%;
  font-family: 'Poppins', sans-serif;
  font-weight: 400; 
  color: ${({ theme }) => theme.colors.darkergray};
  margin-left: 12px;
`;

export const PageCount = styled.span`
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 150%;
color: ${({ theme }) => theme.colors.black};
`;