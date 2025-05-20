import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


function CatScreen({navigation}) {
    // helper function
function renderCategoryItem(itemData) {
    function pressHandler() {
        navigation.navigate("MealOverview", {
            categoryId: itemData.item.id,
        }); //navigates the categories grid on press to the specific meal overview
    };

    return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPressGrid={pressHandler}/>
    );
}

    return (
        <FlatList 
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}

export default CatScreen;