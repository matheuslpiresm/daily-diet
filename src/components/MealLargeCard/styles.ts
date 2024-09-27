import styled from "styled-components/native";

export const Container = styled.View`
    width: 327px;
    height: 89px;

    border-radius: 8px;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_6};

    margin-top: 15px
`;

export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};

    text-align: center;
`;

export const Subtitle = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};

    text-align: center;
`;