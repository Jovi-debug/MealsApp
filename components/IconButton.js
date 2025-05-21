import { Pressable, StyleSheet } from "react-native";
import {Ionicons} from "@expo/vector-icons"

function IconButton({onPressedBtn, icon, color}) {
    return (
        <Pressable onPress={onPressedBtn} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
            <Ionicons name={icon} size={24} color= {color} />
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 6,
  },
  pressed: {
    opacity: 0.7,
  },
});