import styled from "styled-components/native";
import { TextInput } from 'react-native';

export type InputTypeStyleProps = 'ITEM' | 'DESCRIPTION' | 'DATE' | 'HOUR';

type PropsInput = {
    type: InputTypeStyleProps;
}

export const Container = styled.View`
    border-radius: 6px;
`;

export const Label = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px; 
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    
    margin-bottom: 8px;
    margin-top: 30px;
`;

export const InputContent = styled(TextInput) <PropsInput>`
    width: 327px;
    height: 48px;

    width: ${({ type }) => type === 'ITEM' ? '327px' : type === 'DESCRIPTION' ? '327px' : '150px'};
    height: ${({ type }) => type == 'DESCRIPTION' ? '120px' : '48px'};

    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

    border: ${({ theme }) => theme.COLORS.GRAY_5};
    border-radius: 6px;
    padding: 10px;
`;


