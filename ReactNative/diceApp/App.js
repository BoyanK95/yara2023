import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Total from './Total';

export default function App() {
    const [diceArr, setDiceArr] = useState([]);
    const [totalScore, setTotalScore] = useState(0);

    function handleDiceRoll() {
        const firstDice = Math.floor(Math.random() * 6) + 1;
        const secondDice = Math.floor(Math.random() * 6) + 1;
        const thirdDice = Math.floor(Math.random() * 6) + 1;
        const fourthDice = Math.floor(Math.random() * 6) + 1;
        const newDiceArr = [firstDice, secondDice, thirdDice, fourthDice];
        console.log(newDiceArr);
        const sum = firstDice + secondDice + thirdDice + fourthDice;

        setTotalScore(sum);
        setDiceArr(newDiceArr);
    }

    return (
        <View style={styles.container}>
            <Total total={totalScore} />
            <View style={styles.firstRow}>
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
            <View style={styles.rollDiceBtnContainer}>
                <Button style={styles.rollDiceBtn} title='Roll Dice' onPress={handleDiceRoll} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
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
        width: '80%'
    },
    rollDiceBtnContainer: {
        padding: 10,
        marginTop: 250,
        // backgroundColor: '#460668',
        borderRadius: 7
    }
    // rollDiceBtn: {
    //   color: 'black',
    //   backgroundColor: '#460668'
    // }
});
