import { View, Text, StyleSheet } from 'react-native';

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.text}>#{roundNumber}</Text>
            <Text style={styles.text}>Opponent's Guess: {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: '#ff8c00',
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: 'brown',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 0.33,
        shadowRadius: 3
    },
    text: {
        color: 'white',
        fontWeight: '800'
    }
})