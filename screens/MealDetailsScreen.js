import { Text } from "react-native";

function MealDetailsScreen({route}) {
    const mealId = route.params.mealId;  //* in the params object we have meal id in the selectMealItemHandler

    return(
        <Text>
            Meal Detail Screen ({mealId})
        </Text>
    )
}

export default MealDetailsScreen;