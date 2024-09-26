import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    text-align: center;;

    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
`;

export const Subtitle = styled.Text`
    text-align: center;

    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;



