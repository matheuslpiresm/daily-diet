import { Container, Hour, Item, Icon } from './styles';

type Props =  {
    hour: string;
    item: string;
    status: boolean;
}

export function Meals({ hour, item, status }: Props) {
    return (
        <Container>
            <Hour>{hour}</Hour>
            <Item>{item}</Item>
            <Icon status={status} />
        </Container>
    );
}