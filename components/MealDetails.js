import { View, Text, StyleSheet } from "react-native";

function MealDetails({duration, complexity, affordability}) {
  return (
    <View style={styles.detailsZone}>
      <Text style={styles.detailItemZone}>{duration}</Text>
      <Text style={styles.detailItemZone}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItemZone}>{affordability.toUpperCase()}</Text>
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
