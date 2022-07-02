import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

//Todo App
export default function Lesson9TodoApp() {
const [todos, setTodos] = useState([
    {text: "hol Kaffee", key: 1},
    {text: "App entwickeln", key: 2},
    {text: "einkaufen", key: 3},
]);

const pressHandler = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key)
  })
}

const submitHandler = (text) => {
  setTodos(prevTodos => {
    return [
      {text: text, key: Math.random().toString()},
      ...prevTodos
    ]
  })
}

  return (
    <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
            <AddTodo submitHandler={submitHandler}/>
            <View style={styles.list}>
                <FlatList
                data={todos}
                renderItem={({item}) => (
                    <TodoItem item={item} pressHandler={pressHandler}/>
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