import { View, Text, StyleSheet } from 'react-native';

function Total({ total }) {
    return (
        <View style={styles.totalScoreContainer}>
            <Text style={styles.totalText}>TOTAL: {total}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    totalText: {
        color: 'darkgray'
    },
    totalScoreContainer: {
        backgroundColor: '#313131',
        padding: 7,
        borderRadius: 10,
        marginBottom: 10
    }
});

export default Total;
