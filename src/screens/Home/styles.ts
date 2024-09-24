import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_4}; 
`;

export const LogoContainer = styled.View`
    width: 90%;
    margin-top: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image`
margin-left: 30px;
`;