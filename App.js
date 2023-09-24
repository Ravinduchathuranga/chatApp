import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { Home } from './Home';
import { Chat } from './Chat';

const Stack = createNativeStackNavigator();
function App() {
  const ui = (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Chat' component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  return ui;
}
export default App;
