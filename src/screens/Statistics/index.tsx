import { MealCard } from '@components/MealCard';
import { Container, Header, BackButton, BackIcon, MainContent, Title } from './styles';

import { Highlight } from '@components/Highlight'

export function Statistics() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => { }}>
                    <BackIcon />
                </BackButton>
                <Highlight
                    title="90.86%"
                    subtitle='das refeições dentro da dieta'
                />
            </Header>
            <Title> Estatísticas gerais </Title>
            <MainContent>
                <MealCard
                    type={'PRIMARY'}
                    quantidade={'22'}
                    text={'refeições dentro da dieta'}
                />

                <MealCard
                    type={'SECONDARY'}
                    quantidade={'10'}
                    text={'refeições fora da dieta'}
                />

            </MainContent>
        </Container>
    )
}