import { Container, Title, Subtitle, Image } from './styles';

import { useTheme } from 'styled-components/native';
import { Button } from '@components/Button';

import SuccessImg from '@assets/success.png';
import FailImg from '@assets/fail.png';

const isOnDiet = true;

export function Feedback() {
    const { COLORS, FONT_FAMILY } = useTheme();

    return (
        <Container>
            <Title style={{ color: isOnDiet ? COLORS.GREEN_DARK : COLORS.RED_DARK }}>
                {isOnDiet ? "Continue assim!" : "Que pena!"}
            </Title>

            <Subtitle>
                {isOnDiet ? "Você continua " : "Você "}

                <Subtitle style={{ fontFamily: FONT_FAMILY.BOLD }}>
                    {isOnDiet ? "dentro da dieta " : "saiu da dieta "}
                </Subtitle>

                {isOnDiet ? "Muito bem!" : "dessa vez, mas continue se esforçando e não desista!"}
            </Subtitle>

            <Image source={isOnDiet ? SuccessImg : FailImg} />

            <Button
                title='Ir para a página inicial'
            />
        </Container >
    )
}