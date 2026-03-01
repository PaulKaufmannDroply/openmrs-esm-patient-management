const mockGetState = jest.fn();
const mockSetState = jest.fn();
const mockStore = { getState: mockGetState, setState: mockSetState };

jest.mock('@openmrs/esm-framework', () => ({
  createGlobalStore: jest.fn(() => mockStore),
}));

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    clear: () => { store = {}; },
  };
})();
Object.defineProperty(global, 'localStorage', { value: localStorageMock });

describe('mode store', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.resetModules();
  });

  it('defaults to clinic mode when localStorage is empty', async () => {
    const { createGlobalStore } = await import('@openmrs/esm-framework');
    await import('./mode.store');
    expect(createGlobalStore).toHaveBeenCalledWith(
      'msi-mode',
      expect.objectContaining({ mode: 'clinic' }),
    );
  });

  it('reads outreach mode from localStorage', async () => {
    localStorage.setItem('msi-mode', 'outreach');
    const { createGlobalStore } = await import('@openmrs/esm-framework');
    await import('./mode.store');
    expect(createGlobalStore).toHaveBeenCalledWith(
      'msi-mode',
      expect.objectContaining({ mode: 'outreach' }),
    );
  });

  it('setMode persists to localStorage', async () => {
    const { setMode } = await import('./mode.store');
    setMode('outreach');
    expect(localStorage.getItem('msi-mode')).toBe('outreach');
    expect(mockSetState).toHaveBeenCalledWith({ mode: 'outreach' });
  });

  it('setOutreachLocation persists to localStorage', async () => {
    const { setOutreachLocation } = await import('./mode.store');
    setOutreachLocation('Grenzcamp Norden');
    expect(localStorage.getItem('msi-outreach-location')).toBe('Grenzcamp Norden');
    expect(mockSetState).toHaveBeenCalledWith({ outreachLocation: 'Grenzcamp Norden' });
  });
});
