import CategoryGridTile from "@/components/CategoryGridTile";
import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../dummy-data";

function CategoriesScreen({ navigation }: { navigation: any }) {

  return (
    <View style={styles.container}>
      <FlatList numColumns={2} data={CATEGORIES} renderItem={({ item }) => <CategoryGridTile title={item.title} color={item.color} 
      onPress={() => navigation.navigate('MealsOverview', { categoryId: item.id })} />} keyExtractor={(item) => item.id} />
    </View>
  );
}

export default CategoriesScreen;    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24180f',
  },
});