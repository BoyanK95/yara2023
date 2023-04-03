import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/Title';
import { generateRandomBetween } from '../helpers/generateRandomNum';
import { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';


function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    console.log('initilaGuess', initialGuess);
    

    const [currentGuess , setCurrentGuess] = useState(initialGuess)
    console.log('currentGuess',currentGuess);
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <Text>{currentGuess}</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Text>Higher or lower?</Text>
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
