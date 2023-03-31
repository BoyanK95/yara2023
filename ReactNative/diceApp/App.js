import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [diceArr, setDiceArr] = useState([]);
    const [totalScore, setTotalScore] = useState(0);

    function handleDiceRoll() {
        const firstDice = Math.floor(Math.random() * 6) + 1;
        const secondDice = Math.floor(Math.random() * 6) + 1;
        const thirdDice = Math.floor(Math.random() * 6) + 1;
        const fourthDice = Math.floor(Math.random() * 6) + 1;
        const newDiceArr = [firstDice, secondDice, thirdDice, fourthDice]
        const sum = firstDice + secondDice + thirdDice + fourthDice;

        setTotalScore(sum);
        setDiceArr(newDiceArr)
    }

    return (
        <View style={styles.container}>
            <View style={styles.totalScoreContainer}>
                <Text style={styles.totalText}>TOTAL: {totalScore}</Text>
            </View>
            <View style={styles.firstRow}>
              <View style={styles.diceContainer}>
                <Text style={styles.totalText}>{diceArr[0]}</Text>
              </View>
              <View style={styles.diceContainer}>
                <Text style={styles.totalText}>{diceArr[1]}</Text>
              </View>
              <View style={styles.diceContainer}>
                <Text style={styles.totalText}>{diceArr[2]}</Text>
              </View>
            </View>
              <View style={styles.diceContainer}>
                <Text style={styles.totalText}>{diceArr[3]}</Text>
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
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    totalScoreContainer: {
        backgroundColor: '#313131',
        padding: 7,
        borderRadius: 10,
        marginBottom: 10
    },
    totalText: {
        color: 'darkgray'
    },
    diceContainer: {
      padding: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#525252',
      margin: 7
    },
    firstRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '80%',
    }
});
