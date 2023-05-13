import styled from "styled-components";
import SearchImage from "../../images/search.svg";

export const Search = styled.input` 
height: 48px;
width: 432px;
border-radius: 33px;
margin-left: 380px;
margin-right: 292px;
border: 1px solid ${({ theme }) => theme.colors.gray};
background-image: url(${SearchImage});
background-repeat: no-repeat;
background-position: 27px center;
padding-left: 63px;
background-size: auto;  

&::placeholder {
    color: ${({ theme }) => theme.colors.darkergray}
}
`