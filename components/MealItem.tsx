import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Meal from "../models/meal";

function MealItem({ meal }: { meal: Meal }) {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: '#ccc' }} style={({pressed}) => [styles.button, pressed && styles.buttonPressed]} onPress={() => {}}>
        <View>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{meal.title}</Text>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{meal.duration}m</Text>
          <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{meal.affordability.toUpperCase()}</Text>
        </View>
        </View>
      </Pressable>
    </View> 
  );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow:  Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
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
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});