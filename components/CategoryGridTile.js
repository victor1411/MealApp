import {Pressable, View, Text, StyleSheet, Platform, Dimensions} from 'react-native'

/* On the CategoryGridTile we are getting props from folder 
data on the file dummy-data.js we use destructuring to get
individual values   */
function CategoryGridTile({title, color}) {
    return (
        <View style = {styles.gridItem}>
            {/* Pressable is a react-native component that 
            allow a view or text to be press using the 
            onPress function I used the arrow function 
            to return styles conditionally because the 
            andrroid_ripple only affect android devices
            pressable calls the function internally and passes
            an object as an argument using destructing I got 
            pressed which is a boolean*/}
            <Pressable  
            android_ripple= {{color: '#ccc'}} 
            style = {({pressed}) => [
                styles.button, 
                pressed ? styles.buttonPressed: null,
                ]}
                >
                <View style ={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style = {styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    gridItem:{
        flex:1,  // flex 1 take all available space proportional to other item 
        margin: deviceHeight < 380 ? 16 : 25,
        height:150,
        borderRadius: 8,
        elevation : 4, //boxShadow for andorid App 
        /* all 4 parameters are neede for boxshadow on ios app
        plus the background color without it the boxshadow do
        not show up */
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width:0, height:2},
        shadowRadius:8,
        /*because the ripple effect is going out the 
        border so overflow hides the effect but using the 
        overflow break the ios boxshadow  so I used a 
        Platform API which is gotten from react-native it is 
        used to detect which platform the app is running on   */
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible' 
    },
    button:{
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex:1,
        padding:16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontWeight:"bold",
        fontSize: 18,
    },
});