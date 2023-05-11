import styled from "styled-components";
import {ReactComponent as CameraImage} from "../images/video.svg";


export const Header = styled.div`
display: flex;
align-items: center;
height: 94px;
background-color: ${({ theme }) => theme.colors.black};
color: white; 
`;

export const Title = styled.div` 
display: flex;
flex-direction: row; 
align-items: center;  
`;

export const TitleText = styled.p` 
size: 24px;
line-height: 40px;
letter-spacing: -1.5px;
left: 42px;
top: calc(50% - 40px/2);
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 450;
font-size: 24px;
text-transform: capitalize;
color: ${({ theme }) => theme.colors.white};
white-space: nowrap;
`;

export const Navigation = styled.nav` 
box-sizing: border-box;
`;
 
export const StyledList = styled.ul`
display: flex;
flex-direction: row; 
margin-left: 46px;
`;

export const Item = styled.li`
display: flex;
flex-direction: row;
align-items: center;
list-style-type: none;
padding: 8px 24px 8px 24px;
font-size: 14px;
line-height: 21px;
width: 54px;
height: 31px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 450;
color: ${({ theme }) => theme.colors.white}; 
outline: none; 

&:active {
    outline: 1px solid white;
    border-radius: 24px; 
}

&:first-child {
    margin-right: 6px;
}

&:last-child {
    margin-left: 6px;
}
`;

export const StyledVideoImage = styled(CameraImage)`
width: 40px;
height: 40px; 
margin-left: 298px;
margin-right: 10px;
left: 0px;
top: calc(50% - 40px/2);
`;
 