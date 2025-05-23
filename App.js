import { Button, StyleSheet } from "react-native";
import CatScreen from "./screens/CatScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";

const Stack = createNativeStackNavigator();

//Drawer navigation
const Drawer = createDrawerNavigator();
// Nested navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#20b2aa" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#fffff0" },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CatScreen}
        options={{
          title: "All Categories",
        }}
      />
      <Drawer.Screen name="Favourites" component={FavouritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#20b2aa" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#fffff0" },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} options={{title: "About the meal"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
