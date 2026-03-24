import { type AppModeStrategy } from './types';

export const clinicStrategy: AppModeStrategy = {
  registration: {
    visibleFields: ['phone', 'nationality', 'languages'],
    requiredFields: ['phone'],
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
