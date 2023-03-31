import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './GoalItem';

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('Set your goals here!');
    const [courseGoals, setCourseGoals] = useState([]);

    function goalnputHandler(enteredTest) {
        setEnteredGoalText(enteredTest);
    }

    function addGoalHandler() {
        setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} value={enteredGoalText} onChangeText={goalnputHandler} />
                <Button title='Add goal' onPress={addGoalHandler} />
            </View>
            <View style={styles}>
                <FlatList data={courseGoals}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50
    },
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
    },
});
