import React from 'react';
import { Button } from '@carbon/react';
import { useAppMode } from '../../hooks/useAppMode';

export function ModeSelector() {
  const { mode, setMode } = useAppMode();

  return (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <Button
        kind={mode === 'clinic' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => setMode('clinic')}
      >
        Klinik
      </Button>
      <Button
        kind={mode === 'outreach' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => setMode('outreach')}
      >
        Outreach
      </Button>
    </div>
  );
}

export default ModeSelector;
