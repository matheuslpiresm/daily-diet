import { Container, Title, Icon } from './styles';

type Props =  {
    title: string;
    status: boolean;
}

export function SelectButton({ title, status }: Props) {
    return (
        <Container>
            <Icon status={status} />
            <Title>{title}</Title>
        </Container>
    );
}