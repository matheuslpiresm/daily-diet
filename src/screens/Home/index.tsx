import { useState, useEffect } from 'react';

import { Container, StatisticsContainer, LogoContainer, Logo, StatisticsButton, StatisticsIcon, Title, MealsContainer, Date } from './styles';

import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native';

import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Meals } from '@components/Meals';
import { ListEmpty } from '@components/ListEmpty';

import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.png';

import Plus from 'phosphor-react-native/src/icons/Plus';
import { mealsGetAll } from '@storage/meal/mealsGetAll';

export type MealType= {
    name: string;
    description: string;
    date: string;
    hour: string;
  };

export function Home() {
    const [meal, setMeal] = useState<string[]>(['']);
    const navigation = useNavigation();

    function handleNewMeal() {
        navigation.navigate('createEdit', { mode: 'create' });
    }

    function handleSeeStatistics() {
        navigation.navigate('statistics');
    }

    async function fetchMeals() {
        try {
            const data = await mealsGetAll();
            setMeal(data);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(meal);
        
        console.log('executou');
        
        fetchMeals();
    }, []);

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
                    data={meal}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <>
                            <Date>{item}</Date>
                            <FlatList
                                data={item}
                                keyExtractor={(meal) => meal}
                                renderItem={({ item: meal }) => (
                                    <Meals
                                        hour={meal}
                                        item={meal}
                                        status={true}
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