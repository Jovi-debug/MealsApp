import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
  new Category(
    "c1",
    "Italian",
    "#f5428d",
    require("../assets/foodImg/Spaghetti.jpg")
  ),
  new Category(
    "c2",
    "Quick & Easy",
    "#f54242",
    require("../assets/foodImg/FoodWallpaper.jpg")
  ),
  new Category(
    "c3",
    "Hamburgers",
    "#f5a442",
    require("../assets/foodImg/hamburgers.jpg")
  ),
  new Category(
    "c4",
    "German",
    "#f5d142",
    require("../assets/foodImg/germanFood.png")
  ),
  new Category(
    "c5",
    "Light & Lovely",
    "#368dff",
    require("../assets/foodImg/easyLunch.jpg")
  ),
  new Category(
    "c6",
    "Ushqim Shqiptar",
    "#41d95d",
    require("../assets/foodImg/ushqimShqiptar.jpeg")
  ),
  new Category(
    "c7",
    "Breakfast",
    "#9eecff",
    require("../assets/foodImg/Breakfast.jpg")
  ),
  new Category(
    "c8",
    "Asian",
    "#b9ffb0",
    require("../assets/foodImg/asianFood.png")
  ),
  new Category(
    "c9",
    "French",
    "#ffc7ff",
    require("../assets/foodImg/frenchFood.jpg")
  ),
  new Category(
    "c10",
    "Summer",
    "#47fced",
    require("../assets/foodImg/summerFood.jpg")
  ),
  new Category(
    "c11",
    "Dessert",
    "#556b2f",
    require("../assets/foodImg/dessert.jpg")
  ),
  new Category("c12", "Soup", "#f0e68c", require("../assets/foodImg/Soup.jpg")),
];

export const MEALS = [
  new Meal(
    "m1",
    ["c1", "c2"],
    "Spaghetti with Tomato Sauce",
    "affordable",
    "simple",
    require("../assets/foodImg/Spaghetti.jpg"),
    "20 min",
    [
      "4 Tomatoes",
      "1 Tablespoon of Olive Oil",
      "1 Onion",
      "250g Spaghetti",
      "Spices",
      "Cheese (optional)",
    ],
    [
      "Cut the tomatoes and the onion into small pieces.",
      "Boil some water - add salt to it once it boils.",
      "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
      "In the meantime, heaten up some olive oil and add the cut onion.",
      "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
      "The sauce will be done once the spaghetti are.",
      "Feel free to add some cheese on top of the finished dish.",
    ],
    false, // isGlutenFree       FROM meal.js
    true, // isVegan
    true, //isVegetarian
    true //isLactoseFree
  ),

  new Meal(
    "m2",
    ["c2"],
    "Toast Hawaii",
    "affordable",
    "simple",
    require("../assets/foodImg/ToastHawaii.jpg"),
    "10 min",
    [
      "1 Slice White Bread",
      "1 Slice Ham",
      "1 Slice Pineapple",
      "1-2 Slices of Cheese",
      "Butter",
    ],
    [
      "Butter one side of the white bread",
      "Layer ham, the pineapple and cheese on the white bread",
      "Bake the toast for round about 10 minutes in the oven at 200°C",
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    "m3",
    ["c3"],
    "Classic Hamburger",
    "pricey",
    "simple",
    require("../assets/foodImg/classicHamburger.jpg"),
    "45 min",
    [
      "300g Cattle Hack",
      "1 Tomato",
      "1 Cucumber",
      "1 Onion",
      "Ketchup",
      "2 Burger Buns",
    ],
    [
      "Form 2 patties",
      "Fry the patties for c. 4 minutes on each side",
      "Quickly fry the buns for c. 1 minute on each side",
      "Bruch buns with ketchup",
      "Serve burger with tomato, cucumber and onion",
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    "m4",
    ["c4"],
    "Wiener Schnitzel",
    "luxurious",
    "challenging",
    require("../assets/foodImg/WienerSchnitzel.jpg"),
    "60 min",
    [
      "8 Veal Cutlets",
      "4 Eggs",
      "200g Bread Crumbs",
      "100g Flour",
      "300ml Butter",
      "100g Vegetable Oil",
      "Salt",
      "Lemon Slices",
    ],
    [
      "Tenderize the veal to about 2–4mm, and salt on both sides.",
      "On a flat plate, stir the eggs briefly with a fork.",
      "Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.",
      "Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.",
      "Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.",
      "Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.",
      "Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.",
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    "m5",
    ["c2", "c5", "c10"],
    "Salad with Smoked Salmon",
    "luxurious",
    "simple",
    require("../assets/foodImg/SadalWithSmokedSalmon.jpg"),
    "15 min",
    [
      "Arugula",
      "Lamb's Lettuce",
      "Parsley",
      "Fennel",
      "200g Smoked Salmon",
      "Mustard",
      "Balsamic Vinegar",
      "Olive Oil",
      "Salt and Pepper",
    ],
    [
      "Wash and cut salad and herbs",
      "Dice the salmon",
      "Process mustard, vinegar and olive oil into a dessing",
      "Prepare the salad",
      "Add salmon cubes and dressing",
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    "m6",
    ["c6"],
    "Gurabije",
    "affordable",
    "easy",
    require("../assets/foodImg/Gurabije.jpg"),
    "20 min",
    [
      "2 vez",
      "1 got e gjys sheqer",
      "1 got vaj",
      "1 got qumesht",
      "6 gota gjys miell",
      "1 paket e gjys pluhur fryrjeje",
      "1 paket vanille",
    ],
    [
      "Rrafi bezet",
      "Hidh sheqer duke perzier",
      "Hidhi vaj e qumesht e perzihi",
      "pastaj hidh miell. Duke hedh, duke perzi",
      "Ne fund hidhi fryres edhe vanille edhe perzihi prap",
      "Merr tepsi edhe hidh icik miell qe te mos ngjisi ose tek pjata furres",
      "Boji si topa te vogel e shtype brumin",
      "Fute ne furr me 220 grad",
      "Leji 1ß-15 min te ftofen kur te mbaroj",
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    "m7",
    ["c7"],
    "Pancakes",
    "affordable",
    "simple",
    require("../assets/foodImg/pancakes.jpg"),
    "20 min",
    [
      "1 1/2 Cups all-purpose Flour",
      "3 1/2 Teaspoons Baking Powder",
      "1 Teaspoon Salt",
      "1 Tablespoon White Sugar",
      "1 1/4 cups Milk",
      "1 Egg",
      "3 Tablespoons Butter, melted",
    ],
    [
      "In a large bowl, sift together the flour, baking powder, salt and sugar.",
      "Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.",
      "Heat a lightly oiled griddle or frying pan over medium high heat.",
      "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.",
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    "m8",
    ["c8"],
    "Creamy Indian Chicken Curry",
    "pricey",
    "challenging",
    require("../assets/foodImg/chickenCurry.jpg"),
    "35 min",
    [
      "4 Chicken Breasts",
      "1 Onion",
      "2 Cloves of Garlic",
      "1 Piece of Ginger",
      "4 Tablespoons Almonds",
      "1 Teaspoon Cayenne Pepper",
      "500ml Coconut Milk",
    ],
    [
      "Slice and fry the chicken breast",
      "Process onion, garlic and ginger into paste and sauté everything",
      "Add spices and stir fry",
      "Add chicken breast + 250ml of water and cook everything for 10 minutes",
      "Add coconut milk",
      "Serve with rice",
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    "m9",
    ["c9"],
    "Chocolate Souffle",
    "affordable",
    "hard",
    require("../assets/foodImg/ChocolateSouffle.jpg"),
    "45 min",
    [
      "1 Teaspoon melted Butter",
      "2 Tablespoons white Sugar",
      "2 Ounces 70% dark Chocolate, broken into pieces",
      "1 Tablespoon Butter",
      "1 Tablespoon all-purpose Flour",
      "4 1/3 tablespoons cold Milk",
      "1 Pinch Salt",
      "1 Pinch Cayenne Pepper",
      "1 Large Egg Yolk",
      "2 Large Egg Whites",
      "1 Pinch Cream of Tartar",
      "1 Tablespoon white Sugar",
    ],
    [
      "Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.",
      "Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.",
      "Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.",
      "Place chocolate pieces in a metal mixing bowl.",
      "Place bowl over a pan of about 3 cups hot water over low heat.",
      "Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.",
      "Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.",
      "Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.",
      "Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.",
      "Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.",
      "Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.",
      "whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.",
      "Transfer a little less than half of egg whites to chocolate.",
      "Mix until egg whites are thoroughly incorporated into the chocolate.",
      "Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.",
      "Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.",
      "Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.",
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    "m10",
    ["c2", "c5", "c10"],
    "Asparagus Salad with Cherry Tomatoes",
    "luxurious",
    "simple",
    require("../assets/foodImg/AsparagusSalad.jpg"),
    "30 min",
    [
      "White and Green Asparagus",
      "30g Pine Nuts",
      "300g Cherry Tomatoes",
      "Salad",
      "Salt, Pepper and Olive Oil",
    ],
    [
      "Wash, peel and cut the asparagus",
      "Cook in salted water",
      "Salt and pepper the asparagus",
      "Roast the pine nuts",
      "Halve the tomatoes",
      "Mix with asparagus, salad and dressing",
      "Serve with Baguette",
    ],
    true,
    true,
    true,
    true
  ),
  new Meal(
    "m13",
    ["c12"],
    "Broccoli Cheddar soup",
    "affordable",
    "challenging",
    require("../assets/foodImg/BroccoliCheddarSoup.jpg"),
    "40 min",
    [
      "60 g Butter",
      "1 Zwiebel",
      "30 g Mehl",
      "400ml Wasser",
      "2 TL Instant Hühnerbrühe",
      "400 ml Schlagsahne",
      "300 g Brokkoli",
      "4 mittlere Karotten",
      "200 g Gelber Cheddar",
      "½ TL Muskat",
      "Salz",
      "Pfeffer",
    ],
    [
      "Butter in einem großen, beschichteten Topf bei mittlerer Hitze schmelzen. Zwiebel fein hacken und darin ca. 3 Minuten andünsten lassen. Mehl zugeben und alles gut anschwitzen. Wasser mit Brühe verrühren und nach und nach unter ständigem Rühren zum Mehlgemisch geben. So lange rühren, bis keine Klümpchen mehr zu sehen sind. Anschließend Sahne zugeben und unterrühren. Ca. 3 Minuten leicht köcheln lassen. Sofern die Konsistenz für den eigenen Geschmack zu dick ist, gerne noch Wasser zufügen.",
      "Brokkoli Röschen vom Strunk entfernen, Karotten zunächst schälen und dann raspeln. Beides in die Suppe einrühren und 10 Minuten gar kochen.",
      "Herd abschließend herunterstellen, Cheddar zufügen und unterrühren. Sobald dieser geschmolzen ist die Suppe mit Muskat, Salz und Pfeffer abschmecken und noch warm mit Röstbrot genießen.",
    ],
    true,
    false,
    true,
    false
  ),
];
