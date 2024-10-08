
import { Container, Header, BackButton, BackIcon, MainContent, Title, SmallCardsContent } from './styles';

import { useNavigation } from '@react-navigation/native';

import { Highlight } from '@components/Highlight'
import { MealLargeCard } from '@components/MealLargeCard';
import { MealSmallCard } from '@components/MealSmallCard';

export function Statistics() {

    const navigation = useNavigation();

    function handleGoHome() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <Header>
                <BackButton onPress={handleGoHome}>
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