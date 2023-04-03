import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
    return (
        <LinearGradient colors={['#ffea00', 'lightgreen']} style={styles.rootScreen}>
            <ImageBackground
                source={require('./assets/images/background.png')}
                resizeMode='cover'
                style={styles.rootScreen}
                imageStyle={styles.backgrounImage}
            >
                <StartGameScreen />
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
