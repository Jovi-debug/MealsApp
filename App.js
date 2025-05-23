import { Button, StyleSheet } from "react-native";
import CatScreen from "./screens/CatScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons } from "react-native-vector-icons";
import FavouritesContextProvider from "./store/context/favourite-context";

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
        drawerContentStyle: { backgroundColor: "20b2aa" },
        drawerInactiveTintColor: "#778899",
        drawerActiveTintColor: "#800000",
        drawerActiveBackgroundColor: "#fdf5e6",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CatScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          title: "Favourites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouritesContextProvider >
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
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{ title: "About the meal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
