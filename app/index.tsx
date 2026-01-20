import CategoriesScreen from "@/screens/CategoriesScreen";
import MealsOverviewScreen from "@/screens/MealsOverviewScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <>
      <StatusBar style="light" />
        <Stack.Navigator initialRouteName="Categories">
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
    </>
  );
}
