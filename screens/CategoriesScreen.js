import {FlatList} from 'react-native'
import  CategoryGridTile from '../components/CategoryGridTile'

/* We are importing CATEGORIES from the data we created */
import {CATEGORIES} from '../data/dummy-data';

/* renderCategoryItem is a function that returns 
a CategoryGridTile element, using the incoming itemData*/
function renderCategoryItem(itemData) {
    return <CategoryGridTile 
    title={itemData.item.title} 
    color={itemData.item.color}
    />;
}

function CategoriesScreen() {
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