import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    gap: 16,
  },
  header: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  refreshButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  refreshText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
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
    gap: 8,
  },
  batteryLevelCard: {
    flex: 1,
    backgroundColor: '#b6f0e9',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  levelDescription: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  statusIndicator: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  errorText: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
});