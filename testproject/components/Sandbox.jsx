import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: "#ddd",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    boxOne: {
        flex: 1,
        backgroundColor: "violet",
        padding: 10,
    },
    boxTwo: {
        flex: 2,
        backgroundColor: "gold",
        padding: 10,
    },
    boxThree: {
        flex: 3,
        backgroundColor: "coral",
        padding: 10,
    },
    boxFour: {
        flex: 5,
        backgroundColor: "skyblue",
        padding: 10,
    }
});