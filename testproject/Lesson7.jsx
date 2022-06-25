import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useState } from 'react';

//Flat List Component
export default function Lesson7() {
const [people, setPeople] = useState([
    {name: "andy", id: 1},
    {name: "hu", id: 2},
    {name: "xiaohu", id: 3},
    {name: "andy", id: 1},
    {name: "hu", id: 2},
    {name: "xiaohu", id: 3},
    {name: "andy", id: 1},
    {name: "hu", id: 2},
    {name: "xiaohu", id: 3}
]);

  return (
    <View style={styles.container}>
        <FlatList 
        numColumns={2}
            keyExtractor={(item) => item.id}
            data={people}
            renderItem={({item}) => (
                <Text style={styles.item}>{item.name}</Text>
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
