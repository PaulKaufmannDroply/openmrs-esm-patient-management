import { renderHook } from '@testing-library/react';
import { useModeConfigSync } from './useModeConfigSync';
import { provide, useStore } from '@openmrs/esm-framework';

jest.mock('@openmrs/esm-framework', () => ({
  useStore: jest.fn(),
  provide: jest.fn(),
}));
jest.mock('../store/mode.store', () => ({
  modeStore: {},
}));

const mockUseStore = useStore as jest.Mock;
const mockProvide = provide as jest.Mock;

describe('useModeConfigSync', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls provide with address removed when mode is outreach', () => {
    mockUseStore.mockReturnValue({ mode: 'outreach', outreachLocation: null });
    renderHook(() => useModeConfigSync());
    expect(mockProvide).toHaveBeenCalledWith(
      expect.objectContaining({
        '@openmrs/esm-patient-registration-app': expect.objectContaining({
          sections: expect.not.arrayContaining(['address']),
        }),
      }),
      'msi-outreach-mode',
    );
  });

  it('calls provide with address included when mode is clinic', () => {
    mockUseStore.mockReturnValue({ mode: 'clinic', outreachLocation: null });
    renderHook(() => useModeConfigSync());
    expect(mockProvide).toHaveBeenCalledWith(
      expect.objectContaining({
        '@openmrs/esm-patient-registration-app': expect.objectContaining({
          sections: expect.arrayContaining(['address']),
        }),
      }),
      'msi-outreach-mode',
    );
  });
});
