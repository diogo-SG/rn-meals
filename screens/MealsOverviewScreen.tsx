import MealItem from "@/components/MealItem";
import { MEALS } from "@/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";

function MealsOverviewScreen({route}: {route: any}) {
  const categoryId = route.params.categoryId;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
      <FlatList data={meals} renderItem={({ item }) => <MealItem meal={item} />} keyExtractor={(item) => item.id} />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});