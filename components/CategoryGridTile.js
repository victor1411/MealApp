import {Pressable, View, Text} from 'react-native'

/* On the CategoryGridTile we are getting props from folder 
data on the file dummy-data.js we use destructuring to get
individual values   */
function CategoryGridTile({title, color}) {
    return (
        <View>
            {/* Pressable is a react-native component that 
            allow a view or text to be press using the 
            onPress function */}
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;