import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";  

import Circle from 'phosphor-react-native/src/icons/Circle';

type Props = {
    status: boolean;
}

export const Container = styled(SafeAreaView)`
    flex: 1;
`;

export const MealContainer = styled.View`
    margin-left: 20px;

    border-radius: 20px;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
    font-family:  ${({ theme }) => theme.FONT_FAMILY.BOLD};

    margin-top: 40px;
`;

export const Description = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family:  ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Subtitle = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family:  ${({ theme }) => theme.FONT_FAMILY.BOLD};

    margin-top: 20px;
`;

export const DateAndHour = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-family:  ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const TagStatus = styled.View`
    width: 180px;
    height: 50px;
    border-radius: 100px;

    background-color:  ${({ theme }) => theme.COLORS.GRAY_6};

    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
`;

export const TagText = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family:  ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_1};

`;

export const TagIcon = styled(Circle).attrs<Props>(({ theme, status }) => ({
    size: 15,
    weight:"fill",
    color: status ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<Props>`
    margin-right: 10px;
`;