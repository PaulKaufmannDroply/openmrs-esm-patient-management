export type AppMode = 'clinic' | 'outreach';

export interface AppModeStrategy {
  registration: {
    visibleFields: string[];
    requiredFields: string[];
    locationSource: 'address' | 'outreach-session';
  };
  patientChart: {
    visibleSections: string[];
    layout: 'full' | 'compact';
  };
  navigation: {
    showQueueManagement: boolean;
    showReporting: boolean;
  };
  session: {
    requiresLocationSelection: boolean;
  };
}
