import { type AppMode, type AppModeStrategy } from './types';

describe('AppModeStrategy type', () => {
  it('clinic strategy satisfies AppModeStrategy', () => {
    const strategy: AppModeStrategy = {
      registration: {
        visibleFields: ['address'],
        requiredFields: ['address'],
        locationSource: 'address',
      },
      patientChart: {
        visibleSections: ['vitals'],
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
    expect(strategy.registration.locationSource).toBe('address');
  });

  it('mode is either clinic or outreach', () => {
    const mode: AppMode = 'clinic';
    expect(['clinic', 'outreach']).toContain(mode);
  });
});
