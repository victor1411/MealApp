import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Buutton} from 'react-native';
import {NavigationContainer} from  '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailsScreen from './screens/MealDetailsScreen'

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
      <Stack.Navigator 
      screenOptions = {{
          headerStyle: {backgroundColor: '#cccccc'},
          headerTintColor: "white",
          contentStyle: {backgroundColor: '#d8d8d8'}
      }}
      >
        <Stack.Screen  
        name="MealsCategories" 
        component={CategoriesScreen}
        /*the option can receive different values, object 
        like this one or a function like the next option in 
        the object we style the header while on the other
        when we pass a function it recevie an  object with two
        piece of data we used destructing to get  route and 
        navigation which is gotten from react navigation   */
        options ={{
          title:" All Categories",
        }}/>
        <Stack.Screen  
        name="MealsOverview" 
        component={MealsOverviewScreen}
        // options = {({route, navigation}) => {
        //   const catId = route.params.categoryId;
        //   return {
        //     title: catId,
        //   };
        // }}
        />
        <Stack.Screen  
        name="MealDetails" 
        component={MealDetailsScreen}
        // options ={{
        //   headerRight : () => {
        //     return <Button title = 'Tap me'  onPress= {}/>
        //   }
        // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
