import { Container, Title, BackButton, BackIcon, HeaderTypeStyleProps } from './styles';

import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string;
    type?: HeaderTypeStyleProps;
}

export function Header({ title, type = 'DEFAULT' }: Props) {
    const navigation = useNavigation();

    function handleGoHome() {
        navigation.navigate('home');
    }

    return (
        <Container
            type={type}
        >
            <BackButton onPress={handleGoHome}>
                <BackIcon />
            </BackButton>

            <Title>{title}</Title>
        </Container>
    );
}