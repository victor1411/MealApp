import {useLayoutEffect} from 'react';
import {View, FlatList, StyleSheet } from 'react-native'

import {MEALS, CATEGORIES} from '../data/dummy-data'

import MealItem from '../components/MealItem'

/* MealsOverviewScreen is registered with Stack.Screen 
that is where we got the navigation prop and route prop  */
function MealsOverviewScreen({ route, navigation }) {
    /* the route prop has a params  which is an optional object 
    containing params which is defined while navigating the 
    Navigation  we created from CategoriesScreen we got using
    route.params in MealsOverviewScreen*/
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });
    
    useLayoutEffect(() => {
        /* find is a javascript method used to find items we are using
        the find method to check if the category.id gotten from CATEGORIES 
        us equal to the catId  gotten from Meals */
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
    
    
        /* the navigation prop has a method called setOptions and the 
        setOptions take an object which then will be set as options */
        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])
    

    function renderMealItem(itemData) {
        const item = itemData.item;

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl:item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        };
        /* this ... is a spread operator you telling the
        mealItemProps object to open and dump each key as a 
        separate prop  */
        return  <MealItem  {...mealItemProps}/>;
    }

    return(
        <View style ={styles.container}>
            <FlatList 
            data={displayedMeals} 
            keyExtractor={(item) => item.id} 
            renderItem= {renderMealItem}
            />
        </View>
    )
}


export default  MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, //take all the avaiable space
        padding:16
    },
})
