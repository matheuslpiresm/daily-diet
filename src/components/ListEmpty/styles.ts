import styled, { css } from "styled-components/native";

import SmileySad from 'phosphor-react-native/src/icons/SmileySad';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Message = styled.Text`
    text-align: center;
    margin-top: 10px;
    margin-bottom: 100px;

    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    `};
`;

export const EmptyIcon = styled(SmileySad).attrs(({ theme }) => ({
    size: 50,
    color: theme.COLORS.GRAY_1,
}))`
    margin-top: 20px;
`;