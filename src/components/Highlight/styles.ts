import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXXL}px;

        text-align: center;
    `};
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG}px;

        text-align: center;
    `};
`;



