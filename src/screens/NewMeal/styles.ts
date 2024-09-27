import styled from "styled-components/native";
import { TextInput } from 'react-native';

import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    height: 104px;

    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;

    left: 20px;
    top: 45px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 30,
    color: theme.COLORS.GRAY_2
}))``;

export const ContainerDateHour = styled.View`
    width: 327px;
    flex-direction: row;

    justify-content: space-between;
`;

export const OptionText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const ContainerButtonSelect = styled.View`
    flex-direction: row;
    margin-bottom: 80px;
`;
