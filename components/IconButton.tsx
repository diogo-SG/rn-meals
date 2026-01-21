import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

export default function IconButton({ icon, onPress }: { icon: keyof typeof Ionicons.glyphMap, onPress: () => void }) {

    return (
        <Pressable android_ripple={{ color: '#ccc' }} style={({pressed}) => [styles.button, pressed && styles.buttonPressed]} 
        onPress={onPress}>
            <Ionicons name={icon} size={24} color="white" />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 6,
        borderRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    },
}); 