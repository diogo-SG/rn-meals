import { MealDetails } from '@/components/MealDetails';
import { MEALS } from '@/dummy-data';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Meal from '../models/meal';

export default function MealDetailsScreen({ route }: { route: any }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: meal?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal?.title}</Text>
      <MealDetails meal={meal as unknown as Meal} />
      <ScrollView>
        <Text style={styles.subtitle}>Ingredients:</Text>
        {meal?.ingredients.map((ingredient) => (
          <Text style={styles.listItem} key={ingredient}>
            {ingredient}
          </Text>
        ))}
        <Text style={styles.subtitle}>Steps</Text>
        {meal?.steps.map((step) => (
          <Text style={styles.listItem} key={step}>
            {step}
          </Text>
        ))}
      </ScrollView>
    </View>
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
  listItem: {
    margin: 16,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    fontSize: 16,
    fontWeight: 'bold'
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
  }
});
