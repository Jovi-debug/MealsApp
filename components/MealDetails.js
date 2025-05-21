import { View, Text, StyleSheet } from "react-native";

//* By adding the props "style" & "textStyle" it will make it possible to change the text color in the MealDetails screen, without change it in the MealOverviewScreen
function MealDetails({duration, complexity, affordability, style, textStyle}) {
  return (
    <View style={[styles.detailsZone, style]}>
      <Text style={[styles.detailItemZone, textStyle]}>{duration}</Text>
      <Text style={[styles.detailItemZone, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItemZone, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  detailsZone: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItemZone: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
