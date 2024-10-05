import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 327px;
    height: 89px;

    border-radius: 8px;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_6};

    margin-top: 15px
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};

        text-align: center;
    `};
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};

        text-align: center;
    `};
`;