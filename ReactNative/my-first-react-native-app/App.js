import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    function goalnputHandler(enteredTest) {
        setEnteredGoalText(enteredTest);
    }

    function addGoalHandler() {
        setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalnputHandler} />
                <Button title='Add goal' onPress={addGoalHandler} />
            </View>
            <View style={styles}>
                {courseGoals.map((goal) => (
                    <View style={styles.goalItem}>
                        <Text style={styles.goalText} key={goal}>
                            {goal}
                        </Text>
                    </View>
                ))}
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
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 8,
        backgroundColor: 'green'
    },
    goalText: {
        color: 'white',
        borderWidth: 2,
    }
});
