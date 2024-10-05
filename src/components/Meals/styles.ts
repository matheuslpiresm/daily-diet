import styled, { css } from "styled-components/native";
import Circle from 'phosphor-react-native/src/icons/Circle';

type Props = {
    status?: boolean;
}

export const Container = styled.View`
    width: 327px;
    height: 49px;

    flex-direction: row;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
    border-radius: 6px;

    align-items: center;
    margin-top: 8px;
`;

export const Hour = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};

        margin-left: 20px;
    `};
`;

export const Item = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.SM}px;
        margin-left: 20px;
    `};
`;

export const Icon = styled(Circle).attrs<Props>(({ theme, status }) => ({
    size: 20,
    weight: "fill",
    color: status ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
})) <Props>`
    position: absolute;
    right: 10px;
`;