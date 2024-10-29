import { useState, useEffect } from 'react';

import { Container, StatisticsContainer, LogoContainer, Logo, StatisticsButton, StatisticsIcon, Title, MealsContainer, Date, View, Text } from './styles';

import { useNavigation } from '@react-navigation/native'
import { FlatList, SectionList } from 'react-native';

import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Meals } from '@components/Meals';
import { ListEmpty } from '@components/ListEmpty';

import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.png';

import Plus from 'phosphor-react-native/src/icons/Plus';
import { mealsGetAll } from '@storage/meal/mealsGetAll';

export type MealType = {
    name: string;
    description: string;
    date: string;
    hour: string;
};

export function Home() {
    const [meal, setMeal] = useState<string[]>(['']);
    const navigation = useNavigation();
    const [name, setName] = useState('');

    // const DATA = [
    //     {
    //         date: '18/05/2024',
    //         hour: '10:25',
    //         data: ['Pizza', 'Burger', 'Risotto'],
    //     },
    //     {
    //         date: '19/05/2024',
    //         hour: '10:25',
    //         data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    //     },
    //     {
    //         date: '20/05/2024',
    //         hour: '10:25',
    //         data: ['Water', 'Coke', 'Beer'],
    //     },
    //     {
    //         date: '21/05/2024',
    //         hour: '10:25',
    //         data: ['Cheese Cake', 'Ice Cream'],
    //     },
    //     {
    //         date: '21/05/2024',
    //         hour: '10:25',
    //         data: ['Cheese Cake', 'Ice Cream'],
    //     },
    //     {
    //         date: '21/05/2024',
    //         hour: '10:25',
    //         data: ['Cheese Cake', 'Ice Cream'],
    //     },
    // ];


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

                {/* <SectionList
                    sections={}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item, section }) => (
                        <View>
                            <Meals
                                hour={section.hour}
                                item={item}
                                status={false}
                                
                            />
                        </View>
                    )}
                    renderSectionHeader={({ section: { date } }) => (
                        <Date>{date}</Date>
                    )}
                /> */}

            </MealsContainer>
        </Container>
    )
}