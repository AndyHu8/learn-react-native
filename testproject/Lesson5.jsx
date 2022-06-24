import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

//Text Inputs
export default function Lesson5() {
const [name, setName] = useState("Andy");
const [person, setPerson] = useState({name: "Xiaohu", age: 23});

  return (
    <View style={styles.container}>
        <Text>My real name is {name}.</Text>
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
});
