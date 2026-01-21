import { StyleSheet, Text, View } from "react-native";
import Meal from "../models/meal";

export function MealDetails({meal}: {meal: Meal}) {

    return (
         <View style={styles.details}>
          <Text style={styles.detailItem}>{meal.duration}m</Text>
          <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{meal.affordability.toUpperCase()}</Text>
        </View>     
    );
}   

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});