import { Container, Hour, Item, IconTypeStyleProps, Icon } from './styles';

type Props =  {
    hour: string;
    item: string;
    status?: IconTypeStyleProps
}

export function Meals({ hour, item, status= 'DIETA' }: Props) {
    return (
        <Container>
            <Icon status={status} />
            <Hour>{hour}</Hour>
            <Item>{item}</Item>
        </Container>
    );
}