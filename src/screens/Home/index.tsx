import { Container, StatisticsContainer, LogoContainer, Logo, StatisticsButton, StatisticsIcon, Title, MealsContainer, Date } from './styles';

import { useNavigation } from '@react-navigation/native'

import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Meals } from '@components/Meals';

import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.png';

import Plus from 'phosphor-react-native/src/icons/Plus';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';


export function Home() {

    const navigation = useNavigation();

    const mealData = [
        {
            date: '12.08.22',
            meals: [
                { hour: '7:00', item: 'Aveia', status: true },
                { hour: '7:00', item: 'Iogurte Natural', status: true },
                { hour: '7:00', item: 'Mamão', status: true },
                { hour: '7:00', item: 'Banana', status: true },
            ],
        },
        {
            date: '15.02.23',
            meals: [
                { hour: '09:30', item: 'Vitamina de banana com abacate', status: true },
                { hour: '09:30', item: 'Vitamina de banana', status: true },
                { hour: '12:30', item: 'X-Tudo', status: false },
                { hour: '12:30', item: 'Coca Cola', status: false },
            ],
        },
    ];

    function handleNewMeal() {
        navigation.navigate('createEdit', { mode: 'create' });
    }

    function handleSeeStatistics() {
        navigation.navigate('statistics');
    }

    return (
        <Container>
            <LogoContainer>
                <Logo source={logoImg} />
                <Logo source={avatarImg} />
            </LogoContainer>

            <StatisticsContainer>
                <StatisticsButton
                    onPress={handleSeeStatistics}>
                    <StatisticsIcon />
                </StatisticsButton>
                <Highlight
                    title="90.86%"
                    subtitle='das refeições dentro da dieta'
                />
            </StatisticsContainer>

            <MealsContainer>
                <Title>
                    Refeições
                </Title>
                <Button
                    onPress={handleNewMeal}
                    icon={<Plus size={20} color="white" />}
                    title="Nova refeição"
                    type="ADD"
                />

                <FlatList
                    data={mealData}
                    keyExtractor={(item) => item.date}
                    renderItem={({ item }) => (
                        <>
                            <Date>{item.date}</Date>
                            <FlatList
                                data={item.meals}
                                keyExtractor={(meal) => meal.item}
                                renderItem={({ item: meal }) => (
                                    <Meals
                                        hour={meal.hour}
                                        item={meal.item}
                                        status={meal.status}
                                    />
                                )}
                            />
                        </>
                    )}
                    ListEmptyComponent={() => (
                        <ListEmpty message="Que pena, ainda não existem equipes cadastradas!" />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 50 }}
                />

            </MealsContainer>
        </Container>
    )
}