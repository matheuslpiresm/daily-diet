import { Container, Title, Subtitle } from './styles';

type Props = {
    quantidade: number;
    text: string;
}

export function MealLargeCard({ quantidade, text }: Props) {

    return (
        <Container>
            <Title>{quantidade}</Title>
            <Subtitle>{text}</Subtitle>
        </Container>
    );
}