import { Container, Title, BackButton, BackIcon, HeaderTypeStyleProps } from './styles';

type Props = {
    title: string;
    type?: HeaderTypeStyleProps;
}

export function Header({ title, type = 'DEFAULT' }: Props) {
    return (
        <Container
            type={type}
        >
            <BackButton onPress={() => { }}>
                <BackIcon />
            </BackButton>

            <Title>{title}</Title>
        </Container>
    );
}