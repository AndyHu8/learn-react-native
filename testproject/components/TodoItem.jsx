import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodItem({item, pressHandler}) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        border: "1px dashed #bbb",
        borderRadius: 10,
    }
  });