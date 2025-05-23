import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {}
});

function FavouritesContextProvider ({children}) {
    // logic to manage this context
    const [favouriteMealIds, setFavouriteMealIds] =useState([]);

    function addFavouriteMeal(id) {
        setFavouriteMealIds((currentFavIds) => [...currentFavIds, id] ); // returns a new array to spread all curentFavIds & newly recoeved id as a lost item
    }

    function removeFavouriteMeal(id) {
        setFavouriteMealIds((currentFavIds) => currentFavIds.filter(mealId => mealId != id));  // filtered the mealId if false
    }

    const mealValues = {
        ids: favouriteMealIds,
        addFavourite: addFavouriteMeal,
        removeFavourite: removeFavouriteMeal
    }

    return(
        <FavouritesContext.Provider value={mealValues}>{children}</FavouritesContext.Provider>
    );
}

export default FavouritesContextProvider