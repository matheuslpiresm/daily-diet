import { Container, Title, Subtitle, ContainerTypeStyleProps } from './styles';

type Props = {
    type?: ContainerTypeStyleProps
    quantidade: string;
    text: string;
}

export function MealSmallCard({ quantidade, text, type = 'PRIMARY' }: Props) {
    return (
        <Container
            type={type}
        >
            <Title>{quantidade}</Title>
            <Subtitle>{text}</Subtitle>
        </Container>
    )
}