import { Text, View, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavouritesContext } from "../store/context/favourite-context";
import { MEALS } from "../data/dummy-data";

function FavouritesScreen() {
    const favMealsContext = useContext(FavouritesContext)
    const favMeals = MEALS.filter(meal => favMealsContext.ids.includes(meal.id))  //selects all meals that are part of the favMeals ids array
    
    if (favMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favourite meals yet!</Text>
            </View>
        )
    }

    return (
        <MealsList items={favMeals}/>
    );
}

export default FavouritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
    }
})