import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('../../hooks/useAppMode', () => ({
  useAppMode: jest.fn(),
}));

describe('OutreachBanner', () => {
  it('renders nothing in clinic mode', () => {
    const { useAppMode } = require('../../hooks/useAppMode');
    useAppMode.mockReturnValue({ mode: 'clinic', outreachLocation: null });
    const { OutreachBanner } = require('./OutreachBanner');
    const { container } = render(<OutreachBanner />);
    expect(container).toBeEmptyDOMElement();
  });

  it('shows location in outreach mode', () => {
    const { useAppMode } = require('../../hooks/useAppMode');
    useAppMode.mockReturnValue({ mode: 'outreach', outreachLocation: 'Grenzcamp Norden' });
    const { OutreachBanner } = require('./OutreachBanner');
    render(<OutreachBanner />);
    expect(screen.getByText(/grenzcamp norden/i)).toBeInTheDocument();
  });

  it('shows placeholder when no location set', () => {
    const { useAppMode } = require('../../hooks/useAppMode');
    useAppMode.mockReturnValue({ mode: 'outreach', outreachLocation: null });
    const { OutreachBanner } = require('./OutreachBanner');
    render(<OutreachBanner />);
    expect(screen.getByText(/kein standort/i)).toBeInTheDocument();
  });
});
