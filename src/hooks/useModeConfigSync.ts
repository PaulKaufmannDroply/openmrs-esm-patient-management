import { useEffect } from 'react';
import { provide, useStore } from '@openmrs/esm-framework';
import { modeStore } from '../store/mode.store';

const REGISTRATION_MODULE = '@openmrs/esm-patient-registration-app';

const DEFAULT_SECTIONS = ['demographics', 'address', 'contact', 'emergency-contact', 'relationships', 'obs'];
const OUTREACH_SECTIONS = DEFAULT_SECTIONS.filter((s) => s !== 'address');

export function useModeConfigSync(): void {
  const { mode } = useStore(modeStore);

  useEffect(() => {
    const sections = mode === 'outreach' ? OUTREACH_SECTIONS : DEFAULT_SECTIONS;
    provide({ [REGISTRATION_MODULE]: { sections } }, 'msi-outreach-mode');
  }, [mode]);
}
