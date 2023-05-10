import styled from "styled-components";
import {ReactComponent as SearchImage} from "../../images/search.svg";

export const Search = styled.input` 
height: 48px;
width: 432px;
border-radius: 33px;
margin-left: 311px;
margin-right: 292px;
border: 1px solid #E4E6F0;
background-image: url(${SearchImage});
background-repeat: no-repeat;
background-position: 10px center;
padding-left: 40px;
background-size: contain; 
`