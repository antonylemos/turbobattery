import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    gap: 16,
  },
  header: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  span: {
    fontWeight: "500",
    fontSize: 14,
  },
  heading: {
    fontWeight: "900",
    fontSize: 120,
  },
  chargingCard: {
    backgroundColor: '#b6f0e9',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  batteryLevelCard: {
    flex: 1,
    backgroundColor: '#b6f0e9',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  }
});