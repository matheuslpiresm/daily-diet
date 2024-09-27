
import { Container, Header, BackButton, BackIcon, MainContent, Title, SmallCardsContent } from './styles';

import { Highlight } from '@components/Highlight'
import { MealLargeCard } from '@components/MealLargeCard';
import { MealSmallCard } from '@components/MealSmallCard';

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
                <MealLargeCard
                    quantidade={4}
                    text={'melhor sequência de pratos dentro da dieta'}
                />
                <MealLargeCard
                    quantidade={109}
                    text={'refeições registradas'}
                />
                <SmallCardsContent>
                    <MealSmallCard
                        type={'PRIMARY'}
                        quantidade={'22'}
                        text={'refeições dentro da dieta'}
                    />
                    <MealSmallCard
                        type={'SECONDARY'}
                        quantidade={'10'}
                        text={'refeições fora da  dieta'}
                    />
                </SmallCardsContent>
            </MainContent>
        </Container>
    )
}