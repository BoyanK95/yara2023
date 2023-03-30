import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [diceArr, setDiceArr] = useState([]);
    const [totalScore, setTotalScore] = useState(0);

    function handleDiceRoll() {
        const firstDice = Math.floor(Math.random() * 6) + 1;
        const secondDice = Math.floor(Math.random() * 6) + 1;
        const thirdDice = Math.floor(Math.random() * 6) + 1;
        const sum = firstDice + secondDice + thirdDice;

        setTotalScore(sum);
    }

    return (
        <View style={styles.container}>
            <View>
                <Text>Total: {totalScore}</Text>
            </View>
            <View>
                <Button title='Roll Dice' onPress={handleDiceRoll} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
