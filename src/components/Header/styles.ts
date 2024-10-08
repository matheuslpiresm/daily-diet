import styled, { css } from "styled-components/native";

import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft';

export type HeaderTypeStyleProps = 'SUCCESS' | 'FAIL' | 'DEFAULT';

type Props = {
    type: HeaderTypeStyleProps;
}

export const Container = styled.View<Props>`
    width: 100%;
    height: 104px;

    justify-content: center;

    background-color: ${({ theme, type }) => type === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : type === 'FAIL' ? theme.COLORS.RED_LIGHT : type === 'DEFAULT' ? theme.COLORS.GRAY_6 : undefined};
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};

        text-align: center;
        margin-bottom: 10px;
    `};
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    z-index: 1;

    left: 20px;
    top: 30px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 30,
    color: theme.COLORS.GRAY_2
}))``;