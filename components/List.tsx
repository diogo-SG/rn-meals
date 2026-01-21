import { StyleSheet, Text, View } from "react-native";
export default function List({ items }: { items: string[] }) {
    return (
        <View style={styles.listItem}>
            {items.map((item) => <Text style={styles.itemText} key={item}>{item}</Text>)}
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
       borderRadius: 6,
       paddingHorizontal: 8,
       paddingVertical: 4,
       marginVertical: 4,
       backgroundColor: '#e2b497',
       color: '#351401',
       fontSize: 16,
       fontWeight: 'bold',
       textAlign: 'center',
    },
    itemText: {
        color: '#351401',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});