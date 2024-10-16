import { Container, Label, InputContent, InputTypeStyleProps } from './styles';

type PropsInput = {
    input: InputTypeStyleProps;
    value?: string;
    onChangeText: (text: string) => void; 
}

type PropsLabel = {
    label: string;
}

type Props = PropsInput & PropsLabel;

export function Input({ label, input = 'ITEM', value, onChangeText }: Props) {
    return (
        <Container>
            <Label> {label} </Label>

            <InputContent
                type={input}
                value={value}
                onChangeText={onChangeText}
            />
        </Container>
    );
}

