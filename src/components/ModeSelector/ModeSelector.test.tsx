import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

const mockSetMode = jest.fn();
jest.mock('../../hooks/useAppMode', () => ({
  useAppMode: () => ({
    mode: 'clinic',
    outreachLocation: null,
    setMode: mockSetMode,
    setOutreachLocation: jest.fn(),
  }),
}));

describe('ModeSelector', () => {
  beforeEach(() => jest.clearAllMocks());

  it('shows current mode as active', () => {
    const { ModeSelector } = require('./ModeSelector');
    render(<ModeSelector />);
    expect(screen.getByText(/klinik/i)).toBeInTheDocument();
  });

  it('calls setMode when switching to outreach', () => {
    const { ModeSelector } = require('./ModeSelector');
    render(<ModeSelector />);
    fireEvent.click(screen.getByRole('button', { name: /outreach/i }));
    expect(mockSetMode).toHaveBeenCalledWith('outreach');
  });
});
