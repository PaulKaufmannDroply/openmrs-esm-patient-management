import { createGlobalStore } from '@openmrs/esm-framework';
import { AppMode } from '../modes/types';

interface ModeStore {
  mode: AppMode;
  outreachLocation: string | null;
}

const storedMode = localStorage.getItem('msi-mode');
const initialMode: AppMode = storedMode === 'outreach' ? 'outreach' : 'clinic';
const initialLocation = localStorage.getItem('msi-outreach-location');

export const modeStore = createGlobalStore<ModeStore>('msi-mode', {
  mode: initialMode,
  outreachLocation: initialLocation,
});

export function setMode(mode: AppMode): void {
  modeStore.setState({ mode });
  localStorage.setItem('msi-mode', mode);
}

export function setOutreachLocation(location: string): void {
  modeStore.setState({ outreachLocation: location });
  localStorage.setItem('msi-outreach-location', location);
}
