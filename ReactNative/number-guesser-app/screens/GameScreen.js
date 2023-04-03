import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/Title';
import { generateRandomBetween } from '../helpers/generateRandomNum';
import { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';

let minNum = 1
let maxNum = 100

function GameScreen({ userNumber }) {
    const initialGuess = generateRandomBetween(minNum, maxNum, userNumber);

    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(direction) {
        if (direction === 'lower') {
            maxNum = currentGuess
        } else {
            minNum = currentGuess + 1
        }
        const newRandomNum = generateRandomBetween(minNum, maxNum, currentGuess)
        setCurrentGuess(newRandomNum)
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Text>Higher or lower?</Text>
            <View>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
});
