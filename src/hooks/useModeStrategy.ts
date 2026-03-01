import { useAppMode } from './useAppMode';
import { resolveStrategy } from '../modes';

export function useModeStrategy() {
  const { mode } = useAppMode();
  return resolveStrategy(mode);
}
