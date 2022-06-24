import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World</Text>
      </View>
      <View style={styles.body}>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quam?</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quam?</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quam?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    backgroundColor: "red",
    padding: 20,
  },

  boldText: {
    fontWeight: "bold",
  },

  body: {
    backgroundColor: "yellow",
    padding: 20,
    margin: 20
  }
});
