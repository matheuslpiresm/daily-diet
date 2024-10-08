import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'ADD' | 'DELETE';

type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity) <Props>`
    width: 327px;
    height: 50px;

    background-color: ${({ theme, type }) => type === 'ADD' ? theme.COLORS.GRAY_2 : theme.COLORS.GREEN_LIGHT};

    border-radius: 6px;

    flex-direction: row;
    justify-content: center;
    align-items: center;

`

export const Title = styled.Text <Props>`
    color: ${({ theme, type }) => type === 'ADD' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};

    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const IconContainer = styled.View`
    margin-right: 8px; 
`;

