import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft';

export const Container = styled(SafeAreaView)`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: 168px;

    background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
    top: 30px;

    flex: 1;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 30,
    color: theme.COLORS.RED_DARK
}))``;

export const MainContent = styled.View`
    justify-content: space-around;
    align-items: center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};

    margin-top: 30px;
    text-align: center;
`;

export const SmallCardsContent = styled.View`
    width: 327px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;