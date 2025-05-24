import { Pressable, View, Text, StyleSheet, Platform, ImageBackground } from "react-native";

function CategoryGridTile({ title, color, image, onPressGrid }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPressGrid}
      >
        <ImageBackground
          source={image}
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 8 }}
          resizeMode="cover"
        >
          {/* Transparent overlay with color */}
          <View style={[styles.overlay, { backgroundColor: color + "AA" }]} />

          <View style={styles.innerContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "#fffafa",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,  // fills the entire ImageBackground
    borderRadius: 8,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "900",
    fontSize: 18,
    color: "#000000",  // so text is readable on top of image+overlay
  },
});
