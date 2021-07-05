/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { TasksScreen } from './screens/TasksScreen';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ModalController } from './components/ModalController';
const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen component={WelcomeScreen} name='Welcome' />
        <Stack.Screen component={TasksScreen} name='Todos' />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
