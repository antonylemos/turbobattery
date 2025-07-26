import { Text, View } from "react-native";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Turbo Battery</Text>
      </View>

      <View style={styles.chargingCard}>
        <Text style={styles.span}>Carregando... ⚡️</Text>
      </View>

      <View style={styles.batteryLevelCard}>
        <Text style={styles.heading}>90%</Text>
      </View>
    </View>
  )
}