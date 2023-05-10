import styled from "styled-components";
import {ReactComponent as CameraImage} from "../images/video.svg";


export const Header = styled.div`
display: flex;
align-items: center;
height: 94px;
width: 1920px;
background-color: black;
color: white; 
`;

export const Title = styled.div` 
display: flex;
flex-direction: row; 
align-items: center;  
`;

export const TitleText = styled.p` 
font-size: 1.2em;
`;

export const Navigation = styled.nav` 

`;
 
export const StyledList = styled.ul`
display: flex;
flex-direction: row; 
margin-left: 20px;
`;

export const Item = styled.li`
list-style-type: none;
padding: 10px 20px 10px 20px;
font-size: 14px;
width: 54px;
height: 21px;
`;

export const StyledVideoImage = styled(CameraImage)`
width: 40px;
height: 40px; 
margin-left: 298px;
margin-right: 17px;
`;
 