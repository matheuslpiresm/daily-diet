import { useState } from 'react';
import { Container, Title, ContainerDateHour, ContainerButtonSelect } from './styles';

import { Button } from '@components/Button';
import { SelectButton } from '@components/SelectButton';
import { Input } from '@components/Input';
import { Header } from '@components/Header';

export function CreateEditMeal() {
    const mode = 'create';
    const OnDiet = true;

    return (
        <Container>
            <Header
                title={mode == 'create' ? 'Cadastrar refeição' : mode == 'edit' ? 'Editar refeição' : 'Refeição'}
                type={(mode === 'create' || mode === 'edit') ? 'DEFAULT' : OnDiet ? 'SUCCESS' : 'FAIL'}
            />
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
                title={mode == 'create' ? 'Cadastrar refeição' : 'Editar refeição'}
                style={{ marginTop: 50 }}
            />
        </Container>
    );
}
