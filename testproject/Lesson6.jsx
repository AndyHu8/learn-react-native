import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useState } from 'react';

//Lists & ScrollView
export default function Lesson6() {
const [people, setPeople] = useState([
    {name: "andy", key: 1},
    {name: "hu", key: 2},
    {name: "xiaohu", key: 3},
    {name: "andy", key: 1},
    {name: "hu", key: 2},
    {name: "xiaohu", key: 3},
    {name: "andy", key: 1},
    {name: "hu", key: 2},
    {name: "xiaohu", key: 3}
]);

  return (
    <View style={styles.container}>
        <ScrollView>
            {people.map(item => (
                <View key={item.key}>
                    <Text style={styles.item}>{item.name}</Text>
                </View>
                )
            )}
        </ScrollView>
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
  }
});
