import { Container, Title, ButtonTypeStyleProps, IconContainer } from './styles';
import { TouchableOpacityProps } from 'react-native';
import { IconProps } from 'phosphor-react-native';

type Props = TouchableOpacityProps & {
    icon?: React.ReactElement<IconProps>;
    title: string;
    type?: ButtonTypeStyleProps;
}

export function Button({ icon, title, type = 'ADD' }: Props) {
    return (
        <Container type={type}>
            {icon && <IconContainer>{icon}</IconContainer>}
            <Title
                type={type}
            >
                {title}
            </Title>
        </Container>
    )
}