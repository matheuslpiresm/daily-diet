import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";


export const Container = styled(SafeAreaView)`
    flex: 1;

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GREEN_DARK};
        
        padding: 5px 20px;
    `};
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1};

        text-align: center;
        padding: 0 20px;
        margin-bottom: 40px;
    `};
`;

export const Image = styled.Image`
    width: 224px;
    height: 288px;
    margin-bottom: 50px;
`;