import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";  

import ArrowUpRight from 'phosphor-react-native/src/icons/ArrowUpRight';

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
`;

export const LogoContainer = styled.View`
    width: 327px;
    margin-top: 25px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image`
    margin: 0;
`;

export const StatisticsContainer = styled.View`
    width: 327px;
    height: 102px;

    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    border-radius: 8px ;

    margin-top: 20px;
`

export const StatisticsButton = styled.TouchableOpacity`
    position: absolute;
    right: 10px;
    top: 10px;
`;

export const StatisticsIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 30,
    color: theme.COLORS.GREEN_DARK
}))`
`;

export const MealsContainer = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    margin-top: 30px;
    margin-bottom: 10px;

    align-items: flex-start;

    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    color: ${({ theme }) => theme.COLORS.GRAY_1}
`
export const Date = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

    margin-top: 20px;
`;