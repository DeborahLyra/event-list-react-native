import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type ParticipantProps = {
  name: string,
  onDelete: () => void
}

export function Participant({ name, onDelete }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button}
        onPress={onDelete}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
