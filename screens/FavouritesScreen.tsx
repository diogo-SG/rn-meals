import MealItem from "@/components/MealItem";
import { MEALS } from "@/dummy-data";
import Meal from "@/models/meal";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function FavouritesScreen() {
   
  const favourites = useSelector((state: any) => state.favourites.ids);
  const meals = MEALS.filter((meal: Meal) => favourites.includes(meal.id));

  if (meals.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No favourites found</Text>
      </View>
    );
  }
  
    return (
    <View style={styles.container}>
      <FlatList data={meals} renderItem={({ item }) => <MealItem meal={item as Meal} />} keyExtractor={(item) => item.id} />
    </View>
  );
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});