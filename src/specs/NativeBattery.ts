import { type TurboModule, TurboModuleRegistry } from 'react-native';

export type BatteryStatus = 'CHARGING' | 'NOT_CHARGING';

export interface Spec extends TurboModule {
  getBatteryStatus: () => Promise<BatteryStatus>;
  getBatteryLevel: () => Promise<number>;
}

export default TurboModuleRegistry.get<Spec>('NativeBattery');
