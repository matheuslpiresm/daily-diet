import { Container, Label, InputContent, InputTypeStyleProps } from './styles';

type PropsInput = {
    input: InputTypeStyleProps;
}

type PropsLabel = {
    label: string;
}

type Props = PropsInput & PropsLabel;

export function Input({ label, input = 'ITEM' }: Props) {
    return (
        <Container>
            <Label> {label} </Label>

            <InputContent
                type={input}
            />
        </Container>
    );
}

