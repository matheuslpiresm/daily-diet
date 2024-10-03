import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home'
import { CreateEditMeal } from '@screens/CreateEditMeal'
import { Feedback } from '@screens/Feedback'
import { Meal } from '@screens/Meal'
import { Statistics } from '@screens/Statistics'

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="createEdit"
                component={CreateEditMeal}
            />
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="feedback"
                component={Feedback}
            />
            <Screen
                name="meal"
                component={Meal}
            />
            <Screen
                name="statistics"
                component={Statistics}
            />

        </Navigator>
    );
}