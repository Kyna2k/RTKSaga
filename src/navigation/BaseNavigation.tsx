import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FunctionComponent, ReactElement} from 'react';
import {routeName} from '../common/const/index';
import HomeScreen from '../screen/HomeScreen';
import LoginScreen from '../screen/LoginScreen';

const Stack = createNativeStackNavigator();
const BaseNavigation: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routeName.LoginRoute} component={LoginScreen} />
        <Stack.Screen name={routeName.HomeRoute} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BaseNavigation;
