import styled from 'styled-components';
import VectorLeft from "../images/vectorPrevious.svg";

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
`;

export const Pages = styled.div` 
  display: flex;
  align-items: baseline;
  gap: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
`; 

export const PageButton = styled.button` 
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  min-width: 75px; //change to 60px after adding svg icons
  height: 36px;
  border-radius: 5px;
  border: none;
  background-image: url(${VectorLeft});
  background-position: left center;
  background-repeat: no-repeat;
  //background-color: hsla(230, 29%, 92%, 1); delete comment after merging with Container
  &:active {
    background-color: hsla(220, 100%, 92%, 1);
  }
`;

export const PageNumber = styled.span`
  height: 24px;
  font-size: 16px;
  line-height: 150%;
`;
