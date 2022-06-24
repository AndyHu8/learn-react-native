import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import { yellow } from '@material-ui/core/colors';

//Text Inputs
export default function Lesson5() {
const [name, setName] = useState("Andy");
const [age, setAge] = useState("23");

  return (
    <View style={styles.container}>
        <Text>Choose your name:</Text>
        <TextInput style={styles.textInput} placeholder="Name" onChangeText={(e) => setName(e)} multiline/>
        <Text>Choose your age</Text>
        <TextInput style={styles.textInput} placeholder="Age" onChangeText={(e) => setAge(e)}  keyboardType='numeric'/>
        <Text>My real name is {name} and im {age} years old.</Text>
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

  textInput: {
    padding: 10,
    backgroundColor: yellow,
    border: "1px solid black",
    margin: 10,
  }
});
