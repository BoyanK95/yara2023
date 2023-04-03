import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

function StartGameScreen({onPickedNumber}) {
    const [inputNumber, setInputNumber] = useState('');

    function numberInputHanlder(input) {
        setInputNumber(input);
    }

    function resetHandler() {
        setInputNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(inputNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number', 'Number has to be a number between 1 and 99', [
                { text: 'Okay', style: 'destructive', onPress: resetHandler }
            ]);
            return;
        }
        onPickedNumber(chosenNumber)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={numberInputHanlder}
                value={inputNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#065607',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    btnContainer: {
        flex: 1
    }
});
