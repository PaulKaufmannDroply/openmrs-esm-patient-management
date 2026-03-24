import React from 'react';
import { Button } from '@carbon/react';
import { useAppMode } from '../../hooks/useAppMode';
import { useModeConfigSync } from '../../hooks/useModeConfigSync';

export function ModeSelector() {
  const { mode, setMode } = useAppMode();
  useModeConfigSync();

  return (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <Button
        kind={mode === 'clinic' ? 'primary' : 'tertiary'}
        size="sm"
        onClick={() => setMode('clinic')}
        style={mode !== 'clinic' ? { color: '#fff', } : undefined}
      >
        Klinik
      </Button>
      <Button
        kind={mode === 'outreach' ? 'primary' : 'tertiary'}
        size="sm"
        onClick={() => setMode('outreach')}
        style={mode !== 'outreach' ? { color: '#fff', } : undefined}
      >
        Outreach
      </Button>
    </div>
  );
}

export default ModeSelector;
