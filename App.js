import { MD2LightTheme as DefaultTheme ,Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';


const theme = {
  ...DefaultTheme,
  roundness: 3,
  version: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FEC007',
    secondary: '#3F51B5',
    tertiary: '#a1b2c3'
  },
};

var Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
          <Stack.Navigator initialRouteName='Start' screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name='Start' component={StartScreen}></Stack.Screen>
            <Stack.Screen name='Quiz' component={QuizScreen}></Stack.Screen>
            <Stack.Screen name='Result' component={ResultScreen}></Stack.Screen>
          </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
