import {View, Text, StyleSheet} from 'react-native'

function List ({data}) {
    return (
        data.map((dataPoint) => (
            <View style = {styles.listItem}>
                <Text style = {styles.itemText} key={dataPoint}>{dataPoint}</Text>
            </View>
        ))
    );
}

export default List

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: '#a39f9f'
    },
    itemText: {
        color: 'grey',
        textAlign: 'center'
    },
})