jest.mock('./useAppMode', () => ({
  useAppMode: jest.fn(() => ({ mode: 'outreach' })),
}));

import { renderHook } from '@testing-library/react';

describe('useModeStrategy', () => {
  it('returns outreach strategy when mode is outreach', () => {
    const { useModeStrategy } = require('./useModeStrategy');
    const { result } = renderHook(() => useModeStrategy());
    expect(result.current.registration.locationSource).toBe('outreach-session');
    expect(result.current.session.requiresLocationSelection).toBe(true);
  });
});
