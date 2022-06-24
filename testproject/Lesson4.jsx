import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

//Using State
export default function Lesson4() {
const [name, setName] = useState("Andy");
const [person, setPerson] = useState({name: "Xiaohu", age: 23});

  return (
    <View style={styles.container}>
        <Text>My real name is {name}.</Text>
        <Text>My name is {person.name}</Text>
        <Text>and im {person.age} y o.</Text>
        <View style={styles.buttonContainer}>
            <Button title='Update name' onPress={() => setPerson({name: "Andy", age: 0})}/>
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

  buttonContainer: {
    marginTop: 20,
  }
});
