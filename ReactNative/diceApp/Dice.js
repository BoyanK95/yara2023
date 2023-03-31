import { View, Text, StyleSheet } from 'react-native';

function Dice({ dice }) {
    return (
        <View style={styles.diceContainer}>
            <Text style={styles.totalText}>{dice}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    diceContainer: {
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#525252',
        margin: 7
    },
    totalText: {
        color: 'darkgray'
    }
});

export default Dice;
