import { useStore } from '@openmrs/esm-framework';
import { modeStore } from '../store/mode.store';

// Placeholder — runtime config overrides will be added here once
// the exact registration ESM config paths are verified against the running app.
export function useModeConfigSync(): void {
  useStore(modeStore);
}
