import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from  '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'


/*createNativeStackNavigator is a function We call the function to
create a stack of screen and now stack is an object with two property
where every porperty holds an object that act as a component */
const Stack =createNativeStackNavigator();


export default function App() {
  return (
    <>
    <StatusBar style='dark' />
    <NavigationContainer>
        {/* the Stack.Screen is a component that allow us to 
        register a screen that will be managed by the 
        Stack.Navigator */}
      <Stack.Navigator>
        <Stack.Screen  
        name="MealsCategories" 
        component={CategoriesScreen}
        />
        <Stack.Screen  
        name="MealsOverview" 
        component={MealsOverviewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
