import { renderHook } from '@testing-library/react';
import { useModeConfigSync } from './useModeConfigSync';
import { useStore } from '@openmrs/esm-framework';

jest.mock('@openmrs/esm-framework', () => ({
  useStore: jest.fn(),
}));
jest.mock('../store/mode.store', () => ({
  modeStore: {},
}));

const mockUseStore = useStore as jest.Mock;

describe('useModeConfigSync', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseStore.mockReturnValue({ mode: 'clinic', outreachLocation: null });
  });

  it('mounts without errors', () => {
    expect(() => renderHook(() => useModeConfigSync())).not.toThrow();
  });
});
