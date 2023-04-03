import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children, onPress }) {
    
    return (
        <View style={styles.btnOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed ? [styles.btnInnercontainer, styles.pressed] : styles.btnInnercontainer
                }
                onPress={onPress}
                android_ripple={{ color: '#086422' }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    btnOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    btnInnercontainer: {
        backgroundColor: '#0d8e31',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
});
