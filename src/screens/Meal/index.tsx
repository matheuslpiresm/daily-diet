import { Container, MealContainer, Title, Subtitle, Description, DateAndHour, TagStatus, TagText, TagIcon } from './styles';

import { Header } from '@components/Header';

export function Meal() {

    const OnDiet = false;

    return (
        <Container>
            <Header
                title={'Refeição'}
                type={OnDiet ? 'SUCCESS' : 'FAIL'}
            />
            <MealContainer>
                <Title>
                    X-tudo
                </Title>
                <Description>
                    Xis completo da lancheria do bairro
                </Description>

                <Subtitle>Data e hora</Subtitle>
                <DateAndHour>
                    12/08/2022 às 20:00
                </DateAndHour>

                <TagStatus>
                    <TagIcon
                        status={OnDiet}
                    />
                    <TagText>{OnDiet ? 'dentro da dieta' : 'fora da dieta'}</TagText>
                </TagStatus>
            </MealContainer>
        </Container>
    );
}

