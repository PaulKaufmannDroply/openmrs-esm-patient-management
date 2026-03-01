import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('../../hooks/useAppMode', () => ({
  useAppMode: jest.fn(),
}));
jest.mock('@openmrs/esm-framework', () => ({
  useConfig: jest.fn(() => ({ outreachLocations: ['Dorf Nord', 'Grenzcamp Süd'] })),
}));
jest.mock('@carbon/react', () => ({
  ComboBox: ({ id, selectedItem, placeholder, onChange }: any) => (
    <input
      role="combobox"
      id={id}
      value={selectedItem?.label ?? ''}
      placeholder={placeholder}
      onChange={(e) => onChange({ selectedItem: null, inputValue: e.target.value })}
      readOnly={!onChange}
    />
  ),
}));

describe('OutreachBanner', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('renders nothing in clinic mode', () => {
    const { useAppMode } = require('../../hooks/useAppMode');
    useAppMode.mockReturnValue({ mode: 'clinic', outreachLocation: null, setOutreachLocation: jest.fn() });
    const { OutreachBanner } = require('./OutreachBanner');
    const { container } = render(<OutreachBanner />);
    expect(container).toBeEmptyDOMElement();
  });

  it('shows a combobox in outreach mode', () => {
    const { useAppMode } = require('../../hooks/useAppMode');
    useAppMode.mockReturnValue({ mode: 'outreach', outreachLocation: null, setOutreachLocation: jest.fn() });
    const { OutreachBanner } = require('./OutreachBanner');
    render(<OutreachBanner />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('shows the current location as combobox value', () => {
    const { useAppMode } = require('../../hooks/useAppMode');
    useAppMode.mockReturnValue({ mode: 'outreach', outreachLocation: 'Grenzcamp Süd', setOutreachLocation: jest.fn() });
    const { OutreachBanner } = require('./OutreachBanner');
    render(<OutreachBanner />);
    expect(screen.getByDisplayValue('Grenzcamp Süd')).toBeInTheDocument();
  });
});
