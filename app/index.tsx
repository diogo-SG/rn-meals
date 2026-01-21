import CategoriesScreen from "@/screens/CategoriesScreen";
import FavouritesScreen from "@/screens/FavouritesScreen";
import MealDetailsScreen from "@/screens/MealDetailsScreen";
import MealsOverviewScreen from "@/screens/MealsOverviewScreen";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const headerStyle = {
  backgroundColor: '#b95d16',
  tintColor: 'white',
  titleStyle: { fontFamily: 'open-sans-bold' },
  cardStyle: { backgroundColor: '#795437' },
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerStyle, drawerActiveBackgroundColor: '#b95d16', drawerActiveTintColor: 'white', drawerContentContainerStyle: { backgroundColor: '#795437' } }}>
      <Drawer.Screen name="Categories" options={{ title: 'All Categories', drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} /> }} component={CategoriesScreen} />
      <Drawer.Screen name="Favourites" options={{ title: 'Favourites', drawerIcon: ({ color, size }) => <Ionicons name="heart" color={color} size={size} /> }} component={FavouritesScreen} />
    </Drawer.Navigator>
  );
}   

export default function Index() {


  
  return (
    <>
      <StatusBar style="light" />
        <Stack.Navigator  screenOptions={{headerStyle}} initialRouteName="Categories">
          <Stack.Screen name="Categories" options={{ title: 'All Categories', headerShown: false }} component={DrawerNavigator} />
          <Stack.Screen name="MealsOverview" options={{ title: 'Meals Overview' }} component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetails" options={{ title: 'Meal Details' }} component={MealDetailsScreen} /> 
        </Stack.Navigator>
    </>
  );
}
