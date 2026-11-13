import {FlatList} from 'react-native'
import  CategoryGridTile from '../components/CategoryGridTile'

/* We are importing CATEGORIES from the data we created */
import {CATEGORIES} from '../data/dummy-data';

/* Any components that is bound to a screen (Stack.Screen) like
CategoriesScreen and MealsOverviewScreen we get a special prop
from react-navigation the prop value that we get (navigation)
 is an object with a method that can be used for navigating 
 between screen */
function CategoriesScreen({navigation}) {
    
    /* renderCategoryItem is a function that returns 
a CategoryGridTile element, using the incoming itemData*/
function renderCategoryItem(itemData) {

    function pressHandler() {
/* the navigate method is provide by react-navigation on the 
navigation object which we received as a prop and navigate want
the name of the component we want to navigate to which is gotten
from Stack.Screen on the App component*/
        navigation.navigate("MealsOverview");
    }



    return <CategoryGridTile
    /* We are passing the title, color and 
    onPress to the component CategoryGridTile
    component as props */
    title={itemData.item.title} 
    color={itemData.item.color}
    onPress={pressHandler}
    />;
}



    return (
        /*FlatList is a react-native components used to create
        a  scrolling effect but it is used when you want to do
        lazy loading meaning you want to output data dymically */
    <FlatList  
    data= {CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem = {renderCategoryItem}
    numColumns = {2}
    />
    );
}

export default CategoriesScreen;