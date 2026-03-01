import { resolveStrategy } from './index';

describe('resolveStrategy', () => {
  it('returns clinic strategy for clinic mode', () => {
    const strategy = resolveStrategy('clinic');
    expect(strategy.registration.locationSource).toBe('address');
    expect(strategy.navigation.showQueueManagement).toBe(true);
    expect(strategy.session.requiresLocationSelection).toBe(false);
  });

  it('returns outreach strategy for outreach mode', () => {
    const strategy = resolveStrategy('outreach');
    expect(strategy.registration.locationSource).toBe('outreach-session');
    expect(strategy.navigation.showQueueManagement).toBe(false);
    expect(strategy.session.requiresLocationSelection).toBe(true);
  });

  it('outreach does not show address field', () => {
    const strategy = resolveStrategy('outreach');
    expect(strategy.registration.visibleFields).not.toContain('address');
  });

  it('clinic shows address field', () => {
    const strategy = resolveStrategy('clinic');
    expect(strategy.registration.visibleFields).toContain('address');
  });
});
