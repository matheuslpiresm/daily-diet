import styled, { css } from "styled-components/native";

import Circle from 'phosphor-react-native/src/icons/Circle';

type Props = {
    status?: boolean;
}

export const Container = styled.View`
    width: 160px;
    height: 50px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_6};
    border-radius: 6px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin: 5px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `};
`;

export const Icon = styled(Circle).attrs<Props>(({ theme, status }) => ({
    size: 20,
    weight: "fill",
    color: status ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
})) <Props>`
    margin-right: 10px;
`;