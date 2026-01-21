import List from '@/components/List';
import { MealDetails } from '@/components/MealDetails';
import { MEALS } from '@/dummy-data';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Meal from '../models/meal';

export default function MealDetailsScreen({ route }: { route: any }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{ uri: meal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal?.title}</Text>
      <MealDetails meal={meal as unknown as Meal} />
      <View style={styles.listContainer}>
        <Text style={styles.subtitle}>Ingredients:</Text>
        {meal?.ingredients.map((ingredient) => (
          <List items={meal?.ingredients as string[]} key={ingredient} />
        ))}
        <Text style={styles.subtitle}>Steps</Text>
        <List items={meal?.steps as string[]} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8
  },
  ingredients: {
    margin: 16,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8
  },
  steps: {
    margin: 16,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 12,
    color: '#5e3e2a',
    borderBottomColor: '#5e3e2a',
    borderBottomWidth: 2,
    padding: 6
  },
  listContainer: {
    marginHorizontal: 12,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8
  } 
});
