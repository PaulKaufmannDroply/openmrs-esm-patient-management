import { AppModeStrategy } from './types';

export const outreachStrategy: AppModeStrategy = {
  registration: {
    visibleFields: ['phone', 'nationality', 'languages'],
    requiredFields: [],
    locationSource: 'outreach-session',
  },
  patientChart: {
    visibleSections: ['vitals', 'conditions', 'medications'],
    layout: 'compact',
  },
  navigation: {
    showQueueManagement: false,
    showReporting: false,
  },
  session: {
    requiresLocationSelection: true,
  },
};
