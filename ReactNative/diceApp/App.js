import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Dice from './Dice';
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
                <Dice dice={diceArr[1]}/>
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
