import { useStore } from '@openmrs/esm-framework';
import { modeStore, setMode, setOutreachLocation } from '../store/mode.store';

export function useAppMode() {
  const { mode, outreachLocation } = useStore(modeStore);
  return { mode, outreachLocation, setMode, setOutreachLocation };
}
