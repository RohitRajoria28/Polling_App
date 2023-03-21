import {  StyleSheet  } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import HomeScreen from './Components/HomeScreen';
import DetailsScreen from './Components/DetailsScreen';


 
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 

export default App;


 