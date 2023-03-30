import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  function handleDiceRoll() {
    
  }

    return (
        <View style={styles.container}>
            <Text></Text>
            <View>
                <Button title='Roll Dice' onPress={handleDiceRoll}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
