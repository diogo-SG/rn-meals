import CategoriesScreen from "@/screens/CategoriesScreen";
import MealsOverviewScreen from "@/screens/MealsOverviewScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function Index() {


  const headerStyle = {
    backgroundColor: '#b95d16',
    tintColor: 'white',
    titleStyle: { fontFamily: 'open-sans-bold' },
    cardStyle: { backgroundColor: '#795437' },
  };
  return (
    <>
      <StatusBar style="light" />
        <Stack.Navigator  screenOptions={{headerStyle}} initialRouteName="Categories">
          <Stack.Screen name="Categories" options={{ title: 'All Categories' }}
          component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" 
          //options={({ route, navigation }) => ({ title: (route.params as { categoryId: string })?.categoryId })} 
          component={MealsOverviewScreen} />
        </Stack.Navigator>
    </>
  );
}
