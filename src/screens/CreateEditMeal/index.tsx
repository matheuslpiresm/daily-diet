import { useState } from 'react';

import { Container, Title, ContainerDateHour, ContainerButtonSelect } from './styles';

import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';
import { SelectButton } from '@components/SelectButton';
import { Input } from '@components/Input';
import { Header } from '@components/Header';
import { mealCreate } from '@storage/meal/mealCreate';

export function CreateEditMeal() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');

    const mode = 'create';
    const OnDiet = true;

    const navigation = useNavigation();

    // function handleGoHome() {
    //     navigation.navigate('home');
    // }

   async function handleNewMeal() {
        try {
            const mealData = {
                name: name,
                description: description,
                date: date,
                hour: hour,
            };

            await mealCreate(mealData)
            navigation.navigate('home', { name });


        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Container>
            <Header
                title={mode == 'create' ? 'Cadastrar refeição' : mode == 'edit' ? 'Editar refeição' : 'Refeição'}
                type={(mode === 'create' || mode === 'edit') ? 'DEFAULT' : OnDiet ? 'SUCCESS' : 'FAIL'}
            />
            <Input
                label={'Nome'}
                input={'ITEM'}
                value={name}
                onChangeText={setName}
            />

            <Input
                label={'Descrição'}
                input={'DESCRIPTION'}
                value={description}
                onChangeText={setDescription}
            />

            <ContainerDateHour>
                <Input
                    label={'Data'}
                    input={'DATE'}
                    value={date}
                    onChangeText={setDate}
                />

                <Input
                    label={'Hora'}
                    input={'HOUR'}
                    value={hour}
                    onChangeText={setHour}
                />
            </ContainerDateHour>

            <Title>Está dentro da dieta?</Title>

            <ContainerButtonSelect>
                <SelectButton
                    title='Sim'
                    status={true}
                />

                <SelectButton
                    title='Não'
                    status={false}
                />
            </ContainerButtonSelect>

            <Button
                title={mode == 'create' ? 'Cadastrar refeição' : 'Editar refeição'}
                style={{ marginTop: 50 }}
                onPress={handleNewMeal}
            />
        </Container>
    );
}
