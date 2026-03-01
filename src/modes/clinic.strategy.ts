import { type AppModeStrategy } from './types';

export const clinicStrategy: AppModeStrategy = {
  registration: {
    visibleFields: ['address', 'phone', 'nationality', 'languages'],
    requiredFields: ['address', 'phone'],
    locationSource: 'address',
  },
  patientChart: {
    visibleSections: ['vitals', 'conditions', 'medications', 'history', 'appointments'],
    layout: 'full',
  },
  navigation: {
    showQueueManagement: true,
    showReporting: true,
  },
  session: {
    requiresLocationSelection: false,
  },
};
