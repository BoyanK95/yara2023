import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './GoalInput';
import GoalItem from './GoalItem';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    function addGoalHandler() {
        setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}]);
    }

    function deleteGoalHandler() {
        console.log('Test');
    }
    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler}/>
            <View style={styles}>
                <FlatList data={courseGoals} renderItem={(itemData) => <GoalItem onDeleteItem={deleteGoalHandler} text={itemData.item.text} />} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50
    },
});
