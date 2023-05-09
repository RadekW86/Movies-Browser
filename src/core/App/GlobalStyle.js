import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.mercury};
};
`;