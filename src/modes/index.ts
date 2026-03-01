import { AppMode, AppModeStrategy } from './types';
import { clinicStrategy } from './clinic.strategy';
import { outreachStrategy } from './outreach.strategy';

const strategies: Record<AppMode, AppModeStrategy> = {
  clinic: clinicStrategy,
  outreach: outreachStrategy,
};

export function resolveStrategy(mode: AppMode): AppModeStrategy {
  return strategies[mode];
}
