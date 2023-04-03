import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import { SafeAreaView } from 'react-native';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);

    function pickedNumberHandler(pickedNumber) {
      setUserNumber(pickedNumber);
      setGameIsOver(false);
    }

    function gameOverHandler() {
        setGameIsOver(true);
    }

    let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} onGameOver={gameOverHandler} />;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} />;
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen />;
    }

    return (
        <LinearGradient colors={['#ffea00', 'lightgreen']} style={styles.rootScreen}>
            <ImageBackground
                source={require('./assets/images/background.png')}
                resizeMode='cover'
                style={styles.rootScreen}
                imageStyle={styles.backgrounImage}
            >
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    backgrounImage: {
        opacity: 0.15
    }
});
