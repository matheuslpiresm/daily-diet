import styled, { css } from "styled-components/native";

export type ContainerTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ContainerTypeStyleProps;
}

export const Container = styled.View<Props>`
    width: 157px;
    height: 107px;

    border-radius: 8px;
    justify-content: center;

    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

    margin-top: 15px;
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