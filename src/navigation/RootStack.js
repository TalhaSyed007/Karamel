import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash'
import Intro from '../screens/Intro'
import Login from '../screens/Login'
const Stack = createStackNavigator();
export default class RootStack extends React.Component {
    render() {
        return (
            <Stack.Navigator headerMode='none' initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Intro" component={Intro} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        );
    }
}