import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';

//Touchable Components
export default function Lesson9TodoApp() {
const [todos, setTodos] = useState([
    {text: "hol Kaffee", key: 1},
    {text: "App entwickeln", key: 2},
    {text: "einkaufen", key: 3},
]);

  return (
    <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
            {/*Todo form*/}
            <View style={styles.list}>
                <FlatList
                data={todos}
                renderItem={({item}) => (
                    <Text>{item.text}</Text>
                )}
                />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 40,
  }
});