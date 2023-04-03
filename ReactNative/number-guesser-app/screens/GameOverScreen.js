import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';

function GameOverScreen(params) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/endGoal.png')} />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlightText}>X</Text> rounds to guess the number
                <Text style={styles.highlightText}>Y</Text>
            </Text>
            <PrimaryButton>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignContent: 'center',
    },
    imageContainer: {
        width: 250,
        height: 250,
        borderRadius: 250,
        borderWidth: 3,
        borderColor: 'darkblue',
        overflow: 'hidden',
        margin: 36,
        alignContent: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        textAlign: 'center',
        marginVertical: 23
    },
    highlightText: {
        fontWeight: 'bold',
        color: '#d46103',
        fontSize: 21
    }
});
