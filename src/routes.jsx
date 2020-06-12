import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Intro from './pages/Intro';
import Login from './pages/Login';
import Main from './pages/Main';
import Map from './pages/Map';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#FFF',
          },
        }}
      >
        <AppStack.Screen name="Intro" component={Intro} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="Map" component={Map} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
