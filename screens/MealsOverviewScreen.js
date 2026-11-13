import {View, Text, StyleSheet } from 'react-native'

import {MEALS} from '../data/dummy-data'


function MealsOverviewScreen() {
    return(
        <View style ={styles.container}>
            <Text> Meal Overview Screen</Text>
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