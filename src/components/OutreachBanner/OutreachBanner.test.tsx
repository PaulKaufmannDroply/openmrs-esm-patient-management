import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { OutreachBanner } from './OutreachBanner';

const mockSetOutreachLocation = jest.fn();

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
      onChange={(e) => onChange({ selectedItem: { id: e.target.value, label: e.target.value }, inputValue: null })}
    />
  ),
}));

const { useAppMode } = require('../../hooks/useAppMode');

describe('OutreachBanner', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders nothing in clinic mode', () => {
    useAppMode.mockReturnValue({ mode: 'clinic', outreachLocation: null, setOutreachLocation: mockSetOutreachLocation });
    const { container } = render(<OutreachBanner />);
    expect(container).toBeEmptyDOMElement();
  });

  it('shows a combobox in outreach mode', () => {
    useAppMode.mockReturnValue({ mode: 'outreach', outreachLocation: null, setOutreachLocation: mockSetOutreachLocation });
    render(<OutreachBanner />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('shows the current location as combobox value', () => {
    useAppMode.mockReturnValue({ mode: 'outreach', outreachLocation: 'Grenzcamp Süd', setOutreachLocation: mockSetOutreachLocation });
    render(<OutreachBanner />);
    expect(screen.getByDisplayValue('Grenzcamp Süd')).toBeInTheDocument();
  });

  it('calls setOutreachLocation when user selects a location', () => {
    useAppMode.mockReturnValue({ mode: 'outreach', outreachLocation: null, setOutreachLocation: mockSetOutreachLocation });
    render(<OutreachBanner />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Dorf Nord' } });
    expect(mockSetOutreachLocation).toHaveBeenCalledWith('Dorf Nord');
  });
});
