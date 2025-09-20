import { useBattery } from '../../hooks/useBattery';

export function useHome() {
  const { batteryInfo, isLoading, error, refreshBatteryInfo } = useBattery();

  const getChargingText = () => {
    if (isLoading) return 'Carregando...';
    if (error) return 'Erro ao obter dados';
    return batteryInfo.isCharging ? 'Carregando... ⚡️' : 'Não carregando 🔋';
  };

  const getBatteryLevelText = () => {
    if (isLoading) return '--';
    if (error) return '❌';
    return `${batteryInfo.level}%`;
  };

  const getBatteryEmoji = () => {
    if (isLoading || error) return '🔋';
    
    if (batteryInfo.isCharging) return '⚡️';
    
    if (batteryInfo.level >= 80) return '🔋';
    if (batteryInfo.level >= 30) return '🔋';
    return '🪫';
  };

  return {
    batteryInfo,
    isLoading,
    error,
    refreshBatteryInfo,
    getChargingText,
    getBatteryLevelText,
    getBatteryEmoji,
  };
}