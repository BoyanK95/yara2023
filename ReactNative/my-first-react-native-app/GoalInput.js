import { useState } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalnputHandler(enteredTest) {
        setEnteredGoalText(enteredTest);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                value={enteredGoalText}
                placeholder='Set your goals here!'
                onChangeText={goalnputHandler}
            />
            <Button title='Add Goal' onPress={props.onAddGoal} />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'darkgray',
        width: '80%',
        marginRight: 8,
        padding: 8
    }
});
