import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import AgentGrid from './screen/AgentGrid';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen
          name="AgentGrid"
          component={AgentGrid}
          options={{ headerShown: false }} 
          />
        </Stack.Navigator>
    </NavigationContainer>
  )
};