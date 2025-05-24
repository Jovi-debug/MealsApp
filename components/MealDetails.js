import { View, Text, StyleSheet } from "react-native";

//* By adding the props "style" & "textStyle" it will make it possible to change the text color in the MealDetails screen, without change it in the MealOverviewScreen
function MealDetails({duration, complexity, affordability, style, textStyle}) {
  return (
    <View style={[styles.detailsZone, style]}>
  <View style={styles.cell}><Text style={[styles.detailItemZone, textStyle]}>{duration}</Text></View>
  <View style={[styles.cell, styles.complexitySty]}><Text style={[styles.detailItemZone, textStyle]}>{complexity.toUpperCase()}</Text></View>
  <View style={styles.cell}><Text style={[styles.detailItemZone, textStyle]}>{affordability.toUpperCase()}</Text></View>
</View>

  );
}

export default MealDetails;

const styles = StyleSheet.create({
  detailsZone: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 8,
  },
  detailItemZone: {
    marginHorizontal: 2,
    fontSize: 12,
  },
  cell: {
  flex: 1,
  alignItems: "flex-start",
  paddingLeft: 15,
},
complexitySty: {
  paddingLeft: 1
}

});
