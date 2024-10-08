import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_1,
    size: 50
}))`

`;