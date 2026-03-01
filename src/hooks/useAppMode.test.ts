import { renderHook } from '@testing-library/react';

const mockStore = { mode: 'clinic', outreachLocation: null };
jest.mock('@openmrs/esm-framework', () => ({
  useStore: jest.fn(() => mockStore),
}));
jest.mock('../store/mode.store', () => ({
  modeStore: {},
  setMode: jest.fn(),
  setOutreachLocation: jest.fn(),
}));

describe('useAppMode', () => {
  it('returns current mode and location', () => {
    const { useAppMode } = require('./useAppMode');
    const { result } = renderHook(() => useAppMode());
    expect(result.current.mode).toBe('clinic');
    expect(result.current.outreachLocation).toBeNull();
  });

  it('exposes setMode and setOutreachLocation', () => {
    const { useAppMode } = require('./useAppMode');
    const { result } = renderHook(() => useAppMode());
    expect(typeof result.current.setMode).toBe('function');
    expect(typeof result.current.setOutreachLocation).toBe('function');
  });
});
