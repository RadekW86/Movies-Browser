import styled from "styled-components";
import {ReactComponent as CameraImage} from "../images/video.svg";


export const StyledTopBar = styled.div`
align-items: center;
padding: 23px;
background-color: ${({ theme }) => theme.colors.black}; 
position: sticky;
z-index: 1;
left: 0;
right: 0;
top: 0;
`;

export const StyledTopContent = styled.div`
max-width: 1330px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
align-content: center;
gap: 0;
`;

export const StyledTopSubContent = styled.div`
display: flex;
align-items: center;
`;

export const Title = styled.div` 
display: flex;
flex-direction: row; 
align-items: center;
margin-right: 104px;  
`;

export const TitleText = styled.p` 
size: 24px;
line-height: 40px;
letter-spacing: -1.5px;
font-weight: 450;
font-size: 24px;
text-transform: capitalize;
color: ${({ theme }) => theme.colors.white};
margin: 0;
`;

export const Navigation = styled.nav`
display: flex;
justify-content: flex-start;
margin-right: 150px;
`;
 
export const StyledList = styled.ul`
display: flex;
flex-direction: row;

justify-content: flex-start;
padding: 0;
margin: 0;
gap: 12px;
`;

export const Item = styled.li`
display: flex;
align-items: center;
list-style-type: none;
font-size: 14px;
line-height: 21px;
width: 54px;
height: 31px;
font-weight: 450;
color: ${({ theme }) => theme.colors.white}; 
outline: none; 

&:active {
    outline: 1px solid white;
    border-radius: 24px; 
}
`;

export const StyledVideoImage = styled(CameraImage)`
width: 40px;
height: 40px; 
margin-right: 10px; 
`;
 