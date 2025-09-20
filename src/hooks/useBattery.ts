import { useEffect, useState } from 'react';
import NativeBattery, { BatteryStatus } from '../specs/NativeBattery';

const statusColor = {
  full: '#b6f0e9',
  half: '#ffeb9d',
  low: '#fbadad',
} as const;

export type BatteryLevelStatus = 'full' | 'half' | 'low';

export interface BatteryInfo {
  level: number;
  isCharging: boolean;
  levelStatus: BatteryLevelStatus;
  backgroundColor: string;
}

export function useBattery() {
  const [batteryLevel, setBatteryLevel] = useState<number>(0);
  const [batteryStatus, setBatteryStatus] = useState<BatteryStatus>('NOT_CHARGING');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getBatteryLevelStatus = (level: number): BatteryLevelStatus => {
    if (level >= 80) return 'full';
    if (level >= 30) return 'half';
    return 'low';
  };

  const fetchBatteryInfo = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const [level, status] = await Promise.all([
        NativeBattery?.getBatteryLevel(),
        NativeBattery?.getBatteryStatus(),
      ]);

      if (level !== undefined) {
        setBatteryLevel(level);
      }
      if (status !== undefined) {
        setBatteryStatus(status);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao obter informações da bateria');
      console.error('Erro ao obter informações da bateria:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBatteryInfo();
    
    const interval = setInterval(fetchBatteryInfo, 30000);
    
    return () => clearInterval(interval);
  }, []);

  console.log(batteryStatus)

  const batteryInfo: BatteryInfo = {
    level: batteryLevel,
    isCharging: batteryStatus === 'CHARGING',
    levelStatus: getBatteryLevelStatus(batteryLevel),
    backgroundColor: statusColor[getBatteryLevelStatus(batteryLevel)],
  };

  return {
    batteryInfo,
    isLoading,
    error,
    refreshBatteryInfo: fetchBatteryInfo,
  };
}