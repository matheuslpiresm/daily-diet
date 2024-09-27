import { useState } from 'react';
import { Container, Header, BackButton, BackIcon, Title, ContainerDateHour, ContainerButtonSelect } from './styles';

import { Button } from '@components/Button';
import { SelectButton } from '@components/SelectButton';
import { Input } from '@components/Input';

export function NewMeal() {

    return (
        <Container>
            <Header>
                <BackButton onPress={() => { }}>
                    <BackIcon />
                </BackButton>
                <Title>Nova refeição</Title>
            </Header>

            <Input
                label={'Nome'}
                input={'ITEM'}
            />

            <Input
                label={'Descrição'}
                input={'DESCRIPTION'}
            />

            <ContainerDateHour>
                <Input
                    label={'Data'}
                    input={'DATE'}
                />

                <Input
                    label={'Hora'}
                    input={'HOUR'}
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
                title='Cadastrar refeição'
                style={{ marginTop: 50 }}
            />
        </Container>
    );
}
