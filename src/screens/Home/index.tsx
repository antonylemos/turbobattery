import { Text, View, TouchableOpacity, RefreshControl, ScrollView } from "react-native";

import { styles } from "./styles";
import { useHome } from "./useHome";

export function Home() {
  const {
    batteryInfo,
    isLoading,
    error,
    refreshBatteryInfo,
    getChargingText,
    getBatteryLevelText,
    getBatteryEmoji,
  } = useHome();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={refreshBatteryInfo}
          colors={['#007AFF']}
          tintColor="#007AFF"
        />
      }
    >
      <View style={styles.header}>
        <Text style={styles.title}>Turbo Battery</Text>
        <TouchableOpacity onPress={refreshBatteryInfo} style={styles.refreshButton}>
          <Text style={styles.refreshText}>🔄 Atualizar</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.chargingCard, { backgroundColor: batteryInfo.backgroundColor }]}>
        <Text style={styles.span}>
          {getChargingText()} {getBatteryEmoji()}
        </Text>
        {error && (
          <Text style={styles.errorText}>
            Toque para tentar novamente
          </Text>
        )}
      </View>

      <View style={[styles.batteryLevelCard, { backgroundColor: batteryInfo.backgroundColor }]}>
        <Text style={styles.heading}>{getBatteryLevelText()}</Text>
        <Text style={styles.levelDescription}>
          Nível da bateria
        </Text>
        {!isLoading && !error && (
          <View style={styles.statusIndicator}>
            <Text style={styles.statusText}>
              Status: {batteryInfo.levelStatus === 'full' ? 'Ótimo' : 
                      batteryInfo.levelStatus === 'half' ? 'Médio' : 'Baixo'}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  )
}