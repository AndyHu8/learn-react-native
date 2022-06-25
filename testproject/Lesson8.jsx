import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

//Touchable Components
export default function Lesson8() {
const [people, setPeople] = useState([
    {name: "andy", id: 1},
    {name: "hu", id: 2},
    {name: "xiaohu", id: 3},
    {name: "andy", id: 4},
    {name: "hu", id: 5},
    {name: "xiaohu", id: 6},
    {name: "andy", id: 7},
    {name: "hu", id: 8},
    {name: "xiaohu", id: 9}
]);

const pressHandler = (id) => {
    setPeople((prevPeople) => {
        return prevPeople.filter(person => person.id != id) //Nimmt alle außer den einen der gleich ist
    })
}

  return (
    <View style={styles.container}>
        <FlatList 
        numColumns={2}
            keyExtractor={(item) => item.id}
            data={people}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => pressHandler(item.id)}>
                    <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>
            )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  item: {
    marginTop: 24,
    padding: 30,
    fontSize: 24,
    backgroundColor: "pink",
    marginHorizontal: 10,
  }
});
