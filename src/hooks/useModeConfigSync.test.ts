import { renderHook } from '@testing-library/react';

const mockProvide = jest.fn();
const mockUseStore = jest.fn();

jest.mock('@openmrs/esm-framework', () => ({
  useStore: mockUseStore,
  provide: mockProvide,
}));
jest.mock('../store/mode.store', () => ({
  modeStore: {},
}));

describe('useModeConfigSync', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls provide with address removed when mode is outreach', () => {
    mockUseStore.mockReturnValue({ mode: 'outreach', outreachLocation: null });
    const { useModeConfigSync } = require('./useModeConfigSync');
    renderHook(() => useModeConfigSync());
    expect(mockProvide).toHaveBeenCalledWith(
      expect.objectContaining({
        '@openmrs/esm-patient-registration-app': expect.objectContaining({
          sections: expect.not.arrayContaining(['address']),
        }),
      }),
      expect.any(String),
    );
  });

  it('calls provide with address included when mode is clinic', () => {
    mockUseStore.mockReturnValue({ mode: 'clinic', outreachLocation: null });
    const { useModeConfigSync } = require('./useModeConfigSync');
    renderHook(() => useModeConfigSync());
    expect(mockProvide).toHaveBeenCalledWith(
      expect.objectContaining({
        '@openmrs/esm-patient-registration-app': expect.objectContaining({
          sections: expect.arrayContaining(['address']),
        }),
      }),
      expect.any(String),
    );
  });
});
