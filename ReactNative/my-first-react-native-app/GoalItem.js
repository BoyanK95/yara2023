import { Pressable, View, Text, StyleSheet } from 'react-native';

function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 8,
        backgroundColor: 'green'
    },
    goalText: {
        color: 'white'
    }
})

export default GoalItem;
