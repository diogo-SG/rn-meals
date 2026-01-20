import MealItem from "@/components/MealItem";
import { MEALS, CATEGORIES as categories } from "@/dummy-data";
import { FlatList, StyleSheet, View } from "react-native";

function MealsOverviewScreen({route, navigation}: {route: any, navigation: any}) {
  const categoryId = route.params.categoryId;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
  const category = categories.find((category) => category.id === categoryId);

const categoryTitle = category?.title;

navigation.setOptions({
  title: categoryTitle,
});

  return (
    <View style={styles.container}>
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