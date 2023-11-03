import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import EnterText from './src/screens/EnterText';
import ScanText from './src/screens/ScanText';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EnterText" component={EnterText} />
        <Stack.Screen name="ScanText" component={ScanText} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
