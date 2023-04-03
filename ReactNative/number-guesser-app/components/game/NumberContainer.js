import { View, Text, StyleSheet } from 'react-native';

function NumberContainer({ children }) {
    <View>
        <Text>{children}</Text>
    </View>;
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: 'darkgreen',
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: 'darkgreen',
        fontSize: 36,
        fontWeight: 'bold'
    }
});
